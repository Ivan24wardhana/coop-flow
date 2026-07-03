<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parcel extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'area_hectares', 'status', 'geom'];

    // Relasi balik ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Hubungan: Satu lahan bisa punya banyak riwayat siklus tanam
    public function crops()
    {
        return $this->hasMany(Crop::class);
    }
}