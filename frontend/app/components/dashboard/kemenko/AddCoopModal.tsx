"use client";

import React, { useState } from "react";
import { FaTimes, FaPhoneAlt } from "react-icons/fa";

interface AddCoopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    cooperative_code: string;
    phone: string;
  }) => Promise<string | void>;
}

export default function AddCoopModal({
  isOpen,
  onClose,
  onSubmit,
}: AddCoopModalProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState(""); // <-- State baru untuk nomor telepon
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      // Ikut kirimkan data phone ke orchestrator page.tsx
      const errMessage = await onSubmit({
        name,
        cooperative_code: code,
        phone,
      });
      if (errMessage) {
        setError(errMessage);
      } else {
        setName("");
        setCode("");
        setPhone("");
        onClose();
      }
    } catch {
      setError("Terjadi kesalahan sistem.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-zinc-200 animate-scaleUp">
        <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between">
          <h3 className="font-bold text-zinc-900">Tambah Induk Koperasi</h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600"
          >
            <FaTimes size={14} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">
              Nama Koperasi
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Koperasi Tani Makmur Sentosa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] text-zinc-700"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">
              Kode Unik Koperasi
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: KOP-2025-6512-0016"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] font-mono text-zinc-700"
            />
          </div>

          {/* INPUT BARU: NOMOR TELEPON PENGURUS */}
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">
              No. Telepon Pengurus (WhatsApp)
            </label>
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-3.5 text-zinc-400 text-xs" />
              <input
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] text-zinc-700"
              />
            </div>
            <p className="text-[10px] text-zinc-400 mt-1">
              *Kredensial login otomatis akan dikirimkan ke nomor ini setelah
              diaktivasi.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#0F7B4A] hover:bg-[#094D30] text-white font-bold py-2.5 rounded-xl text-sm shadow-sm transition-all mt-2 disabled:opacity-50"
          >
            {submitting ? "Menyimpan..." : "Simpan ke Sistem Pusat"}
          </button>
        </form>
      </div>
    </div>
  );
}
