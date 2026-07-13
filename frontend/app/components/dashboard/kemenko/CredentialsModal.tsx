"use client";

import React from "react";
import { FaCopy } from "react-icons/fa";

interface CredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  credentials: { email: string; passwordDefault: string } | null;
}

export default function CredentialsModal({
  isOpen,
  onClose,
  credentials,
}: CredentialsModalProps) {
  if (!isOpen || !credentials) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Email: ${credentials.email}\nPassword: ${credentials.passwordDefault}`,
    );
    alert("Kredensial berhasil disalin ke clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl p-6 border border-zinc-200 animate-scaleUp">
        <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
          🔑 Akun Login Berhasil Dibuat!
        </h3>
        <p className="text-sm text-zinc-500 mt-2">
          Salin kredensial login default berikut untuk diserahkan kepada
          pengurus koperasi lapangan.
        </p>
        <div className="mt-4 p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-2 font-mono text-xs text-zinc-800 relative">
          <div>
            <span className="text-zinc-400 font-sans">Email:</span>{" "}
            {credentials.email}
          </div>
          <div>
            <span className="text-zinc-400 font-sans">Password:</span>{" "}
            {credentials.passwordDefault}
          </div>
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 p-2 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-lg transition-all text-zinc-600"
            title="Salin Kredensial"
          >
            <FaCopy size={12} />
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-5 w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2.5 rounded-xl text-sm transition-all"
        >
          Saya Sudah Menyalin, Tutup.
        </button>
      </div>
    </div>
  );
}
