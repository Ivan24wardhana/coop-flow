'use client';

import React from 'react';
import { FaMap } from 'react-icons/fa';

export default function EmptyValidationState() {
  return (
    <div className="text-center h-full flex flex-col items-center justify-center min-h-[450px]">
      <div className="p-4 bg-green-50 text-green-600 rounded-2xl mb-4 shadow-inner">
        <FaMap className="text-3xl" />
      </div>
      <h3 className="text-base font-extrabold text-zinc-800 tracking-tight">Belum Ada Lahan Terpilih</h3>
      <p className="text-sm text-zinc-400 font-medium max-w-sm mt-1 leading-relaxed">
        Silakan pilih salah satu data petani di panel sebelah kiri untuk memulai penggambaran poligon koordinat fisik lahan.
      </p>
    </div>
  );
}