'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaWifi, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Navbar from '@/app/components/dashboard/Navbar';
import api from '../../../lib/axios'; 

import ValidationFarmerList from '@/app/components/dashboard/land-validation/ValidationFarmerList';
import MapWorkspace from '@/app/components/dashboard/land-validation/MapWorkspace';
import ValidationForm from '@/app/components/dashboard/land-validation/ValidationForm';
import EmptyValidationState from '@/app/components/dashboard/land-validation/EmptyValidationState';

export interface Land {
  id: number;
  farmer_id?: number;
  land_name: string;
  area: string | number;
  location_address?: string;
  polygon_coordinates?: [number, number][]; 
}

export interface Farmer {
  id: number;
  user_id: number;
  farmer_group?: {      
    id: number;
    name: string;
    description?: string;
  };
  nik: string;
  total_land_area: string | number;
  notes?: string;
  user?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  lands?: Land[];
  status?: string; 
}

export default function ValidasiLahanPage() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('Andi');
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'belum' | 'sudah'>('belum');
  
  const isReMappingRef = useRef<boolean>(false);
  const previousTabRef = useRef<'belum' | 'sudah'>('belum');
  
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);
  const [selectedLand, setSelectedLand] = useState<Land | null>(null);

  const [plantingDate, setPlantingDate] = useState('2026-11-20');
  const [areaHectares, setAreaHectares] = useState('0');
  const [polygonCoordinates, setPolygonCoordinates] = useState<[number, number][]>([]);

  useEffect(() => {
    if (isReMappingRef.current) {
      isReMappingRef.current = false;
      setPolygonCoordinates([]);
      previousTabRef.current = activeTab;
      return; 
    }

    if (previousTabRef.current !== activeTab) {
      setSelectedFarmer(null);
      setSelectedLand(null);
      setPolygonCoordinates([]);
      previousTabRef.current = activeTab;
    }
  }, [activeTab]);

  const handlePolygonUpdate = (coords: [number, number][]) => {
    setPolygonCoordinates(coords);
    if (coords.length >= 3) {
      const calculatedArea = (coords.length * 0.12).toFixed(2);
      setAreaHectares(calculatedArea);
    } else {
      if (selectedLand) setAreaHectares(parseFloat(selectedLand.area as string).toString());
    }
  };

  const fetchFarmers = async () => {
    try {
      const response = await api.get('/farmers');
      if (response.data.success) {
        setFarmers(response.data.data);
      }
    } catch (error) {
      console.error("Gagal memuat data petani", error);
    }
  };

  useEffect(() => {
    const profile = localStorage.getItem('user_profile');
    if (profile) {
      const parsed = JSON.parse(profile);
      if (parsed.name) setAdminName(parsed.name);
    }
    fetchFarmers();
  }, []);

  const handleSelectLandForMapping = (farmer: Farmer, land: Land) => {
    setSelectedFarmer(farmer);
    setSelectedLand(land);
    setAreaHectares(parseFloat(land.area as string).toString());
    
    if (land.polygon_coordinates && land.polygon_coordinates.length > 0) {
      setPolygonCoordinates(land.polygon_coordinates);
    } else {
      setPolygonCoordinates([]); 
    }
  };

  const handleTabChange = (tab: 'belum' | 'sudah') => {
    setSelectedFarmer(null);
    setSelectedLand(null);
    setPolygonCoordinates([]);
    setActiveTab(tab);
  };

  const handleSaveMapping = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFarmer || !selectedLand) return;

    try {
      const payload = {
        name: selectedFarmer.user?.name || '',
        email: selectedFarmer.user?.email || '',
        phone: selectedFarmer.user?.phone || null,
        address: selectedFarmer.user?.address || null,
        farmer_group_id: selectedFarmer.farmer_group?.id || null,
        nik: selectedFarmer.nik,
        notes: selectedFarmer.notes || null,
        
        lands: selectedFarmer.lands?.map((land) => {
          if (land.id === selectedLand.id) {
            return {
              id: land.id, 
              land_name: land.land_name,
              area: parseFloat(areaHectares), 
              location_address: land.location_address || null,
              polygon_coordinates: polygonCoordinates, 
              planting_date: plantingDate, 
            };
          }
          return {
            id: land.id, 
            land_name: land.land_name,
            area: parseFloat(land.area as string),
            location_address: land.location_address || null,
            polygon_coordinates: land.polygon_coordinates || null, 
          };
        }) || []
      };

      const response = await api.put(`/farmers/${selectedFarmer.id}`, payload);

      if (response.data.success) {
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

        Toast.fire({
          icon: 'success',
          title: `Geospasial "${selectedLand.land_name}" berhasil disinkronisasi!`
        });

        setSelectedFarmer(null);
        setSelectedLand(null);
        setPolygonCoordinates([]);
        
        await fetchFarmers(); 

        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      }
    } catch (error: any) {
      console.error("Gagal sinkronisasi ke backend", error);
      
      const ToastError = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true
      });

      ToastError.fire({
        icon: 'error',
        title: error.response?.data?.message || 'Gagal menyimpan ke server backend.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-800 antialiased font-sans pb-12">
      <Navbar adminName={adminName} roleName="admin-lapangan" handleLogout={() => router.push('/auth/login')} />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-13 mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/dashboard/admin-lapangan')}
              className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-500 hover:text-zinc-800 shadow-sm transition"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            <div>
              <h1 className="text-xl font-extrabold text-zinc-900 tracking-tight">Validasi Lahan Geospasial</h1>
              <p className="text-xs text-zinc-500 font-medium">Filter lahan belum atau sudah dimapping sebelum melakukan validasi fisik</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm">
            <FaWifi />
            <span>Koneksi Server Aktif</span>
          </div>
        </div>

        {/* PERBAIKAN GRID: Menambahkan items-start agar kolom kiri & kanan tidak memanjang liar bersamaan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Panel Kiri */}
          <div className="lg:col-span-5">
            <ValidationFarmerList 
              farmers={farmers}
              selectedFarmer={selectedFarmer}
              selectedLand={selectedLand}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSelectLand={handleSelectLandForMapping}
              activeTab={activeTab}
              setActiveTab={handleTabChange} 
            />
          </div>

          {/* Panel Kanan */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Target Header Info Lahan Aktif */}
            {selectedFarmer && selectedLand && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-2xl text-xs font-semibold shadow-sm flex justify-between items-center animate-fade-in">
                <span>Target Pemetaan: <strong>{selectedFarmer.user?.name}</strong> — {selectedLand.land_name} ({selectedLand.area} Ha)</span>
                <button 
                  onClick={() => { setSelectedFarmer(null); setSelectedLand(null); setPolygonCoordinates([]); }} 
                  className="text-zinc-400 hover:text-zinc-700 text-xs bg-white px-2 py-1 rounded-md border border-zinc-200 shadow-sm"
                >
                  Batal / Selesai Lihat
                </button>
              </div>
            )}

            {/* PERBAIKAN CONTEXT: Membungkus peta dalam ketinggian statis agar tidak memakan ruang ke bawah */}
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-sm min-h-[400px] h-[480px] relative">
              <MapWorkspace 
                onPolygonChange={handlePolygonUpdate} 
                initialPolygon={polygonCoordinates} 
                allFarmersData={farmers} 
                selectedLandId={selectedLand?.id || null} 
                onSelectLandDirectly={handleSelectLandForMapping}
                activeTab={activeTab} 
                onTriggerReMapping={() => {
                  isReMappingRef.current = true; 
                  setActiveTab('belum');        
                }}
              />
            </div>

            {/* FORM VALIDASI ATAU EMPTY STATE */}
            <div className="w-full">
              {selectedFarmer && selectedLand ? (
                <ValidationForm 
                  selectedFarmer={selectedFarmer}
                  selectedLand={selectedLand}
                  areaHectares={areaHectares}
                  setAreaHectares={setAreaHectares}
                  plantingDate={plantingDate}
                  setPlantingDate={setPlantingDate}
                  onSubmit={handleSaveMapping}
                  onCancel={() => { setSelectedFarmer(null); setSelectedLand(null); setPolygonCoordinates([]); }}
                />
              ) : (
                <EmptyValidationState />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}