'use client';

import React from 'react';
import { FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Farmer, Land } from '@/app/dashboard/admin-lapangan/validasi-lahan/page';

interface FarmerLandCardProps {
  farmer: Farmer;
  selectedFarmer: Farmer | null;
  selectedLand: Land | null;
  activeTab: 'belum' | 'sudah';
  onSelectLand: (farmer: Farmer, land: Land) => void;
}

export default function FarmerLandCard({
  farmer,
  selectedFarmer,
  selectedLand,
  activeTab,
  onSelectLand
}: FarmerLandCardProps) {
  const name = farmer.user?.name || 'Tidak Ada Nama';
  const targetLands = farmer.lands || [];

  if (targetLands.length === 0) return null;

  return (
    <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm space-y-3">
      {/* Info Profile Petani */}
      <div className="flex items-start gap-3">
        <div className="p-2.5 bg-zinc-50 text-zinc-500 rounded-xl mt-0.5">
          <FaUserAlt className="text-sm" />
        </div>
        <div className="space-y-0.5">
          <h3 className="text-sm font-bold text-zinc-900">{name}</h3>
          <p className="text-xs text-zinc-400 font-medium">
            Grup: {farmer.farmer_group?.name || 'Tidak Ada Kelompok'}
          </p>
        </div>
      </div>

      {/* List Lahan */}
      <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-100 space-y-2">
        {targetLands.map((land) => {
          const isSelected = selectedLand?.id === land.id && selectedFarmer?.id === farmer.id;
          return (
            <div 
              key={land.id} 
              className={`flex items-center justify-between p-2 bg-white rounded-lg border text-xs transition ${
                isSelected ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-zinc-200'
              }`}
            >
              <div className="truncate max-w-[60%] pl-1">
                <p className="font-bold text-zinc-700 truncate">{land.land_name}</p>
                <p className="text-[10px] text-zinc-400 truncate">{land.location_address || 'Belum ada alamat lokasi'}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-extrabold px-1.5 py-0.5 rounded ${
                  isSelected && activeTab === 'belum' 
                    ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                    : land.polygon_coordinates ? 'bg-green-50 text-green-700' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  {land.area} Ha {isSelected && activeTab === 'belum' && '(Edit)'}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectLand(farmer, land)}
                  className={`p-1.5 rounded-lg border transition cursor-pointer ${
                    isSelected 
                      ? 'bg-emerald-600 border-emerald-600 text-white' 
                      : 'bg-white hover:bg-emerald-50 text-zinc-600 border-zinc-200'
                  }`}
                  title={land.polygon_coordinates ? "Lihat/Edit Peta" : "Petakan Lahan Ini"}
                >
                  <FaMapMarkerAlt className="text-[11px]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}