'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import api from '../../../lib/axios';
import FarmerProfileSection from './FarmerProfileSection';
import FarmerLandSection from './FarmerLandSection';

interface Land {
  id?: number;
  land_name: string;
  province_id: string;
  city_id: string;
  district_id: string;
  village_id: string;
  area: any; 
  unit: string;
  status: string;
  current_use?: string;
  soil_type?: string;
  water_source?: string;
  irrigation_type?: string;
  ownership_document?: string;
  document_preview?: any;
  location_address?: string;
  notes?: string;
}

interface FarmerFormProps {
  isAdding: boolean;
  formData: any;
  setFormData: any;
  farmerGroups: Array<{ id: number; name: string }>;
  onAddFarmerGroupClick: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  onDelete?: () => void;
  provinces: any[];
  cities: any[];
  districts: any[];
  villages: any[];
  onProfileRegionChange?: (type: 'province' | 'city' | 'district' | 'village', code: string) => Promise<void> | void; 
}

export default function FarmerForm({
  isAdding, formData, setFormData, farmerGroups, onAddFarmerGroupClick, onSubmit, onCancel, onDelete,
  provinces, cities, districts, villages, onProfileRegionChange
}: FarmerFormProps) {

  const [landRegions, setLandRegions] = useState<Record<number, { cities: any[], districts: any[], villages: any[] }>>({});
  
  // Menggunakan useRef untuk mencatat ID petani yang sedang diproses agar tidak fetch berulang-ulang
  const lastFetchedFarmerId = useRef<string | null>(null);

  // SINKRONISASI WILAYAH LAHAN EKSISTING SAAT MODE EDIT
  useEffect(() => {
    if (isAdding) {
      return; 
    }

    // Ambil identifier unik data petani (bisa NIK atau ID)
    const farmerIdentifier = formData.nik || formData.id;

    if (formData.lands && formData.lands.length > 0 && farmerIdentifier !== lastFetchedFarmerId.current) {
      
      const fetchAllExistingLandRegions = async () => {
        // Kunci tracker agar tidak terjadi pemanggilan berkali-kali akibat JSON.stringify
        lastFetchedFarmerId.current = farmerIdentifier;
        
        const initialRegions: Record<number, { cities: any[], districts: any[], villages: any[] }> = {};

        try {
          await Promise.all(
            formData.lands.map(async (land: any, index: number) => {
              const regions = { cities: [], districts: [], villages: [] };

              try {
                if (land.province_id) {
                  const resCity = await api.get(`/regional/provinces/${land.province_id}/cities`);
                  regions.cities = resCity.data || [];
                }
                if (land.city_id) {
                  const resDist = await api.get(`/regional/cities/${land.city_id}/districts`);
                  regions.districts = resDist.data || [];
                }
                if (land.district_id) {
                  const resVill = await api.get(`/regional/districts/${land.district_id}/villages`);
                  regions.villages = resVill.data || [];
                }
              } catch (error) {
                console.error(`Gagal memuat wilayah untuk lahan indeks ${index}`, error);
              }

              initialRegions[index] = regions;
            })
          );

          setLandRegions(initialRegions);
        } catch (err) {
          console.error("Gagal memuat rentetan wilayah lahan", err);
        }
      };

      fetchAllExistingLandRegions();
    }
  }, [isAdding, formData.nik, formData.id]); // 🚀 PERBAIKAN: Hapus JSON.stringify dari array dependensi!

  // RESET STATE WILAYAH LAHAN HANYA SAAT TOMBOL "TAMBAH PETANI" BARU DIKLIK PERTAMA KALI
  useEffect(() => {
    if (isAdding) {
      setLandRegions({});
      lastFetchedFarmerId.current = null;
    }
  }, [isAdding]);

const handleAddLand = async () => {
    const currentLands = formData.lands || [];
    const hasExistingLand = currentLands.length > 0;
    
    // 1. Ambil data dari lahan terakhir (indeks terakhir) jika ada
    const lastLand = hasExistingLand ? currentLands[currentLands.length - 1] : null;

    // 2. Tentukan nilai awal wilayah (ngikut yang sudah ada, atau kosong jika belum ada)
    const defaultProvince = lastLand ? lastLand.province_id : '';
    const defaultCity = lastLand ? lastLand.city_id : '';
    const defaultDistrict = lastLand ? lastLand.district_id : '';
    const defaultVillage = lastLand ? lastLand.village_id : '';

    const newIndex = currentLands.length;

    // 3. Tambah data lahan baru ke state formData
    setFormData({
      ...formData,
      lands: [...currentLands, { 
        id: undefined, 
        land_name: '', 
        province_id: defaultProvince, 
        city_id: defaultCity, 
        district_id: defaultDistrict, 
        village_id: defaultVillage, 
        area: '', 
        unit: 'Hektar(Ha)', 
        status: 'Milik Sendiri', 
        current_use: '', 
        soil_type: '', 
        water_source: '', 
        irrigation_type: '', 
        ownership_document: '', 
        document_preview: null, 
        location_address: '',
        notes: '' 
      }]
    });

    // 4. Salin daftar opsi region (dropdown) dari lahan sebelumnya ke indeks lahan baru
    if (lastLand) {
      const lastLandRegions = landRegions[newIndex - 1] || { cities: [], districts: [], villages: [] };
      setLandRegions(prev => ({
        ...prev,
        [newIndex]: { ...lastLandRegions }
      }));
    }
  };

  
  const handleRemoveLand = (index: number) => {
    const updatedLands = formData.lands.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, lands: updatedLands });
    
    setLandRegions(prev => {
      const next = { ...prev };
      delete next[index];
      return next;
    });
  };

  const handleLandChange = async (index: number, field: string, value: any) => {
    setFormData((prev: any) => {
      const updatedLands = [...(prev.lands || [])];
      updatedLands[index] = { ...updatedLands[index], [field]: value };

      if (field === 'province_id') {
        updatedLands[index].city_id = '';
        updatedLands[index].district_id = '';
        updatedLands[index].village_id = '';
      } else if (field === 'city_id') {
        updatedLands[index].district_id = '';
        updatedLands[index].village_id = '';
      } else if (field === 'district_id') {
        updatedLands[index].village_id = '';
      }

      return { ...prev, lands: updatedLands };
    });

    if (field === 'province_id') {
      if (!value) {
        setLandRegions(prev => ({ ...prev, [index]: { cities: [], districts: [], villages: [] } }));
        return;
      }
      const res = await api.get(`/regional/provinces/${value}/cities`);
      setLandRegions(prev => ({ ...prev, [index]: { cities: res.data || [], districts: [], villages: [] } }));
    }
    else if (field === 'city_id') {
      if (!value) {
        setLandRegions(prev => ({ ...prev, [index]: { ...prev[index], districts: [], villages: [] } }));
        return;
      }
      const res = await api.get(`/regional/cities/${value}/districts`);
      setLandRegions(prev => ({ ...prev, [index]: { ...prev[index], districts: res.data || [], villages: [] } }));
    }
    else if (field === 'district_id') {
      if (!value) {
        setLandRegions(prev => ({ ...prev, [index]: { ...prev[index], villages: [] } }));
        return;
      }
      const res = await api.get(`/regional/districts/${value}/villages`);
      setLandRegions(prev => ({ ...prev, [index]: { ...prev[index], villages: res.data || [] } }));
    }
  };

  const handleProfileRegionCascade = async (type: 'province' | 'city' | 'district' | 'village', code: string) => {
    if (onProfileRegionChange) {
      await onProfileRegionChange(type, code);
    }

    // Jika user mengubah wilayah di PROFIL, sinkronkan struktur daftar opsi drop-down di LAHAN ke-0 secara paralel jika diperlukan
    if (formData.lands && formData.lands.length > 0) {
      try {
        if (type === 'province') {
          const res = await api.get(`/regional/provinces/${code}/cities`);
          setLandRegions(prev => ({ ...prev, 0: { cities: res.data || [], districts: [], villages: [] } }));
        } else if (type === 'city') {
          const res = await api.get(`/regional/cities/${code}/districts`);
          setLandRegions(prev => ({ ...prev, 0: { ...prev[0], districts: res.data || [], villages: [] } }));
        } else if (type === 'district') {
          const res = await api.get(`/regional/districts/${code}/villages`);
          setLandRegions(prev => ({ ...prev, 0: { ...prev[0], villages: res.data || [] } }));
        }
      } catch (e) {
        console.error("Gagal sinkronisasi cascading drop-down lahan otomatis", e);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  const actionGridCols = !isAdding && onDelete ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6 text-zinc-700 w-full">
      <h2 className="text-base font-extrabold text-zinc-900 flex items-center gap-2 border-b border-zinc-100 pb-3">
        <FaEdit className="text-blue-600" />
        <span>{isAdding ? 'Data Petani (Registrasi Baru)' : 'Ubah Informasi Master Petani'}</span>
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-5 w-full">
        
        <FarmerProfileSection 
          formData={formData}
          setFormData={setFormData}
          provinces={provinces}
          cities={cities}
          districts={districts}
          villages={villages}
          farmerGroups={farmerGroups}
          onAddFarmerGroupClick={onAddFarmerGroupClick}
          onProfileRegionChange={handleProfileRegionCascade} 
        />

        <FarmerLandSection 
          lands={formData.lands || []}
          provinces={provinces}
          landRegions={landRegions}
          onAddLand={handleAddLand}
          onRemoveLand={handleRemoveLand}
          onLandChange={handleLandChange}
        />

        {/* TOMBOL AKSI UTAMA */}
        <div className={`grid ${actionGridCols} gap-4 pt-6 border-t border-zinc-100 w-full`}>
          {!isAdding && onDelete && (
            <button 
              type="button" 
              onClick={onDelete} 
              className="w-full px-5 py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-sm font-bold transition text-center order-3 sm:order-1"
            >
              Hapus Akun
            </button>
          )}
          <button 
            type="button" 
            onClick={onCancel} 
            className="w-full px-6 py-3 border border-zinc-300 hover:bg-zinc-100 rounded-xl text-sm font-bold text-zinc-700 transition text-center order-2"
          >
            Batal
          </button>
          <button 
            type="submit" 
            className="w-full px-8 py-3 bg-[#107349] hover:bg-[#179661] text-white rounded-xl text-sm font-bold transition shadow-md text-center order-1 sm:order-3"
          >
            Simpan
          </button>
        </div>

      </form>
    </div>
  );
}