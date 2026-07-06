'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaWifi, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Navbar from '@/app/components/dashboard/Navbar';
import api from '../../../lib/axios'; 

// Import komponen pendukung dari folder lokal
import FarmerListPanel from '../../../components/dashboard/data-tanaman/FarmerListPanel';
import FarmerPlantDetail from '../../../components/dashboard/data-tanaman/FarmerPlantDetail';

// ==========================================
// CONFIG TOAST SWEETALERT2 MODERN (KANAN ATAS)
// ==========================================
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
  customClass: {
    popup: 'rounded-xl shadow-xl border border-zinc-100 font-sans'
  }
});

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface FarmerGroup {
  id: number;
  name: string;
  description: string;
}

export interface Plant {
  id: string | number;
  name: string;
  planting_date: string;
  created_at: string;
}

export interface Land {
  id: number;
  farmer_id: number;
  land_name: string;
  area: string;
  location_address: string;
  polygon_coordinates: number[][];
  created_at: string;
  updated_at: string;
  plants?: Plant[]; 
}

export interface Farmer {
  id: number;
  user_id: number;
  farmer_group_id: number;
  nik: string;
  total_land_area: string;
  notes: string;
  user: User;
  farmer_group: FarmerGroup;
  lands: Land[];
}

export default function DataTanamanPetaniPage() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('Andi');
  
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchFarmer, setSearchFarmer] = useState('');
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        setLoading(true);
        const response = await api.get('/farmers');
        if (response.data && response.data.success) {
          setFarmers(response.data.data);
        }
      } catch (error) {
        console.error('Gagal memuat data petani:', error);
        Toast.fire({
          icon: 'error',
          title: 'Gagal memuat data dari server.'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();

    const profile = localStorage.getItem('user_profile');
    if (profile) {
      const parsed = JSON.parse(profile);
      if (parsed.name) setAdminName(parsed.name);
    }
  }, []);

  const handleSelectFarmer = (farmer: Farmer) => {
    setSelectedFarmer(farmer);
    setIsAdding(false);
  };

  const handleSavePlant = async (newData: { land_id: number; plants: { name: string; planting_date: string }[] }) => {
    if (!selectedFarmer) return;

    try {
      const response = await api.post('/plants', newData);

      if (response.data && response.data.success) {
        const savedPlantsFromDB = response.data.data; 

        const updatedLands = selectedFarmer.lands.map((land) => {
          if (land.id === newData.land_id) {
            const currentPlants = land.plants || [];
            return {
              ...land,
              plants: [...currentPlants, ...savedPlantsFromDB], 
              updated_at: new Date().toISOString(),
            };
          }
          return land;
        });

        const updatedFarmers = farmers.map((f) => {
          if (f.id === selectedFarmer.id) return { ...f, lands: updatedLands };
          return f;
        });

        setFarmers(updatedFarmers);
        setSelectedFarmer((prev) => (prev ? { ...prev, lands: updatedLands } : null));
        setIsAdding(false);

        Toast.fire({
          icon: 'success',
          title: 'Varietas berhasil disimpan!'
        });
      }
    } catch (error: any) {
      console.error('Gagal menyimpan tanaman:', error);
      Toast.fire({
        icon: 'error',
        title: error.response?.data?.message || 'Gagal menyimpan varietas.'
      });
    }
  };

  const handleUpdatePlant = async (
    plantId: string | number, 
    updatedData: { name: string; planting_date: string; land_id: number }
  ) => {
    if (!selectedFarmer) return;

    try {
      const response = await api.put(`/plants/${plantId}`, updatedData);

      if (response.data && response.data.success) {
        const updatedPlantFromDB = response.data.data;

        const updatedLands = selectedFarmer.lands.map((land) => {
          if (land.id === updatedData.land_id) {
            return {
              ...land,
              plants: land.plants?.map((plant) => plant.id === plantId ? updatedPlantFromDB : plant) || [],
              updated_at: new Date().toISOString(),
            };
          }
          return land;
        });

        const updatedFarmers = farmers.map((f) => {
          if (f.id === selectedFarmer.id) return { ...f, lands: updatedLands };
          return f;
        });

        setFarmers(updatedFarmers);
        setSelectedFarmer((prev) => (prev ? { ...prev, lands: updatedLands } : null));
        setIsAdding(false); 

        Toast.fire({
          icon: 'success',
          title: 'Data berhasil diperbarui!'
        });
      }
    } catch (error: any) {
      console.error('Gagal memperbarui tanaman:', error);
      Toast.fire({
        icon: 'error',
        title: error.response?.data?.message || 'Gagal memperbarui data.'
      });
    }
  };

  const handleDeleteAllPlants = (landId: number, plantIds: (string | number)[]) => {
    Swal.fire({
      title: 'Hapus semua varietas?',
      text: `Seluruh (${plantIds.length}) tanaman pada lahan ini akan dibersihkan.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#e4e4e7',
      confirmButtonText: 'Ya, Kosongkan',
      cancelButtonText: 'Batal',
      customClass: { popup: 'rounded-2xl font-sans' }
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!selectedFarmer) return;

        try {
          await Promise.all(plantIds.map(id => api.delete(`/plants/${id}`)));

          const updatedLands = selectedFarmer.lands.map((land) => {
            if (land.id === landId) {
              return { ...land, plants: [] }; 
            }
            return land;
          });

          const updatedFarmers = farmers.map((f) => {
            if (f.id === selectedFarmer.id) return { ...f, lands: updatedLands };
            return f;
          });

          setFarmers(updatedFarmers);
          setSelectedFarmer((prev) => (prev ? { ...prev, lands: updatedLands } : null));

          Toast.fire({
            icon: 'success',
            title: 'Lahan berhasil dikosongkan.'
          });
        } catch (error: any) {
          console.error('Gagal menghapus masal tanaman:', error);
          Toast.fire({
            icon: 'error',
            title: 'Gagal mengosongkan lahan.'
          });
        }
      }
    });
  };

  const handleDeletePlant = (plantId: string | number) => {
    Swal.fire({
      title: 'Hapus varietas ini?',
      text: "Data komoditas terpilih akan dihapus permanen.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#e4e4e7',
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal',
      customClass: { popup: 'rounded-2xl font-sans' }
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (!selectedFarmer) return;

        try {
          const response = await api.delete(`/plants/${plantId}`);

          if (response.data && response.data.success) {
            const updatedLands = selectedFarmer.lands.map((land) => ({
              ...land,
              plants: land.plants?.filter((plant) => plant.id !== plantId) || [],
            }));

            const updatedFarmers = farmers.map((f) => {
              if (f.id === selectedFarmer.id) return { ...f, lands: updatedLands };
              return f;
            });

            setFarmers(updatedFarmers);
            setSelectedFarmer((prev) => (prev ? { ...prev, lands: updatedLands } : null));

            Toast.fire({
              icon: 'success',
              title: 'Varietas berhasil dihapus.'
            });
          }
        } catch (error: any) {
          console.error('Gagal menghapus tanaman:', error);
          Toast.fire({
            icon: 'error',
            title: 'Gagal menghapus data.'
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-800 antialiased font-sans pb-12">
      <Navbar 
      adminName={adminName} 
      roleName="admin-lapangan" 
      handleLogout={() => router.push('/auth/login')} 
    />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-13 mt-6">
        {/* Header Utama */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Link 
              href="/dashboard/admin-lapangan"
              className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-500 hover:text-zinc-800 shadow-sm transition flex items-center justify-center"
            >
              <FaArrowLeft className="text-sm" />
            </Link>
            <div>
              <h1 className="text-xl font-extrabold text-zinc-900 tracking-tight">Komoditas & Data Tanaman Petani</h1>
              <p className="text-xs text-zinc-500 font-medium">Pencatatan jenis varietas tanaman aktif per komoditas garapan petani</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-semibold self-start sm:self-center shadow-sm">
            <FaWifi />
            <span>Koneksi Server Aktif</span>
          </div>
        </div>

        {/* LOADING STATE - MODERN SKELETON LOADER */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-pulse">
            {/* Skeleton List Panel Petani */}
            <div className="lg:col-span-4 bg-white border border-zinc-100 rounded-3xl p-5 space-y-4 shadow-sm">
              <div className="h-9 bg-zinc-200/80 rounded-xl w-full"></div>
              <div className="space-y-3 pt-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="flex items-center gap-3 p-2.5 border border-zinc-100/50 rounded-2xl">
                    <div className="w-10 h-10 bg-zinc-200 rounded-full shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-zinc-200 rounded w-2/3"></div>
                      <div className="h-2.5 bg-zinc-100 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skeleton Detail Lahan & Tanaman */}
            <div className="lg:col-span-8 space-y-5">
              <div className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm flex justify-between items-center">
                <div className="space-y-2 flex-1">
                  <div className="h-3 bg-zinc-200 rounded w-24"></div>
                  <div className="h-4 bg-zinc-200 rounded w-48"></div>
                </div>
                <div className="h-8 bg-zinc-200 rounded-xl w-32"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map((n) => (
                  <div key={n} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-3 bg-zinc-200 rounded w-20"></div>
                      <div className="h-6 bg-zinc-100 rounded-lg w-24"></div>
                    </div>
                    <div className="h-12 bg-zinc-50 rounded-xl border border-zinc-100"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-zinc-200 rounded w-1/3"></div>
                      <div className="h-10 bg-zinc-100 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* TAMPILAN UTAMA KONTEN */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <FarmerListPanel 
                farmers={farmers}
                searchFarmer={searchFarmer}
                setSearchFarmer={setSearchFarmer}
                selectedFarmer={selectedFarmer}
                onSelectFarmer={handleSelectFarmer}
              />
            </div>

            <div className="lg:col-span-8">
              <FarmerPlantDetail 
                selectedFarmer={selectedFarmer}
                isAdding={isAdding}
                setIsAdding={setIsAdding}
                onSavePlant={handleSavePlant}
                onDeletePlant={handleDeletePlant}
                onDeleteAllPlantsInLand={handleDeleteAllPlants}
                onUpdatePlant={handleUpdatePlant} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}