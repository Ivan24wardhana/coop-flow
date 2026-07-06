'use client';

import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '../lib/axios'; 

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

export function useAuthAction() {
  const router = useRouter();

  const logout = () => {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Sesi login operasional Anda akan berakhir.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#15803d',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Ya, Keluar!',
      cancelButtonText: 'Batal',
      customClass: {
        popup: 'rounded-2xl',
        confirmButton: 'rounded-xl px-4 py-2 font-medium',
        cancelButton: 'rounded-xl px-4 py-2 font-medium'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // 1. Panggil API backend
          await api.post('/logout');
        } catch (error) {
          console.error('Backend logout error:', error);
        } finally {
          // 2. Bersihkan client-side state
          localStorage.clear();

          // 3. Bersihkan cookies untuk middleware
          document.cookie = "access_token=; path=/; max-age=0;";
          document.cookie = "user_role=; path=/; max-age=0;";

          // 4. Munculkan notifikasi sukses
          Toast.fire({
            icon: 'success',
            title: 'Berhasil Keluar! Sesi Anda berakhir.'
          });

          // 5. Kembalikan ke halaman login
          router.push('/auth/login');
        }
      }
    });
  };

  return { logout };
}