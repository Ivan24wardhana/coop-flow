"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";
import OverviewContent from "../../components/cooperative/OverViewContent";
import api from "../../lib/axios"; 
import { useAuthAction } from "@/app/hooks/useAuthAction"; 

export default function AdminKoperasiDashboardPage() {
  const router = useRouter();
  const [adminName] = useState("Pengurus Koperasi");
  
  // 2. Inisialisasi fungsi logout dari hook
  const { logout } = useAuthAction(); 

  // State untuk menampung data dari Laravel Docker
  const [metricsData, setMetricsData] = useState({
    totalPetani: 0,
    luasLahan: 0,
    totalPengajuan: 0,
    distribusiSelesai: 0,
    chartData: {
      months: [] as string[],
      prediksiCoords: [] as number[],
      stokCoords: [] as number[],
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Mengambil data dari backend saat halaman pertama kali dimuat
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setIsLoading(true);
        setErrorMessage(""); 
        
        const response = await api.get("/cooperative/dashboard");
        const jsonResult = response.data;

        if (jsonResult.success) {
          setMetricsData({
            totalPetani: jsonResult.data.metrics.totalPetani,
            luasLahan: jsonResult.data.metrics.luasLahan,
            totalPengajuan: jsonResult.data.metrics.totalPengajuan,
            distribusiSelesai: jsonResult.data.metrics.distribusiSelesai,
            chartData: jsonResult.data.chartData,
          });
        }
      } catch (error: any) {
        const message = error.response?.data?.message || error.message || "Terjadi kesalahan jaringan";
        setErrorMessage(message);
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-zinc-800 antialiased font-sans">
      {/* 3. Pasang fungsi logout ke Sidebar */}
      <Sidebar handleLogout={logout} />

      <div className="flex-1 flex flex-col pb-12">
        {/* 4. Pasang fungsi logout ke Navbar */}
        <Navbar
          adminName={adminName}
          roleName="Admin Koperasi"
          handleLogout={logout}
        />

        <div className="w-full px-6 md:px-10 mt-8">
          <div className="w-full max-w-[1600px] mx-auto">
            {/* Tampilan Kondisional: Jika Error */}
            {errorMessage && (
              <div className="mb-6 p-4 text-red-500 bg-red-50 rounded-lg border border-red-200">
                <p className="font-semibold">
                  ⚠️ Gagal Sinkronisasi Data: {errorMessage}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Pastikan service backend berjalan lancar dan periksa konfigurasi `NEXT_PUBLIC_API_URL`.
                </p>
              </div>
            )}

            {/* Tampilan Kondisional: Jika Loading */}
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500"></div>
                <span className="ml-3 text-gray-600">
                  Sinkronisasi data ekosistem...
                </span>
              </div>
            ) : (
              /* Kirim data riil dari state menuju OverviewContent */
              <OverviewContent data={metricsData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}