'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../lib/axios';
import Swal from 'sweetalert2';

// Konfigurasi Standar Toast SweetAlert2 kecil di kanan atas
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validasi Sederhana di Frontend
    if (!email || !password) {
      Toast.fire({
        icon: 'warning',
        title: 'Email dan password wajib diisi.'
      });
      return;
    }

    try {
      setLoading(true);
      
      // 2. Hit ke Backend Laravel
      const response = await api.post('/login', { email, password });
      const { access_token, user } = response.data;

      // 3. Simpan Token dan Data User
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_profile', JSON.stringify(user));

      // Toast Sukses
      Toast.fire({
        icon: 'success',
        title: 'Login Berhasil! Selamat datang.'
      });
      
      // 4. Redirect Berdasarkan Role
      const userRoles = user.roles?.map((r: any) => r.name) || [];
      if (userRoles.includes('admin-lapangan')) {
        router.push('/dashboard/admin-lapangan');
      } else {
        router.push('/dashboard'); 
      }

    } catch (err: any) {
      let msg = 'Tidak dapat terhubung ke server backend.';
      if (err.response && err.response.data) {
        msg = err.response.data.message || 'Terjadi kesalahan saat login.';
      }
      
      // Toast Error
      Toast.fire({
        icon: 'error',
        title: msg
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-between p-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/bg-login.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* SISI KIRI: Form Login Box */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 z-10 ml-0 lg:ml-12">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="COOP-FLOW Logo" className="h-12 mb-2" />
          <h2 className="text-xl font-bold text-gray-800">Selamat datang kembali</h2>
          <p className="text-sm text-gray-500">Silakan masuk untuk mengelola koperasi Anda</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@koperasi.id"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600 text-gray-800"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2 rounded border-gray-300 accent-green-600" />
              Ingat saya
            </label>
            <a href="#" className="text-green-600 hover:underline font-medium">Lupa password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#007A37] text-white font-bold rounded hover:bg-green-800 transition duration-200 uppercase tracking-wide"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
          
          <button
            type="button"
            onClick={() => router.push('/auth/register')}
            className="w-full py-3 border border-green-600 text-[#007A37] font-bold rounded hover:bg-green-50 transition duration-200 uppercase tracking-wide"
          >
            Daftar
          </button>
        </form>
      </div>

      {/* SISI KANAN */}
      <div className="hidden lg:flex flex-col justify-center max-w-xl text-white z-10 mr-12 text-right">
        <span className="bg-green-500/80 text-white text-xs px-3 py-1 rounded-full w-max ml-auto mb-4 font-mono tracking-widest">
          INTELLIGENCE LAYER V2.0
        </span>
        <h1 className="text-4xl font-extrabold leading-tight mb-6">
          Ekosistem Digital Berbasis GIS dan Machine Learning untuk Petani dan Koperasi.
        </h1>
        <div className="flex justify-end space-x-8 text-center">
          <div>
            <p className="text-2xl font-bold text-green-400">98%</p>
            <p className="text-xs text-gray-200">Akurasi GIS</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">15k+</p>
            <p className="text-xs text-gray-200">Petani Aktif</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">24/7</p>
            <p className="text-xs text-gray-200">ML Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}