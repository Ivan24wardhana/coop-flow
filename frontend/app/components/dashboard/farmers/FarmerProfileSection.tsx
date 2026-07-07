import React from 'react';
import { FaFolderPlus } from 'react-icons/fa';

interface FarmerProfileSectionProps {
  formData: any;
  setFormData: any;
  provinces: any[];
  cities: any[];
  districts: any[];
  villages: any[];
  farmerGroups: any[];
  onAddFarmerGroupClick: () => void;
  onProfileRegionChange: (type: 'province' | 'city' | 'district' | 'village', code: string) => void;
}

export default function FarmerProfileSection({
  formData, setFormData, provinces, cities, districts, villages, farmerGroups, onAddFarmerGroupClick, onProfileRegionChange
}: FarmerProfileSectionProps) {
  return (
    <div className="space-y-5">
      {/* ROW 1: Nama & NIK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
          <input type="text" required value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-50/50 font-medium" placeholder="Febliyanti" />
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span></label>
          <input type="text" required value={formData.nik || ''} onChange={(e) => setFormData({...formData, nik: e.target.value})} className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-bold" placeholder="837587543755483" />
        </div>
      </div>

      {/* ROW 2: Provinsi & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Provinsi <span className="text-red-500">*</span></label>
          <select 
            required 
            value={formData.province_id || ''} 
            onChange={(e) => {
              const code = e.target.value;
              
              // Salin otomatis provinsi ke semua lahan & reset kota/kec/desa di lahan tersebut
              const updatedLands = (formData.lands || []).map((land: any) => ({
                ...land,
                province_id: code,
                city_id: '',
                district_id: '',
                village_id: ''
              }));

              setFormData({
                ...formData, 
                province_id: code,
                city_id: '',      
                district_id: '',  
                village_id: '',
                lands: updatedLands
              });

              if (code) onProfileRegionChange('province', code);
            }} 
            className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
          >
            <option value="">-- Pilih Provinsi --</option>
            {provinces.map((p: any) => <option key={p.id} value={p.code}>{p.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Email</label>
          <input type="email" required value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium" placeholder="febi@gmail.com" />
        </div>
      </div>

      {/* ROW 3: Kabupaten & Nomor HP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Kabupaten / Kota <span className="text-red-500">*</span></label>
          <select 
            required 
            value={formData.city_id || ''} 
            onChange={(e) => {
              const code = e.target.value;

              // Salin otomatis kota ke semua lahan & reset kec/desa di lahan tersebut
              const updatedLands = (formData.lands || []).map((land: any) => ({
                ...land,
                city_id: code,
                district_id: '',
                village_id: ''
              }));

              setFormData({
                ...formData, 
                city_id: code,
                district_id: '',  
                village_id: '',
                lands: updatedLands
              });

              if (code) onProfileRegionChange('city', code);
            }} 
            disabled={!formData.province_id} 
            className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">-- Pilih Kota --</option>
            {cities.map((c: any) => <option key={c.id} value={c.code}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Nomor HP/WA</label>
          <input type="text" required value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="0812xxxx" />
        </div>
      </div>

      {/* ROW 4: [Kecamatan & Desa Berdampingan] & [Kelompok Tani] */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-zinc-600 mb-1">Kecamatan <span className="text-red-500">*</span></label>
            <select 
              required 
              // PERBAIKAN: Bersihkan spasi district_id agar cocok dengan option value
              value={formData.district_id ? formData.district_id.toString().trim() : ''} 
              onChange={(e) => {
                const code = e.target.value;

                // Salin otomatis kecamatan ke semua lahan & reset desa di lahan tersebut
                const updatedLands = (formData.lands || []).map((land: any) => ({
                  ...land,
                  district_id: code,
                  village_id: ''
                }));

                setFormData({
                  ...formData, 
                  district_id: code,
                  village_id: '',
                  lands: updatedLands
                });

                if (code) onProfileRegionChange('district', code);
              }} 
              disabled={!formData.city_id} 
              className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Kecamatan --</option>
              {districts.map((d: any) => (
                <option 
                  key={d.id} 
                  // PERBAIKAN: Antisipasi jika code dari regional API juga butuh pembersihan
                  value={d.code ? d.code.toString().trim() : ''}
                >
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-600 mb-1">Desa / Kelurahan <span className="text-red-500">*</span></label>
            <select 
              required 
              // PERBAIKAN: Bersihkan spasi village_id
              value={formData.village_id ? formData.village_id.toString().trim() : ''} 
              onChange={(e) => {
                const code = e.target.value;

                // Salin otomatis desa ke semua lahan
                const updatedLands = (formData.lands || []).map((land: any) => ({
                  ...land,
                  village_id: code
                }));

                setFormData({
                  ...formData, 
                  village_id: code,
                  lands: updatedLands
                });
              }} 
              disabled={!formData.district_id} 
              className="w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Desa / Kelurahan --</option>
              {villages.map((v: any) => (
                <option 
                  key={v.id} 
                  value={v.code ? v.code.toString().trim() : ''}
                >
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sisi Kanan: Kelompok Tani */}
        <div>
          <label className="block text-xs font-bold text-zinc-600 mb-1">Kelompok Tani <span className="text-red-500">*</span></label>
          <div className="flex gap-2">
            <select required value={formData.farmer_group_id || ''} onChange={(e) => setFormData({...formData, farmer_group_id: e.target.value})} className="flex-1 border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">-- Pilih Kelompok Tani --</option>
              {farmerGroups.map((g: any) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
            <button type="button" onClick={onAddFarmerGroupClick} className="p-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl transition shadow-sm"><FaFolderPlus /></button>
          </div>
        </div>
      </div>
    </div>
  );
}