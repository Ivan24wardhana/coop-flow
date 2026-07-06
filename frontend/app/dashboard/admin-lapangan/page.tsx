'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/dashboard/Navbar';
import OverviewContent from '@/app/components/dashboard/OverviewContent';

import { useAuthAction } from '@/app/hooks/useAuthAction'; 

export default function AdminLapanganDashboard() {
  const [adminName, setAdminName] = useState('Andi');
  
  const { logout } = useAuthAction(); 

  useEffect(() => {
    const profile = localStorage.getItem('user_profile');
    if (profile) {
      const parsed = JSON.parse(profile);
      if (parsed.name) setAdminName(parsed.name);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-zinc-800 antialiased font-sans pb-12">
      {/* 3. Tinggal pasang fungsi logout-nya di sini */}
      <Navbar adminName={adminName} roleName="admin-lapangan" handleLogout={logout} />
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-13 mt-6">
        <OverviewContent adminName={adminName} />
      </div>
    </div>
  );
}