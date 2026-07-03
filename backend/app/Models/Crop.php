<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Crop extends Model
{
    use HasFactory;

    // Menentukan kolom mana saja yang boleh diisi secara massal (Mass Assignment)
    protected $fillable = [
        'parcel_id', 
        'crop_type', 
        'planting_date', 
        'estimated_harvest_date', 
        'status'
    ];

    // Kolom tanggal yang otomatis dikonversi menjadi objek Carbon/Datetime oleh Laravel
    protected $casts = [
        'planting_date' => 'date',
        'estimated_harvest_date' => 'date',
    ];

    /**
     * Relasi Balik: Setiap catatan komoditas/tanaman ini dimiliki oleh satu Lahan (Parcel)
     */
    public function parcel()
    {
        return $this->belongsTo(Parcel::class);
    }
}