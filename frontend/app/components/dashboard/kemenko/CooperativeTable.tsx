"use client";

import React from "react";
import { FaEye, FaPen, FaTrashAlt, FaBolt } from "react-icons/fa";

interface Cooperative {
  id: number;
  name: string;
  cooperative_code: string;
  is_activated: boolean | number;
  users_count?: number;
  warehouses_count?: number;
}

interface CooperativeTableProps {
  data: Cooperative[];
  loading: boolean;
  actionLoading: number | null;
  onActivate: (id: number) => void;
  onDelete: (id: number, code: string) => void;
}

export default function CooperativeTable({
  data,
  loading,
  actionLoading,
  onActivate,
  onDelete,
}: CooperativeTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden animate-fadeIn">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50/70 border-b border-zinc-200 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">
              <th className="py-4 px-6 text-center w-14">No</th>
              <th className="py-4 px-4">Cooperative Name</th>
              <th className="py-4 px-4">Unique Code</th>
              <th className="py-4 px-4 text-center">Status</th>
              <th className="py-4 px-4 text-center">Members</th>
              <th className="py-4 px-4 text-center">Warehouses</th>
              <th className="py-4 px-6 text-center w-36">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 text-sm text-zinc-700">
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-12 text-zinc-400 font-medium"
                >
                  Memuat data logistik nasional...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-12 text-zinc-400 font-medium"
                >
                  Tidak ada data master koperasi yang cocok.
                </td>
              </tr>
            ) : (
              data.map((coop, index) => (
                <tr
                  key={coop.id}
                  className="hover:bg-zinc-50/50 transition-all duration-150"
                >
                  <td className="py-3.5 px-6 text-center font-semibold text-zinc-400">
                    {index + 1}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-zinc-900">
                    {coop.name}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-zinc-500 text-[13px]">
                    {coop.cooperative_code}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase ${
                        coop.is_activated
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                          : "bg-amber-50 text-amber-600 border border-amber-200"
                      }`}
                    >
                      {coop.is_activated ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center font-bold text-zinc-800">
                    {coop.users_count ?? 0}
                  </td>
                  <td className="py-3.5 px-4 text-center font-bold text-zinc-800">
                    {coop.warehouses_count ?? 0}
                  </td>
                  <td className="py-3.5 px-6 flex items-center justify-center gap-1.5">
                    {/* 🔥 TOMBOL AKSI DINAMIS SESUAI STATUS */}
                    {!coop.is_activated ? (
                      <button
                        onClick={() => onActivate(coop.id)}
                        disabled={actionLoading === coop.id}
                        className="bg-[#0F7B4A] hover:bg-[#094D30] text-white text-[12px] px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow-sm transition-all disabled:opacity-50"
                        title="Aktifkan & Generate Akun Login"
                      >
                        <FaBolt size={11} />{" "}
                        {actionLoading === coop.id
                          ? "Activating..."
                          : "Activate"}
                      </button>
                    ) : (
                      <>
                        <button
                          className="p-2 text-zinc-500 hover:text-[#0F7B4A] bg-zinc-50 hover:bg-emerald-50 rounded-lg border border-zinc-200/60 transition-all"
                          title="Lihat Detail Profil Spasial"
                        >
                          <FaEye size={13} />
                        </button>
                        <button
                          className="p-2 text-zinc-500 hover:text-blue-600 bg-zinc-50 hover:bg-blue-50 rounded-lg border border-zinc-200/60 transition-all"
                          title="Edit Data Dasar Koperasi"
                        >
                          <FaPen size={12} />
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => onDelete(coop.id, coop.cooperative_code)}
                      className="p-2 text-zinc-400 hover:text-red-600 bg-zinc-50 hover:bg-red-50 rounded-lg border border-zinc-200/60 transition-all"
                      title="Hapus Koperasi dari Pusat"
                    >
                      <FaTrashAlt size={12} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
