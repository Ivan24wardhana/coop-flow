'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaBars, FaMapMarkedAlt, FaUsers, FaLeaf, 
  FaSignOutAlt, FaChartPie, FaBell, FaUserCircle 
} from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function AdminLapanganDashboard() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [adminName, setAdminName] = useState('Admin Lapangan');

  useEffect(() => {
    // Ambil info nama admin dari profile login lokal
    const profile = localStorage.getItem('user_profile');
    if (profile) {
      const parsed = JSON.parse(profile);
      if (parsed.name) setAdminName(parsed.name);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Sesi login Anda akan berakhir.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007A37',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Keluar!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_profile');
        router.push('/auth/login');
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex text-gray-800">
      
      {/* --- REUSABLE SIDEBAR COMPONENT --- */}
      <aside className={`bg-[#004d23] text-white flex flex-col transition-all duration-300 z-20 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        {/* Header Sidebar */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-green-800">
          {isSidebarOpen ? (
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="COOP-FLOW" className="h-8 brightness-200" />
              <span className="font-bold text-lg tracking-wider">COOPFLOW</span>
            </div>
          ) : (
            <img src="/logo.png" alt="Logo" className="h-8 mx-auto brightness-200" />
          )}
        </div>

        {/* Menu Navigasi Sidebar */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <a href="#" className="flex items-center space-x-4 p-3 rounded bg-green-800 text-white font-medium">
            <FaChartPie className="text-xl shrink-0" />
            {isSidebarOpen && <span>Overview</span>}
          </a>
          <a href="#" className="flex items-center space-x-4 p-3 rounded hover:bg-green-800/50 text-gray-200 transition">
            <FaMapMarkedAlt className="text-xl shrink-0" />
            {isSidebarOpen && <span>Mapping Lahan (GIS)</span>}
          </a>
          <a href="#" className="flex items-center space-x-4 p-3 rounded hover:bg-green-800/50 text-gray-200 transition">
            <FaLeaf className="text-xl shrink-0" />
            {isSidebarOpen && <span>Produksi Petani</span>}
          </a>
          <a href="#" className="flex items-center space-x-4 p-3 rounded hover:bg-green-800/50 text-gray-200 transition">
            <FaUsers className="text-xl shrink-0" />
            {isSidebarOpen && <span>Kelompok Tani</span>}
          </a>
        </nav>

        {/* Footer Sidebar (Logout) */}
        <div className="p-4 border-t border-green-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 p-3 rounded bg-red-700 hover:bg-red-800 text-white font-medium transition"
          >
            <FaSignOutAlt className="text-xl shrink-0" />
            {isSidebarOpen && <span>Keluar</span>}
          </button>
        </div>
      </aside>

      {/* --- MAIN MAIN WRAPPER --- */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* --- REUSABLE NAVBAR COMPONENT --- */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10">
          {/* Tombol Toggle Menu */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded hover:bg-gray-100 text-gray-600 transition focus:outline-none"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Sisi Kanan Navbar */}
          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition">
              <FaBell className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3 border-l pl-4 border-gray-200">
              <FaUserCircle className="text-2xl text-gray-400" />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-700 leading-none mb-1">{adminName}</p>
                <p className="text-xs text-gray-400 leading-none">Admin Lapangan</p>
              </div>
            </div>
          </div>
        </header>

        {/* --- ISI KONTEN UTAMA DASHBOARD --- */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Ringkasan Aktivitas Lapangan</h1>
            <p className="text-sm text-gray-500">Pantau data spasial lahan dan statistik klaster kelompok tani hari ini.</p>
          </div>

          {/* Baris Statistik Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
              <div className="p-4 bg-green-100 text-[#007A37] rounded-full">
                <FaMapMarkedAlt className="text-2xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase">Total Area Lahan</p>
                <p className="text-2xl font-bold text-gray-800">1,240 Ha</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                <FaUsers className="text-2xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase">Petani Terdaftar</p>
                <p className="text-2xl font-bold text-gray-800">348 Orang</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-4">
              <div className="p-4 bg-yellow-100 text-yellow-600 rounded-full">
                <FaLeaf className="text-2xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase">Estimasi Panen (ML)</p>
                <p className="text-2xl font-bold text-gray-800">4,120 Ton</p>
              </div>
            </div>
          </div>

          {/* Area Kosong untuk Map / Konten Lanjutan */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-96 flex flex-col items-center justify-center text-center">
            <div className="border-4 border-dashed border-gray-200 p-8 rounded-lg flex flex-col items-center max-w-sm">
              <FaMapMarkedAlt className="text-4xl text-gray-300 mb-4" />
              <h3 className="text-base font-semibold text-gray-700 mb-1">Peta GIS Belum Dimuat</h3>
              <p className="text-xs text-gray-400">Modul visualisasi poligon lahan petani (PostGIS) akan di-render di area panel ini pada tahap berikutnya.</p>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}