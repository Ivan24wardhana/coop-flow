'use client';

import React from 'react';
import { FaIdCard } from 'react-icons/fa';

export default function EmptyState() {
  return (
    <div className="bg-white border border-dashed border-zinc-200 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[450px] shadow-sm">
      <div className="p-4 bg-blue-50 text-green-600 rounded-2xl mb-4 shadow-inner">
        <FaIdCard className="text-3xl" />
      </div>
      <h3 className="text-base font-extrabold text-zinc-800 tracking-tight">Belum Ada Petani Terpilih</h3>
      <p className="text-sm text-zinc-400 font-medium max-w-sm mt-1 leading-relaxed">
        Silakan pilih profil di samping untuk mengubah data, atau klik tombol tambah untuk mendaftarkan anggota kelompok tani baru.
      </p>
    </div>
  );
}