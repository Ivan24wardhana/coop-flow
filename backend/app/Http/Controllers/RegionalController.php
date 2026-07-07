<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravolt\Indonesia\Models\Province;
use Laravolt\Indonesia\Models\City;
use Laravolt\Indonesia\Models\District;
use Laravolt\Indonesia\Models\Village;

class RegionalController extends Controller
{
    // Ambil semua data Provinsi
    public function getProvinces()
    {
        $provinces = Province::orderBy('name', 'asc')->get();
        return response()->json($provinces);
    }

    // Ambil data Kabupaten/Kota berdasarkan ID atau Code Provinsi dari URL Parameter
    public function getCities($province_id)
    {
        // Cari provinsi terlebih dahulu untuk mendapatkan 'code' aslinya jika frontend mengirimkan ID database
        $province = Province::where('id', $province_id)
                            ->orWhere('code', $province_id)
                            ->first();

        if (!$province) {
            return response()->json([]);
        }

        $cities = City::where('province_code', $province->code)
                      ->orderBy('name', 'asc')
                      ->get();

        return response()->json($cities);
    }

    // Ambil data Kecamatan berdasarkan ID atau Code Kota/Kabupaten dari URL Parameter
    public function getDistricts($city_id)
    {
        // Cari city terlebih dahulu untuk mendapatkan 'code' relasi laravolt
        $city = City::where('id', $city_id)
                    ->orWhere('code', $city_id)
                    ->first();

        if (!$city) {
            return response()->json([]);
        }

        $districts = District::where('city_code', $city->code)
                             ->orderBy('name', 'asc')
                             ->get();

        return response()->json($districts);
    }

    // Ambil data Desa berdasarkan ID atau Code Kecamatan dari URL Parameter
    public function getVillages($district_id)
    {
        // Cari district terlebih dahulu untuk mendapatkan 'code' relasi laravolt
        $district = District::where('id', $district_id)
                            ->orWhere('code', $district_id)
                            ->first();

        if (!$district) {
            return response()->json([]);
        }

        $villages = Village::where('district_code', $district->code)
                           ->orderBy('name', 'asc')
                           ->get();

        return response()->json($villages);
    }
}