"use client";

import React, { useEffect, useState } from "react";
import api from "../../../lib/axios";

import InventorySummary from "@/app/components/cooperative/inventory/InventorySummary";
import StockTable from "@/app/components/cooperative/inventory/StockTable";
import WarehouseProgress from "@/app/components/cooperative/inventory/WarehouseProgress";

export default function StokSaatIniPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("access_token")
        : null;

    api
      .get("/cooperative/inventory/overview", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          const backendData = response.data;

          // 💡 SOLUSI UTAMA: Petakan nama properti agar dipahami oleh komponen Next.js kamu
          const formattedData = {
            summary: {
              totalStok: backendData.summary.total_stock_kg,
              nilaiStok: backendData.summary.total_value_idr,
              gudangAktif: backendData.summary.active_warehouses,
            },
            // Menyelaraskan field stok untuk tabel utama jika dibutuhkan komponen anak
            stocks: backendData.stocks.map((stock: any) => ({
              ...stock,
              stokTersedia: stock.current_stock,
              stokMinimal: stock.minimum_stock,
            })),
            warehouses: backendData.warehouses,
          };

          setData(formattedData);
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil data inventaris:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-zinc-500">
        Memuat data inventaris...
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 3 KARTU KONTEN */}
      <InventorySummary summary={data?.summary} />

      {/* TABEL UTAMA STOK */}
      <div>
        <h2 className="text-lg font-bold text-zinc-900 mb-4">
          Daftar Ketersediaan Pupuk
        </h2>
        <StockTable stocks={data?.stocks || []} />
      </div>

      {/* PROGRESS BAR GUDANG */}
      <div>
        <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">
          Gudang
        </h2>
        <WarehouseProgress warehouses={data?.warehouses || []} />
      </div>
    </div>
  );
}
