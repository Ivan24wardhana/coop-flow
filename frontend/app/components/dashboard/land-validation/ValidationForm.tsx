'use client';

import React, { useState } from 'react';
import { 
  FaCloudUploadAlt, 
  FaChevronLeft, 
  FaEye, 
  FaMapMarkedAlt, 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaSeedling, 
  FaFilePdf, 
  FaFolderOpen,
  FaChevronUp,
  FaDownload
} from 'react-icons/fa';

interface ValidationFormProps {
  selectedFarmer: {
    nik: string;
    farmer_group?: {
      id: number;
      name: string;
      description?: string;
    };
    user?: {
      name: string;
    };
    name?: string;
    lands?: any[];
    village?: {
      name: string;
    };
  } | null | undefined; 
  selectedLand: {
    id: number;
    land_name: string;
    area: string | number;
    location_address?: string;
    village_name?: string;
    district_name?: string;
    city_name?: string;
    province_name?: string;
    status?: string;
    current_use?: string;
    soil_type?: string;
    water_source?: string;
    irrigation_type?: string;
    ownership_document?: string;
    notes?: string;
    unit?: string;
  } | null;
  areaHectares: string;
  setAreaHectares: (val: string) => void;
  plantingDate: string;
  setPlantingDate: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  mapWorkspaceComponent: React.ReactNode; 
}

