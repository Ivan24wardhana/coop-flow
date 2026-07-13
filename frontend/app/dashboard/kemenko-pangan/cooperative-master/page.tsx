"use client";

import React, { useState, useEffect } from "react";
import api from "@/app/lib/axios";

// Import Komponen Presentasional Global yang Baru Saja Kita Buat
import MetricCards from "@/app/components/dashboard/kemenko/MetricCards";
import FilterBar from "@/app/components/dashboard/kemenko/FilterBar";
import CooperativeTable from "@/app/components/dashboard/kemenko/CooperativeTable";
import AddCoopModal from "@/app/components/dashboard/kemenko/AddCoopModal";
import CredentialsModal from "@/app/components/dashboard/kemenko/CredentialsModal";

interface Cooperative {
  id: number;
  name: string;
  cooperative_code: string;
  is_activated: boolean | number;
  users_count?: number;
  warehouses_count?: number;
  created_at?: string;
}

export default function CooperativeMasterPage() {
  // State Utama Data & Loader
  const [cooperatives, setCooperatives] = useState<Cooperative[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  // Filter States
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // State Modal Management
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showCredModal, setShowCredModal] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<{
    email: string;
    passwordDefault: string;
  } | null>(null);

  // 1. Fetching Data secara Live dari Backend (Sekarang Sukses 200 OK!)
  const fetchCooperatives = async () => {
    setLoading(true);
    try {
      const response = await api.get("/cooperatives");
      if (response.data.success) {
        setCooperatives(response.data.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data master koperasi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCooperatives();
  }, []);

  // 2. Kalkulasi Nilai Metrik Atas (On-The-Fly)
  const totalCoops = cooperatives.length;
  const activeCoops = cooperatives.filter((c) => c.is_activated).length;
  const inactiveCoops = totalCoops - activeCoops;
  const newThisMonth = cooperatives.filter((c) => {
    if (!c.created_at) return false;
    const date = new Date(c.created_at);
    const now = new Date();
    return (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }).length;

  // 3. Callback Aksi: Aktivasi Koperasi & Pembuatan Otomatis Kredensial
  const handleActivateCooperative = async (id: number) => {
    if (
      !confirm(
        "Apakah Anda yakin ingin mengaktifkan koperasi ini dan men-generate akun login petugas?",
      )
    )
      return;
    setActionLoading(id);
    try {
      const response = await api.post(`/cooperatives/${id}/activate`);
      if (response.data.success) {
        setCredentials({
          email: response.data.credentials.email,
          passwordDefault: response.data.credentials.password,
        });
        setShowCredModal(true);
        fetchCooperatives(); // Refresh tabel biar status berubah jadi Active
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Gagal mengaktifkan koperasi.");
    } finally {
      setActionLoading(null);
    }
  };

  // 4. Callback Aksi: Kirim Data Form Induk Koperasi Baru
  const handleStoreCooperative = async (formData: {
    name: string;
    cooperative_code: string;
    phone: string;
  }) => {
    try {
      const response = await api.post("/cooperatives", formData);
      if (response.data.success) {
        fetchCooperatives();
        return "";
      }
    } catch (error: any) {
      return (
        error.response?.data?.message || "Gagal menambahkan data koperasi."
      );
    }
  };

  // 5. Callback Aksi: Hapus Koperasi Pusat
  const handleDeleteCooperative = async (id: number, code: string) => {
    if (
      !confirm(
        `PERINGATAN: Menghapus koperasi akan memutuskan seluruh data petani & gudang terkait!\n\nKetik OK untuk menghapus kode: ${code}`,
      )
    )
      return;
    try {
      const response = await api.delete(`/cooperatives/${id}`);
      if (response.data.success) {
        fetchCooperatives();
      }
    } catch (error) {
      alert("Gagal menghapus data koperasi.");
    }
  };

  // 6. Fungsi Reset Filter
  const handleResetFilters = () => {
    setSearch("");
    setStatusFilter("all");
    fetchCooperatives();
  };

  // 7. Proses Penyaringan Data Lokal Sebelum Dilempar ke Komponen Tabel
  const filteredData = cooperatives.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.cooperative_code.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && item.is_activated) ||
      (statusFilter === "inactive" && !item.is_activated);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* SEKSI JUDUL & ATAS */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Cooperative Master
          </h1>
          <p className="text-sm text-zinc-500">
            Kelola dan pantau seluruh data master koperasi terdaftar di sistem
            pusat nasional.
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#0F7B4A] hover:bg-[#094D30] text-white px-4 py-2.5 rounded-xl font-bold text-[14px] shadow-sm transition-all flex items-center gap-2"
        >
          + Add Cooperative
        </button>
      </div>

      {/* METRIC INDIKATOR UTAMA */}
      <MetricCards
        total={totalCoops}
        active={activeCoops}
        inactive={inactiveCoops}
        newThisMonth={newThisMonth}
      />

      {/* BAR PENCARIAN & FILTER REGIONAL */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onReset={handleResetFilters}
      />

      {/* TABEL DATA & LOGIKA KOLOM AKSI DINAMIS */}
      <CooperativeTable
        data={filteredData}
        loading={loading}
        actionLoading={actionLoading}
        onActivate={handleActivateCooperative}
        onDelete={handleDeleteCooperative}
      />

      {/* POP-UP MODAL UNTUK FORM TAMBAH MASTER DATA */}
      <AddCoopModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleStoreCooperative}
      />

      {/* POP-UP MODAL KREDENSIAL PASCA AKTIVASI AKUN */}
      <CredentialsModal
        isOpen={showCredModal}
        onClose={() => setShowCredModal(false)}
        credentials={credentials}
      />
    </div>
  );
}
