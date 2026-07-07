'use client';

import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'; // 🌟 Import SweetAlert2
import { 
  FaTrash, 
  FaCloudUploadAlt, 
  FaFilePdf, 
  FaEye,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt
} from 'react-icons/fa';

interface FarmerLandSectionProps {
  lands: any[];
  provinces: any[];
  landRegions: Record<number, { cities: any[], districts: any[], villages: any[] }>;
  onAddLand: () => void;
  onRemoveLand: (index: number) => void;
  onLandChange: (index: number, field: any, value: any) => void;
}

export default function FarmerLandSection({
  lands, provinces, landRegions, onAddLand, onRemoveLand, onLandChange
}: FarmerLandSectionProps) {
  
  const fileInputRefs = useRef<HTMLInputElement[]>([]);
  const [isDragging, setIsDragging] = useState<Record<number, boolean>>({});
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState<Record<number, boolean>>({}); // Loading state hapus per item

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processFile = (index: number, file: File) => {
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);

    onLandChange(index, 'ownership_document', file); 
    onLandChange(index, 'document_preview', {
      name: file.name,
      type: file.type,
      url: previewUrl,
      isNew: true 
    });
  };

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(index, file);
  };

  const handleDragOver = (index: number, e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(prev => ({ ...prev, [index]: true }));
  };

  const handleDragLeave = (index: number, e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(prev => ({ ...prev, [index]: false }));
  };

  const handleDrop = (index: number, e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(prev => ({ ...prev, [index]: false }));
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (validTypes.includes(file.type)) {
        processFile(index, file);
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    onLandChange(index, 'ownership_document', '');
    onLandChange(index, 'document_preview', null);
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].value = '';
    }
  };