export default function ValidationForm({
  selectedFarmer,
  selectedLand,
  areaHectares,
  setAreaHectares,
  onSubmit,
  onCancel,
  mapWorkspaceComponent 
}: ValidationFormProps) {
  const [showDetail, setShowDetail] = useState(false);
  
  const displayedName = selectedFarmer?.user?.name || selectedFarmer?.name || '-';
  const displayedLandName = selectedLand?.land_name || '-';
  const totalLandsCount = selectedFarmer?.lands?.length || 0;

  const getFileUrl = (path?: string) => {
    if (!path) return '';
    return path.startsWith('http') ? path : `http://localhost:8000${path}`;
  };

  return (
    <div className="w-full space-y-4">
      {/* 🟢 HEADER DATA PETANI & MINI GRID (DI LUAR KOTAK INDUK VALIDASI) */}
      <div className="space-y-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold text-lg">
              {displayedName.charAt(0)}
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-800">{displayedName}</h3>
              <p className="text-xs text-zinc-400 font-medium">NIK: {selectedFarmer?.nik || '-'}</p>
              <p className="text-xs text-zinc-500 font-semibold mt-0.5">Kelompok: {selectedFarmer?.farmer_group?.name || '-'}</p>
            </div>
          </div>
          <div className="text-right md:block flex justify-between w-full md:w-auto border-t md:border-t-0 pt-2 md:pt-0 border-zinc-100 items-center gap-4">
            <div>
              <span className="block text-[11px] text-zinc-400 font-medium">Tanggal Pendaftaran</span>
              <span className="text-xs font-bold text-zinc-700">5 Juli 2026 13:40</span>
            </div>
          </div>
        </div>

        {/* METRICS MINI GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-zinc-200">
          <div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center gap-2.5 shadow-sm">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs">
              <FaMapMarkedAlt size={14} />
            </div>
            <div>
              <p className="text-[10px] font-medium text-zinc-400">Luas Lahan</p>
              <p className="text-xs font-bold text-zinc-700">{selectedLand?.area || '-'} Ha</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center gap-2.5 shadow-sm">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs">
              <FaBriefcase size={14} />
            </div>
            <div>
              <p className="text-[10px] font-medium text-zinc-400">Status Lahan</p>
              <p className="text-xs font-bold text-zinc-700">{selectedLand?.status || '-'}</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center gap-2.5 flex-1 min-w-0 shadow-sm">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs">
              <FaMapMarkerAlt size={14} />
            </div>
            <div className="truncate">
              <p className="text-[10px] font-medium text-zinc-400">Lokasi</p>
              <p className="text-xs font-bold text-zinc-700 truncate">
                {selectedLand?.location_address || selectedFarmer?.village?.name || '-'}
              </p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center gap-2.5 shadow-sm">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs">
              <FaSeedling size={14} />
            </div>
            <div>
              <p className="text-[10px] font-medium text-zinc-400">Jumlah Lahan</p>
              <p className="text-xs font-bold text-zinc-700">{totalLandsCount}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center w-full">
          {!showDetail && (
            <button
              type="button"
              onClick={() => setShowDetail(true)}
              className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition cursor-pointer border border-emerald-200 shadow-sm"
            >
              <FaEye size={12} />
              <span>Lihat Detail Data Lahan</span>
            </button>
          )}
        </div>
      </div>

      {/* 🌟 KOTAK UTUH INDUK (ROUNDED + SHADOW + BORDER): SELALU TAMPIL SAAT LAHAN DI-KLIK */}
      <div className="w-full bg-white border border-zinc-200 shadow-sm rounded-2xl overflow-hidden animate-fadeIn flex flex-col">
        
        {/* SUB-BAGIAN A: FORM DETAIL DATA LAHAN (Hanya tampil jika showDetail === true) */}
        {showDetail && (
          <div className="p-5 border-b border-zinc-100 animate-fadeIn">
            <div className="flex justify-end items-center mb-4">
              <button 
                type="button" 
                onClick={() => setShowDetail(false)}
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-800 font-bold text-xs cursor-pointer bg-zinc-50 px-3 py-1.5 border border-zinc-200 rounded-xl"
              >
                <span>Sembunyikan Detail Lahan</span>
                <FaChevronUp size={12} className="text-zinc-400" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-4 border-l-4 border-emerald-600 pl-2">
                  Informasi Spasial Objek ({displayedLandName})
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">ID Objek Lahan (BE)</label>
                    <input type="text" disabled value={selectedLand?.id || '-'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-semibold text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Desa / Kelurahan</label>
                    <input type="text" disabled value={selectedLand?.village_name || selectedFarmer?.village?.name || '-'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-600 mb-1">Luas Validasi Ground Check</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={areaHectares} 
                      onChange={(e) => setAreaHectares(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-xl p-2.5 text-xs font-semibold text-zinc-800 focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Satuan Ukuran Utama</label>
                    <input type="text" disabled value={selectedLand?.unit || 'Hektar(Ha)'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Penggunaan Saat Ini</label>
                    <input type="text" disabled value={selectedLand?.current_use || '-'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Jenis Tanah</label>
                    <input type="text" disabled value={selectedLand?.soil_type || '-'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Sumber Air Utama</label>
                    <input type="text" disabled value={selectedLand?.water_source || '-'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Sistem Irigasi</label>
                    <input type="text" disabled value={selectedLand?.irrigation_type || '-'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Catatan Terdaftar Lapangan</label>
                    <input type="text" disabled value={selectedLand?.notes || 'Tidak ada catatan khusus.'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 text-xs font-medium text-zinc-700 focus:outline-none" />
                  </div>

                  {/* LAMIRAN DOKUMEN */}
                  <div className="col-span-full pt-2">
                    <label className="block text-[11px] font-bold text-zinc-500 mb-1">Berkas Dokumen Lampiran Legalitas</label>
                    <div className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-1.5 flex items-center justify-between gap-3 ">
                      <div className="flex items-center gap-2.5 pl-2 truncate flex-1">
                        {selectedLand?.ownership_document && selectedLand.ownership_document.split('.').pop()?.toLowerCase() === 'pdf' ? (
                          <FaFilePdf className="text-red-500 flex-shrink-0" size={16} />
                        ) : (
                          <FaFolderOpen className="text-emerald-600 flex-shrink-0" size={16} />
                        )}
                        <span className="text-xs font-semibold text-zinc-700 truncate">
                          {selectedLand?.ownership_document ? selectedLand.ownership_document.split('/').pop() : 'Belum ada berkas diunggah'}
                        </span>
                      </div>

                      {selectedLand?.ownership_document && (
                        <a 
                          href={getFileUrl(selectedLand.ownership_document)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition shadow-sm cursor-pointer flex-shrink-0"
                        >
                          <FaDownload size={11} />
                          <span>Unduh / Buka Dokumen</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* SUB-BAGIAN B: MAP WORKSPACE (LANGSUNG TAMPIL SEJAK AWAL DI BAWAH DETAIL) */}
        <div className="p-5 bg-white">
          {mapWorkspaceComponent}
        </div>

      </div>
    </div>
  );
}