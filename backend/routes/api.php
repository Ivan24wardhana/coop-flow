<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ParcelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes (Bisa diakses tanpa login)
|--------------------------------------------------------------------------
*/
// Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


/*
|--------------------------------------------------------------------------
| Protected Routes (Wajib login/terautentikasi Sanctum)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {
    
    // Route bawaan Laravel untuk mengambil profil user yang sedang login
    Route::get('/user', function (Request $request) {
        return $request->user()->load('roles'); // Kita tambahkan load('roles') agar frontend tahu rolenya
    });

    // Route untuk Logout (Hapus Token)
    Route::post('/logout', [AuthController::class, 'logout']);

    // Route untuk menyimpan Lahan Spasial Baru (Sudah ada proteksi role di dalam controllernya)
    Route::post('/parcels', [ParcelController::class, 'store']);
    
});