// 🌟 FUNGSI BARU: Konfirmasi & Proses Hapus Lahan Tunggal
  const handleDeleteLand = async (index: number, land: any) => {
    // Skenario A: Lahan Baru (Belum disimpan ke Database, belum ada ID)
    if (!land.id) {
      Swal.fire({
        title: 'Hapus Form Lahan?',
        text: 'Form lahan kosong ini akan dihapus dari daftar.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#107349',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          onRemoveLand(index);
          if (openIndex === index) setOpenIndex(null);
          
          // 🌟 GAYA TOAST SISI KANAN ATAS
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Form lahan kosong telah dihapus',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      });
      return;
    }

    // Skenario B: Lahan Lama (Sudah ada di database, punya ID)
    const result = await Swal.fire({
      title: 'Apakah Anda Yakin?',
      text: `Lahan "${land.land_name || 'Tanpa Nama'}" akan dihapus permanen dari sistem beserta seluruh berkas dokumennya!`,
      icon: 'warning', // 💡 Diubah ke 'warning' karena 'danger' bukan icon bawaan resmi Swal
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6e7881',
      confirmButtonText: 'Ya, Hapus Permanen',
      cancelButtonText: 'Batal',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          const response = await fetch(`/api/farmers/lands/${land.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          });

          if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || 'Gagal menghapus data di server.');
          }

          return await response.json();
        } catch (error: any) {
          Swal.showValidationMessage(`Request Gagal: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });

    if (result.isConfirmed) {
      // Hapus data dari state visual Front-end
      onRemoveLand(index);
      if (openIndex === index) setOpenIndex(null);

      // 🌟 GAYA TOAST SISI KANAN ATAS
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: result.value.message || 'Data lahan berhasil dihapus.',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };
  return (
    <div className="w-full space-y-4 mt-8">
      {/* Header Utama & Tombol Tambah Lahan */}
      <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
        <h3 className="text-base font-extrabold text-[#0f5132] flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Daftar Kepemilikan Lahan ({lands.length})
        </h3>
        <button 
          type="button" 
          onClick={() => {
            onAddLand();
            setOpenIndex(lands.length);
          }} 
          className="bg-[#107349] hover:bg-[#179661] text-white text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1 transition shadow-sm"
        >
          + Tambah Lahan Baru
        </button>
      </div>

      {lands.map((land: any, index: number) => {
        const preview = land.document_preview;
        const hasExistingDoc = preview && !preview.isNew;
        const currentRegions = landRegions[index] || { cities: [], districts: [], villages: [] };
        const fileUrl = preview?.url || null;
        const isPdf = preview?.type?.includes('pdf') || (preview?.name && preview.name.toLowerCase().endsWith('.pdf'));
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border border-zinc-200 rounded-2xl bg-zinc-50/30 overflow-hidden shadow-sm transition-all duration-200">
            
            {/* ACCORDION HEADER */}
            <div className="flex items-center justify-between p-4 bg-white hover:bg-zinc-50/80 cursor-pointer select-none border-b border-transparent transition" onClick={() => toggleAccordion(index)}>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${isOpen ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-600'}`}>
                  {index + 1}
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-bold text-zinc-800 truncate">
                    {land.land_name || <span className="text-zinc-400 italic">Lahan Baru (Belum dikonfigurasi)</span>}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-medium flex items-center gap-1 mt-0.5">
                    <FaMapMarkerAlt className="text-zinc-400" /> 
                    {land.area ? `${land.area} Ha` : 'Luas belum diisi'} • Status: {land.status || 'Milik Sendiri'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* 🌟 AKTIF & TERKONEKSI: Tombol Hapus Tunggal */}
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.stopPropagation(); // Biar accordion gakk ikut kebuka/tutup
                    handleDeleteLand(index, land);
                  }} 
                  className="p-2 text-zinc-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                  title="Hapus lahan ini secara tunggal"
                >
                  <FaTrash size={13} />
                </button>
                <div className="text-zinc-400 p-1">
                  {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                </div>
              </div>
            </div>

            {/* KONTEN FORM */}
            {isOpen && (
              <div className="p-6 bg-white border-t border-zinc-100 space-y-5 animate-fadeIn">
                
                {/* BARIS 1: Lahan, Provinsi, Kabupaten/Kota */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-6">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Nama / Identitas Lahan <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={land.land_name || ''} 
                      onChange={(e) => onLandChange(index, 'land_name', e.target.value)} 
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white" 
                      placeholder="Contoh: Lahan Sawah Utara" 
                      required
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Provinsi <span className="text-red-500">*</span></label>
                    <select 
                      value={land.province_id || ''} 
                      onChange={(e) => onLandChange(index, 'province_id', e.target.value)}
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-600 font-medium"
                    >
                      <option value="">Provinsi</option>
                      {provinces.map((p: any) => (
                        <option key={p.code} value={p.code}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Kabupaten/Kota <span className="text-red-500">*</span></label>
                    <select 
                      value={land.city_id || ''} 
                      onChange={(e) => onLandChange(index, 'city_id', e.target.value)}
                      disabled={!land.province_id}
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white disabled:bg-zinc-50 text-zinc-600 font-medium"
                    >
                      <option value="">Kabupaten / Kota</option>
                      {currentRegions.cities?.map((c: any) => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* BARIS 2: Luas Lahan, Satuan, Kecamatan, Desa/Kelurahan */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Luas Lahan <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      step="any" 
                      value={land.area || ''} 
                      onChange={(e) => onLandChange(index, 'area', e.target.value)} 
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white" 
                      placeholder="contoh : 0.85" 
                      required
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Satuan <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value="Hektar (Ha)" 
                      disabled
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs bg-zinc-50 text-zinc-400 font-bold"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Kecamatan <span className="text-red-500">*</span></label>
                    <select 
                      value={land.district_id ? land.district_id.toString().trim() : ''} 
                      onChange={(e) => onLandChange(index, 'district_id', e.target.value)}
                      disabled={!land.city_id}
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white disabled:bg-zinc-50 text-zinc-600 font-medium"
                    >
                      <option value="">Kecamatan</option>
                      {currentRegions.districts?.map((d: any) => (
                        <option key={d.code} value={d.code ? d.code.toString().trim() : ''}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Desa/Kelurahan <span className="text-red-500">*</span></label>
                    <select 
                      value={land.village_id ? land.village_id.toString().trim() : ''} 
                      onChange={(e) => onLandChange(index, 'village_id', e.target.value)}
                      disabled={!land.district_id}
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white disabled:bg-zinc-50 text-zinc-600 font-medium"
                    >
                      <option value="">Desa/kelurahan</option>
                      {currentRegions.villages?.map((v: any) => (
                        <option key={v.code} value={v.code ? v.code.toString().trim() : ''}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* BARIS 3: Status Lahan */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-2">Status Lahan</label>
                  <div className="flex flex-wrap items-center gap-6">
                    {[
                      { id: 'Milik Sendiri', label: 'Milik Sendiri' },
                      { id: 'Sewa', label: 'Sewa' },
                      { id: 'Bagi Hasil', label: 'Bagi Hasil' },
                      { id: 'Lainnya', label: 'Lainnya' }
                    ].map((item) => (
                      <label key={item.id} className="flex items-center gap-2 cursor-pointer text-xs font-medium text-zinc-800">
                        <input 
                          type="radio" 
                          name={`status-${index}`}
                          value={item.id}
                          checked={(land.status || 'Milik Sendiri') === item.id}
                          onChange={(e) => onLandChange(index, 'status', e.target.value)}
                          className="w-4 h-4 text-emerald-600 border-zinc-300 focus:ring-emerald-500"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* BARIS 4, 5, 6, 7 dst... (tetap persis seperti kode asli Anda) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Penggunaan Saat ini</label>
                    <input 
                      type="text" 
                      value={land.current_use || ''} 
                      onChange={(e) => onLandChange(index, 'current_use', e.target.value)} 
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white" 
                      placeholder="Opsional (misal: Padi, Jagung)"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Jenis Tanah</label>
                    <select 
                      value={land.soil_type || ''} 
                      onChange={(e) => onLandChange(index, 'soil_type', e.target.value)} 
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-700"
                    >
                      <option value="">Opsional</option>
                      <option value="Aluvial">Aluvial</option>
                      <option value="Liat">Liat</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Sumber Air</label>
                    <select 
                      value={land.water_source || ''} 
                      onChange={(e) => onLandChange(index, 'water_source', e.target.value)} 
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-700" 
                    >
                      <option value="">Opsional</option>
                      <option value="Sungai">Sungai</option>
                      <option value="Air Tanah">Air Tanah</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">Irigasi</label>
                    <select 
                      value={land.irrigation_type || ''} 
                      onChange={(e) => onLandChange(index, 'irrigation_type', e.target.value)} 
                      className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-700" 
                    >
                      <option value="">Opsional</option>
                      <option value="Teknis">Teknis</option>
                      <option value="Tadah Hujan">Tadah Hujan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Dokumen Kepemilikan <span className="text-red-500">*</span></label>
                  <div 
                    onDragOver={(e) => handleDragOver(index, e)}
                    onDragLeave={(e) => handleDragLeave(index, e)}
                    onDrop={(e) => handleDrop(index, e)}
                    className={`relative group border border-dashed rounded-xl p-6 transition-all text-center flex flex-col items-center justify-center min-h-[140px] gap-4 ${
                      isDragging[index] ? 'border-emerald-500 bg-emerald-50' : preview?.isNew ? 'border-blue-200 bg-blue-50/30' : hasExistingDoc ? 'border-emerald-200 bg-emerald-50/40' : 'border-zinc-300 bg-zinc-50/50 hover:bg-zinc-50'
                    }`}
                  >
                    <input 
                      type="file" 
                      ref={el => { fileInputRefs.current[index] = el!; }}
                      onChange={(e) => handleFileChange(index, e)}
                      accept=".pdf, image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20"
                    />
                    <div className="flex flex-col items-center text-center gap-2 max-w-full z-10">
                      {fileUrl && !isPdf ? (
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-zinc-200 bg-white flex-shrink-0 relative shadow-sm mx-auto">
                          <img src={fileUrl} alt="Preview dokumen" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className={`w-14 h-14 rounded-lg border flex items-center justify-center text-2xl flex-shrink-0 shadow-sm mx-auto ${isPdf ? 'bg-red-50 border-red-200 text-red-500' : 'bg-zinc-100 border-zinc-200 text-zinc-400'}`}>
                          {isPdf ? <FaFilePdf /> : <FaCloudUploadAlt />}
                        </div>
                      )}
                      <div className="max-w-xs px-2">
                        {preview?.isNew ? (
                          <>
                            <p className="text-xs font-bold text-blue-900 break-all">{preview.name}</p>
                            <p className="text-[11px] text-blue-600 font-semibold mt-0.5">Berkas baru siap diunggah</p>
                          </>
                        ) : hasExistingDoc ? (
                          <>
                            <p className="text-xs font-bold text-emerald-900">Berkas Tersimpan di Server</p>
                            <p className="text-[11px] text-emerald-600 font-semibold flex items-center justify-center gap-1 mt-0.5">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Terarsip aktif
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-xs font-bold text-zinc-700">Drag & Drop berkas di sini</p>
                            <p className="text-[11px] text-zinc-500 font-medium mt-0.5">Atau klik untuk menelusuri berkas (PDF, JPG, PNG Maks. 2MB)</p>
                          </>
                        )}
                      </div>
                    </div>
                    {preview && (
                      <div className="flex items-center justify-center gap-2 z-30 w-full mt-1">
                        {hasExistingDoc && (
                          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white border border-zinc-200 rounded-lg text-emerald-700 hover:text-emerald-900 hover:border-emerald-200 font-bold text-xs flex items-center gap-1.5 transition shadow-sm">
                            <FaEye /> Lihat Berkas
                          </a>
                        )}
                        <button type="button" onClick={() => handleRemoveFile(index)} className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1">
                          <FaTimes className="text-sm" /> <span>Batal / Hapus</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Catatan</label>
                  <textarea 
                    value={land.notes || ''} 
                    onChange={(e) => onLandChange(index, 'notes', e.target.value)} 
                    className="w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white h-20 resize-none" 
                    placeholder="Masukkan catatan jika ada..."
                  />
                </div>

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}