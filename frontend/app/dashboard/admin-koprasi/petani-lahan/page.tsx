// app/admin-koperasi/petani-lahan/page.tsx
"use client";

import React, { useState } from "react";
import {
  Users,
  Map,
  Layers,
  Search,
  Filter,
  Eye,
  CheckCircle,
  Clock,
} from "lucide-react";

// Data Hardcode menyesuaikan gambar referensi & kebutuhan masa depan
const mockFarmers = [
  {
    id: 1,
    name: "Budi Santoso",
    group: "Tani Maju",
    area: "0,75 ha",
    commodity: "Padi",
    phase: "Vegetatif",
    status: "Terverifikasi",
  },
  {
    id: 2,
    name: "Siti Aminah",
    group: "Tani Sejahtera",
    area: "0,50 ha",
    commodity: "Padi",
    phase: "Generatif",
    status: "Terverifikasi",
  },
  {
    id: 3,
    name: "Joko Widodo",
    group: "Tani Bersama",
    area: "1,20 ha",
    commodity: "Jagung",
    phase: "Awal Tanam",
    status: "Terverifikasi",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    group: "Tani Makmur",
    area: "0,35 ha",
    commodity: "Cabai",
    phase: "Vegetatif",
    status: "Butuh Review",
  },
  {
    id: 5,
    name: "Rudi Hartono",
    group: "Tani Jaya",
    area: "0,80 ha",
    commodity: "Padi",
    phase: "Pasca Panen",
    status: "Terverifikasi",
  },
];

export default function PetaniLahanKoperasi() {
  const [activeTab, setActiveTab] = useState("daftar-petani");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      {/* Header Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Petani & Lahan</h1>
        <p className="text-sm text-gray-500">
          Monitoring data fisik lahan, komoditas, dan fase tanam petani binaan.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-6 bg-white rounded-t-lg px-4 pt-2 shadow-sm">
        <button
          onClick={() => setActiveTab("daftar-petani")}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 font-medium text-sm transition-all ${
            activeTab === "daftar-petani"
              ? "border-emerald-600 text-emerald-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Users size={18} />
          Daftar Petani
        </button>
        <button
          onClick={() => setActiveTab("peta-lahan")}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 font-medium text-sm transition-all ${
            activeTab === "peta-lahan"
              ? "border-emerald-600 text-emerald-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Map size={18} />
          Peta Lahan
        </button>
        <button
          onClick={() => setActiveTab("kelompok-tani")}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 font-medium text-sm transition-all ${
            activeTab === "kelompok-tani"
              ? "border-emerald-600 text-emerald-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Layers size={18} />
          Kelompok Tani
        </button>
      </div>

      {/* Main Content Area */}
      {activeTab === "daftar-petani" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
          {/* Action Bar (Search & Filter) */}
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari petani..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex gap-3">
              <select className="border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Semua Kelompok</option>
                <option>Tani Maju</option>
                <option>Tani Sejahtera</option>
              </select>
              <select className="border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Semua Komoditas</option>
                <option>Padi</option>
                <option>Jagung</option>
                <option>Cabai</option>
              </select>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  <th className="py-4 px-6">Nama Petani</th>
                  <th className="py-4 px-6">Kelompok Tani</th>
                  <th className="py-4 px-6">Luas Lahan</th>
                  <th className="py-4 px-6">Komoditas (Fase)</th>
                  <th className="py-4 px-6">Status Verifikasi</th>
                  <th className="py-4 px-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {mockFarmers.map((farmer) => (
                  <tr
                    key={farmer.id}
                    className="hover:bg-gray-50/70 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {farmer.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600">{farmer.group}</td>
                    <td className="py-4 px-6 text-gray-600">{farmer.area}</td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-800">
                        {farmer.commodity}
                      </div>
                      <div className="text-xs text-gray-400 italic">
                        {farmer.phase}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          farmer.status === "Terverifikasi"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {farmer.status === "Terverifikasi" ? (
                          <CheckCircle size={12} />
                        ) : (
                          <Clock size={12} />
                        )}
                        {farmer.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 hover:underline font-medium text-xs">
                        <Eye size={14} /> Detail Kuota
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Placeholder untuk Tab Lain */}
      {activeTab !== "daftar-petani" && (
        <div className="bg-white rounded-lg p-12 text-center border border-dashed border-gray-200 text-gray-400 text-sm mb-6">
          Modul Tampilan{" "}
          {activeTab === "peta-lahan" ? "Peta Geospasial" : "Struktur Kelompok"}{" "}
          Sedang Disiapkan.
        </div>
      )}

      {/* KPI/Summary Statistics Dashboard (Sisi Bawah sesuai Gambar Referensi) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="text-xs font-medium text-gray-400 uppercase">
            Total Petani
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">1.248</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="text-xs font-medium text-gray-400 uppercase">
            Total Luas Lahan
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">856,75 ha</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="text-xs font-medium text-gray-400 uppercase">
            Komoditas Terbanyak
          </div>
          <div className="text-2xl font-bold text-emerald-600 mt-1">Padi</div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <div className="text-xs font-medium text-gray-400 uppercase">
            Kelompok Tani
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">
            24 Kelompok
          </div>
        </div>
      </div>
    </div>
  );
}
