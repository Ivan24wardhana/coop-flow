<?php

namespace App\Http\Controllers\Api\Cooperative;

use App\Http\Controllers\Controller;
use App\Models\Warehouse;
use App\Models\Fertilizer;
use App\Models\InventoryMutation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InventoryController extends Controller
{
    /**
     * 1. GET OVERVIEW & TABLE STOK (Dinamis sesuai Koperasi User)
     */
    public function getOverview(Request $request)
    {
        // AMBIL ID KOPERASI DARI USER YANG LOGIN (Multi-tenancy Secure)
        $cooperativeId = auth()->user()->cooperative_id;

        if (!$cooperativeId) {
            return response()->json([
                'status' => 'error',
                'message' => 'User Anda tidak terikat dengan koperasi mana pun.'
            ], 403);
        }

        // Ambil semua gudang milik koperasi ini beserta data pupuk di dalamnya
        $warehouses = Warehouse::where('cooperative_id', $cooperativeId)
            ->with('fertilizers')
            ->get();

        // Ambil semua daftar pupuk untuk tabel utama
        $fertilizers = Fertilizer::whereIn('warehouse_id', $warehouses->pluck('id'))->get();

        // --- KALKULASI DATA UNTUK KARTU METRIK ---
        $totalStok = $fertilizers->sum('current_stock_kg');
        
        $totalNilaiRupiah = $fertilizers->sum(function ($fertilizer) {
            return $fertilizer->current_stock_kg * $fertilizer->price_per_kg;
        });

        $jumlahGudangAktif = $warehouses->count();

        // --- MAPPING STATUS STOK UNTUK TABEL FRONTEND ---
        $stockTableData = $fertilizers->map(function ($item) {
            $status = 'Aman';
            if ($item->current_stock_kg <= 0) {
                $status = 'Kritis';
            } elseif ($item->current_stock_kg <= $item->minimum_stock_kg) {
                $status = 'Waspada';
            }

            return [
                'id' => $item->id,
                'name' => $item->name,
                'current_stock' => $item->current_stock_kg,
                'minimum_stock' => $item->minimum_stock_kg,
                'price_per_kg' => $item->price_per_kg,
                'status' => $status,
                'warehouse_name' => $item->warehouse->name
            ];
        });

        return response()->json([
            'status' => 'success',
            'summary' => [
                'total_stock_kg' => $totalStok,
                'total_value_idr' => $totalNilaiRupiah,
                'active_warehouses' => $jumlahGudangAktif,
            ],
            'stocks' => $stockTableData,
            'warehouses' => $warehouses->map(function ($wh) {
                return [
                    'id' => $wh->id,
                    'name' => $wh->name,
                    'capacity_kg' => $wh->capacity_kg,
                    'used_stock_kg' => $wh->fertilizers->sum('current_stock_kg')
                ];
            })
        ], 200);
    }

    /**
     * 2. GET MUTATION HISTORY (Dinamis sesuai Koperasi User)
     */
    public function getMutationHistory()
    {
        // AMBIL ID KOPERASI DARI USER YANG LOGIN
        $cooperativeId = auth()->user()->cooperative_id;

        if (!$cooperativeId) {
            return response()->json([
                'status' => 'error',
                'message' => 'User Anda tidak terikat dengan koperasi mana pun.'
            ], 403);
        }

        // Ambil riwayat mutasi yang hanya berkaitan dengan gudang koperasi ini
        $histories = InventoryMutation::whereHas('fertilizer.warehouse', function ($query) use ($cooperativeId) {
                $query->where('cooperative_id', $cooperativeId);
            })
            ->with(['fertilizer', 'farmer.user'])
            ->latest()
            ->get();

        $formattedHistories = $histories->map(function ($history) {
            return [
                'id' => $history->id,
                'fertilizer' => $history->fertilizer,
                'type' => $history->type,
                'quantity_kg' => $history->quantity_kg,
                'description' => $history->description,
                'created_at' => $history->created_at,
                'farmer' => $history->farmer ? [
                    'id' => $history->farmer->id,
                    'user' => [
                        'name' => $history->farmer->user->name ?? 'Petani Tanpa Nama'
                    ]
                ] : [
                    'user' => [
                        'name' => 'Umum / Pasokan Lini III'
                    ]
                ]
            ];
        });

        return response()->json([
            'status' => 'success',
            'data' => $formattedHistories
        ], 200);
    }

    /**
     * 3. POST STORE MUTATION (Aksi Form Tambah/Kurang Stok + Proteksi Cross-Tenant)
     */
    public function storeMutation(Request $request)
    {
        $cooperativeId = auth()->user()->cooperative_id;

        if (!$cooperativeId) {
            return response()->json([
                'status' => 'error',
                'message' => 'User Anda tidak terikat dengan koperasi mana pun.'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'fertilizer_id' => 'required|exists:fertilizers,id',
            'farmer_id'     => 'nullable|exists:farmers,id',
            'type'          => 'required|in:masuk,keluar',
            'quantity_kg'   => 'required|integer|min:1',
            'description'   => 'required|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        try {
            DB::beginTransaction();

            // Proteksi Tambahan: Pastikan barang pupuk yang dimutasi benar-benar ada di dalam gudang milik koperasi user ini
            $fertilizer = Fertilizer::whereHas('warehouse', function ($query) use ($cooperativeId) {
                $query->where('cooperative_id', $cooperativeId);
            })->find($request->fertilizer_id);

            if (!$fertilizer) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Barang pupuk tidak ditemukan atau bukan milik otorisasi gudang koperasi Anda.'
                ], 403);
            }

            // Logika validasi pengurangan: Jangan sampai stok minus
            if ($request->type === 'keluar' && $fertilizer->current_stock_kg < $request->quantity_kg) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Stok tidak mencukupi untuk melakukan mutasi keluar. Sisa stok: ' . $fertilizer->current_stock_kg . ' kg'
                ], 400);
            }

            // 1. Catat transaksi ke dalam tabel riwayat mutasi
            $mutation = InventoryMutation::create([
                'fertilizer_id' => $request->fertilizer_id,
                'farmer_id'     => $request->farmer_id,
                'type'          => $request->type,
                'quantity_kg'   => $request->quantity_kg,
                'description'   => $request->description,
            ]);

            // 2. Update kuantitas stok berjalan pada tabel pupuk
            if ($request->type === 'masuk') {
                $fertilizer->increment('current_stock_kg', $request->quantity_kg);
            } else {
                $fertilizer->decrement('current_stock_kg', $request->quantity_kg);
            }

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Mutasi stok berhasil disimpan dan saldo barang diperbarui.',
                'data' => $mutation
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menyimpan mutasi: ' . $e->getMessage()
            ], 500);
        }
    }
}