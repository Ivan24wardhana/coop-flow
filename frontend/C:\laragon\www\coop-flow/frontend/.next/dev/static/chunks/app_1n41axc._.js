(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/dashboard/farmers/FarmerList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FarmerList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FarmerList({ farmers, selectedFarmer, searchTerm, setSearchTerm, onSelectFarmer, onInitAdd, farmerGroups = [], districts = [], villages = [], onSync, onFilterRegionChange }) {
    _s();
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filterDistrict, setFilterDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterVillage, setFilterVillage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterGroup, setFilterGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempDistrict, setTempDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempVillage, setTempVillage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tempGroup, setTempGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleApplyFilter = ()=>{
        setFilterDistrict(tempDistrict);
        setFilterVillage(tempVillage);
        setFilterGroup(tempGroup);
        setIsFilterOpen(false);
    };
    const handleResetFilter = ()=>{
        setTempDistrict('');
        setTempVillage('');
        setTempGroup('');
        setFilterDistrict('');
        setFilterVillage('');
        setFilterGroup('');
        if (onFilterRegionChange) {
            onFilterRegionChange('district', '');
        }
    };
    const filteredFarmers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FarmerList.useMemo[filteredFarmers]": ()=>{
            return farmers.filter({
                "FarmerList.useMemo[filteredFarmers]": (f)=>{
                    const name = f.user?.name || f.name || '';
                    const nik = f.nik || '';
                    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || nik.includes(searchTerm);
                    const matchesDistrict = !filterDistrict || f.district_id === filterDistrict || f.lands?.some({
                        "FarmerList.useMemo[filteredFarmers]": (l)=>l.district_id === filterDistrict
                    }["FarmerList.useMemo[filteredFarmers]"]);
                    const matchesVillage = !filterVillage || f.village_id === filterVillage || f.lands?.some({
                        "FarmerList.useMemo[filteredFarmers]": (l)=>l.village_id === filterVillage
                    }["FarmerList.useMemo[filteredFarmers]"]);
                    const matchesGroup = !filterGroup || f.farmer_group_id === Number(filterGroup);
                    return matchesSearch && matchesDistrict && matchesVillage && matchesGroup;
                }
            }["FarmerList.useMemo[filteredFarmers]"]);
        }
    }["FarmerList.useMemo[filteredFarmers]"], [
        farmers,
        searchTerm,
        filterDistrict,
        filterVillage,
        filterGroup
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-3.5 w-full box-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Cari nama atau NIK petani....",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "w-full pl-11 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-600 transition box-border"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsFilterOpen(!isFilterOpen),
                                className: `w-full py-1 rounded-lg text-sm font-medium cursor-pointer transition flex items-center justify-center gap-2 whitespace-nowrap border h-[40px] ${isFilterOpen || filterDistrict || filterVillage || filterGroup ? 'bg-zinc-100 text-zinc-800 border-zinc-300' : 'bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilter"], {
                                        className: "text-zinc-700 text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Filter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-400 ml-0.5",
                                        children: "▼"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onSync,
                                className: "bg-[#86c295] hover:bg-[#94c286] cursor-pointer text-white w-full py-1 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2 whitespace-nowrap h-[40px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSyncAlt"], {
                                        className: "text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sinkronisasi"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onInitAdd,
                                className: "bg-[#107349] hover:bg-[#179661] cursor-pointer text-white w-full py-1 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2 whitespace-nowrap h-[40px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserPlus"], {
                                        className: "text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tambah"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    isFilterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t border-zinc-100 space-y-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold text-zinc-400 mb-1",
                                                children: "Kecamatan"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: tempDistrict,
                                                onChange: (e)=>{
                                                    const code = e.target.value;
                                                    setTempDistrict(code);
                                                    setTempVillage('');
                                                    if (onFilterRegionChange) {
                                                        onFilterRegionChange('district', code);
                                                    }
                                                },
                                                className: "w-full border border-zinc-200 bg-white rounded-lg p-2.5 text-xs font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Semua Kecamatan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    districts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: d.code,
                                                            children: d.name
                                                        }, d.code, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold text-zinc-400 mb-1",
                                                children: "Desa / Kelurahan"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: tempVillage,
                                                onChange: (e)=>setTempVillage(e.target.value),
                                                className: "w-full border border-zinc-200 bg-white rounded-lg p-2.5 text-xs font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Semua Desa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    villages.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: v.code,
                                                            children: v.name
                                                        }, v.code, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-bold text-zinc-400 mb-1",
                                                children: "Kelompok Tani"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: tempGroup,
                                                onChange: (e)=>setTempGroup(e.target.value),
                                                className: "w-full border border-zinc-200 bg-white rounded-lg p-2.5 text-xs font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Semua Kelompok"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    farmerGroups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: g.id,
                                                            children: g.name
                                                        }, g.id, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleResetFilter,
                                        className: "px-5 py-2 border border-zinc-300 hover:bg-zinc-50 rounded-lg text-xs font-bold text-zinc-700 transition",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleApplyFilter,
                                        className: "px-5 py-2 bg-[#107349] hover:bg-[#179661] text-white rounded-lg text-xs font-bold transition shadow-sm",
                                        children: "Terapkan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 max-h-[580px] overflow-y-auto pr-1 w-full",
                children: [
                    filteredFarmers.map((farmer)=>{
                        const name = farmer.user?.name || farmer.name;
                        const groupName = farmer.farmer_group?.name || 'Belum Ada Kelompok Tani';
                        const totalLands = farmer.lands?.length || 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onSelectFarmer(farmer),
                            className: `bg-white p-4 rounded-2xl border transition flex flex-col justify-between gap-3 shadow-sm cursor-pointer ${selectedFarmer?.id === farmer.id ? 'border-green-500 ring-1 ring-green-500' : 'border-zinc-100 hover:border-zinc-200'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 bg-zinc-50 text-zinc-500 rounded-lg mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserAlt"], {
                                                    className: "text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-zinc-800",
                                                        children: name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-zinc-400 font-medium",
                                                        children: [
                                                            "NIK: ",
                                                            farmer.nik
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-zinc-500 font-bold mt-1 text-blue-600",
                                                        children: groupName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-zinc-400 font-medium mt-1",
                                                        children: [
                                                            "Total Lahan: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-700 font-semibold",
                                                                children: [
                                                                    totalLands,
                                                                    " Lahan"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 36
                                                            }, this),
                                                            " (",
                                                            farmer.total_land_area || 0,
                                                            " Ha)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-0.5 rounded-md text-[10px] font-bold ${farmer.status === 'Data Belum Tersinkronisasi' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`,
                                        children: farmer.status || 'Data Sudah Tersinkronisasi'
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this)
                        }, farmer.id, false, {
                            fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this);
                    }),
                    filteredFarmers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-zinc-400 py-6 font-medium",
                        children: "Data Petani tidak ditemukan."
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/farmers/FarmerList.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(FarmerList, "9Ov1KDl8T4eQxyA+yoTKLxHzTDY=");
_c = FarmerList;
var _c;
__turbopack_context__.k.register(_c, "FarmerList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FarmerProfileSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
function FarmerProfileSection({ formData, setFormData, provinces, cities, districts, villages, farmerGroups, onAddFarmerGroupClick, onProfileRegionChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: [
                                    "Nama Lengkap ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 24,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                required: true,
                                value: formData.name || '',
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        name: e.target.value
                                    }),
                                className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-zinc-50/50 font-medium",
                                placeholder: "Febliyanti"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: [
                                    "Nomor Induk Kependudukan (NIK) ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                required: true,
                                value: formData.nik || '',
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        nik: e.target.value
                                    }),
                                className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-bold",
                                placeholder: "837587543755483"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: [
                                    "Provinsi ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                required: true,
                                value: formData.province_id || '',
                                onChange: (e)=>{
                                    const code = e.target.value;
                                    // Salin otomatis provinsi ke semua lahan & reset kota/kec/desa di lahan tersebut
                                    const updatedLands = (formData.lands || []).map((land)=>({
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
                                },
                                className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- Pilih Provinsi --"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    provinces.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.code,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 40
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                required: true,
                                value: formData.email || '',
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        email: e.target.value
                                    }),
                                className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium",
                                placeholder: "febi@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: [
                                    "Kabupaten / Kota ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                required: true,
                                value: formData.city_id || '',
                                onChange: (e)=>{
                                    const code = e.target.value;
                                    // Salin otomatis kota ke semua lahan & reset kec/desa di lahan tersebut
                                    const updatedLands = (formData.lands || []).map((land)=>({
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
                                },
                                disabled: !formData.province_id,
                                className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- Pilih Kota --"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    cities.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.code,
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                            lineNumber: 107,
                                            columnNumber: 37
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: "Nomor HP/WA"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                required: true,
                                value: formData.phone || '',
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        phone: e.target.value
                                    }),
                                className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                placeholder: "0812xxxx"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-zinc-600 mb-1",
                                        children: [
                                            "Kecamatan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                lineNumber: 120,
                                                columnNumber: 85
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: true,
                                        // PERBAIKAN: Bersihkan spasi district_id agar cocok dengan option value
                                        value: formData.district_id ? formData.district_id.toString().trim() : '',
                                        onChange: (e)=>{
                                            const code = e.target.value;
                                            // Salin otomatis kecamatan ke semua lahan & reset desa di lahan tersebut
                                            const updatedLands = (formData.lands || []).map((land)=>({
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
                                        },
                                        disabled: !formData.city_id,
                                        className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Kecamatan --"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            districts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    // PERBAIKAN: Antisipasi jika code dari regional API juga butuh pembersihan
                                                    value: d.code ? d.code.toString().trim() : '',
                                                    children: d.name
                                                }, d.id, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-zinc-600 mb-1",
                                        children: [
                                            "Desa / Kelurahan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                lineNumber: 160,
                                                columnNumber: 92
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: true,
                                        // PERBAIKAN: Bersihkan spasi village_id
                                        value: formData.village_id ? formData.village_id.toString().trim() : '',
                                        onChange: (e)=>{
                                            const code = e.target.value;
                                            // Salin otomatis desa ke semua lahan
                                            const updatedLands = (formData.lands || []).map((land)=>({
                                                    ...land,
                                                    village_id: code
                                                }));
                                            setFormData({
                                                ...formData,
                                                village_id: code,
                                                lands: updatedLands
                                            });
                                        },
                                        disabled: !formData.district_id,
                                        className: "w-full border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Desa / Kelurahan --"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            villages.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: v.code ? v.code.toString().trim() : '',
                                                    children: v.name
                                                }, v.id, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-zinc-600 mb-1",
                                children: [
                                    "Kelompok Tani ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 198,
                                        columnNumber: 87
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: true,
                                        value: formData.farmer_group_id || '',
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                farmer_group_id: e.target.value
                                            }),
                                        className: "flex-1 border border-zinc-200 rounded-xl p-2.5 text-sm bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Pilih Kelompok Tani --"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            farmerGroups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: g.id,
                                                    children: g.name
                                                }, g.id, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 45
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onAddFarmerGroupClick,
                                        className: "p-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl transition shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFolderPlus"], {}, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                            lineNumber: 204,
                                            columnNumber: 159
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = FarmerProfileSection;
var _c;
__turbopack_context__.k.register(_c, "FarmerProfileSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/farmers/FarmerLandSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FarmerLandSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)"); // 🌟 Import SweetAlert2
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FarmerLandSection({ lands, provinces, landRegions, onAddLand, onRemoveLand, onLandChange }) {
    _s();
    const fileInputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // Loading state hapus per item
    const toggleAccordion = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    const processFile = (index, file)=>{
        if (!file) return;
        const previewUrl = URL.createObjectURL(file);
        onLandChange(index, 'ownership_document', file);
        onLandChange(index, 'document_preview', {
            name: file.name,
            type: file.type,
            url: previewUrl,
            isNew: true
        });
    };
    const handleFileChange = (index, e)=>{
        const file = e.target.files?.[0];
        if (file) processFile(index, file);
    };
    const handleDragOver = (index, e)=>{
        e.preventDefault();
        setIsDragging((prev)=>({
                ...prev,
                [index]: true
            }));
    };
    const handleDragLeave = (index, e)=>{
        e.preventDefault();
        setIsDragging((prev)=>({
                ...prev,
                [index]: false
            }));
    };
    const handleDrop = (index, e)=>{
        e.preventDefault();
        setIsDragging((prev)=>({
                ...prev,
                [index]: false
            }));
        const file = e.dataTransfer.files?.[0];
        if (file) {
            const validTypes = [
                'application/pdf',
                'image/jpeg',
                'image/png',
                'image/jpg'
            ];
            if (validTypes.includes(file.type)) {
                processFile(index, file);
            }
        }
    };
    const handleRemoveFile = (index)=>{
        onLandChange(index, 'ownership_document', '');
        onLandChange(index, 'document_preview', null);
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index].value = '';
        }
    };
    // 🌟 FUNGSI BARU: Konfirmasi & Proses Hapus Lahan Tunggal
    const handleDeleteLand = async (index, land)=>{
        // Skenario A: Lahan Baru (Belum disimpan ke Database, belum ada ID)
        if (!land.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'Hapus Form Lahan?',
                text: 'Form lahan kosong ini akan dihapus dari daftar.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#107349',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Hapus',
                cancelButtonText: 'Batal'
            }).then((result)=>{
                if (result.isConfirmed) {
                    onRemoveLand(index);
                    if (openIndex === index) setOpenIndex(null);
                    // 🌟 GAYA TOAST SISI KANAN ATAS
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Form lahan kosong telah dihapus',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true
                    });
                }
            });
            return;
        }
        // Skenario B: Lahan Lama (Sudah ada di database, punya ID)
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: 'Apakah Anda Yakin?',
            text: `Lahan "${land.land_name || 'Tanpa Nama'}" akan dihapus permanen dari sistem beserta seluruh berkas dokumennya!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6e7881',
            confirmButtonText: 'Ya, Hapus Permanen',
            cancelButtonText: 'Batal',
            showLoaderOnConfirm: true,
            preConfirm: async ()=>{
                try {
                    const response = await fetch(`/api/farmers/lands/${land.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });
                    if (!response.ok) {
                        const errData = await response.json();
                        throw new Error(errData.message || 'Gagal menghapus data di server.');
                    }
                    return await response.json();
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].showValidationMessage(`Request Gagal: ${error.message}`);
                }
            },
            allowOutsideClick: ()=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isLoading()
        });
        if (result.isConfirmed) {
            // Hapus data dari state visual Front-end
            onRemoveLand(index);
            if (openIndex === index) setOpenIndex(null);
            // 🌟 GAYA TOAST SISI KANAN ATAS
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: result.value.message || 'Data lahan berhasil dihapus.',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-4 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center border-b border-zinc-100 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-extrabold text-[#0f5132] flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            "Daftar Kepemilikan Lahan (",
                            lands.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            onAddLand();
                            setOpenIndex(lands.length);
                        },
                        className: "bg-[#107349] hover:bg-[#179661] text-white text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1 transition shadow-sm",
                        children: "+ Tambah Lahan Baru"
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            lands.map((land, index)=>{
                const preview = land.document_preview;
                const hasExistingDoc = preview && !preview.isNew;
                const currentRegions = landRegions[index] || {
                    cities: [],
                    districts: [],
                    villages: []
                };
                const fileUrl = preview?.url || null;
                const isPdf = preview?.type?.includes('pdf') || preview?.name && preview.name.toLowerCase().endsWith('.pdf');
                const isOpen = openIndex === index;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-zinc-200 rounded-2xl bg-zinc-50/30 overflow-hidden shadow-sm transition-all duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 bg-white hover:bg-zinc-50/80 cursor-pointer select-none border-b border-transparent transition",
                            onClick: ()=>toggleAccordion(index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${isOpen ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-600'}`,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-zinc-800 truncate",
                                                    children: land.land_name || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-400 italic",
                                                        children: "Lahan Baru (Belum dikonfigurasi)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 40
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-zinc-500 font-medium flex items-center gap-1 mt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                                                            className: "text-zinc-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this),
                                                        land.area ? `${land.area} Ha` : 'Luas belum diisi',
                                                        " • Status: ",
                                                        land.status || 'Milik Sendiri'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (e)=>{
                                                e.stopPropagation(); // Biar accordion gakk ikut kebuka/tutup
                                                handleDeleteLand(index, land);
                                            },
                                            className: "p-2 text-zinc-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition",
                                            title: "Hapus lahan ini secara tunggal",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-zinc-400 p-1",
                                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronUp"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                lineNumber: 236,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                lineNumber: 236,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-white border-t border-zinc-100 space-y-5 animate-fadeIn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-12 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Nama / Identitas Lahan ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 108
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: land.land_name || '',
                                                    onChange: (e)=>onLandChange(index, 'land_name', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white",
                                                    placeholder: "Contoh: Lahan Sawah Utara",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Provinsi ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 94
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.province_id || '',
                                                    onChange: (e)=>onLandChange(index, 'province_id', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Provinsi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, this),
                                                        provinces.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: p.code,
                                                                children: p.name
                                                            }, p.code, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Kabupaten/Kota ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 100
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.city_id || '',
                                                    onChange: (e)=>onLandChange(index, 'city_id', e.target.value),
                                                    disabled: !land.province_id,
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white disabled:bg-zinc-50 text-zinc-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Kabupaten / Kota"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this),
                                                        currentRegions.cities?.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.code,
                                                                children: c.name
                                                            }, c.code, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-12 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Luas Lahan ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 96
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    step: "any",
                                                    value: land.area || '',
                                                    onChange: (e)=>onLandChange(index, 'area', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white",
                                                    placeholder: "contoh : 0.85",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Satuan ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 92
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: "Hektar (Ha)",
                                                    disabled: true,
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs bg-zinc-50 text-zinc-400 font-bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Kecamatan ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 95
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.district_id ? land.district_id.toString().trim() : '',
                                                    onChange: (e)=>onLandChange(index, 'district_id', e.target.value),
                                                    disabled: !land.city_id,
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white disabled:bg-zinc-50 text-zinc-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Kecamatan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 23
                                                        }, this),
                                                        currentRegions.districts?.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: d.code ? d.code.toString().trim() : '',
                                                                children: d.name
                                                            }, d.code, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: [
                                                        "Desa/Kelurahan ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 100
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.village_id ? land.village_id.toString().trim() : '',
                                                    onChange: (e)=>onLandChange(index, 'village_id', e.target.value),
                                                    disabled: !land.district_id,
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white disabled:bg-zinc-50 text-zinc-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Desa/kelurahan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 23
                                                        }, this),
                                                        currentRegions.villages?.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: v.code ? v.code.toString().trim() : '',
                                                                children: v.name
                                                            }, v.code, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 326,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-zinc-700 mb-2",
                                            children: "Status Lahan"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-6",
                                            children: [
                                                {
                                                    id: 'Milik Sendiri',
                                                    label: 'Milik Sendiri'
                                                },
                                                {
                                                    id: 'Sewa',
                                                    label: 'Sewa'
                                                },
                                                {
                                                    id: 'Bagi Hasil',
                                                    label: 'Bagi Hasil'
                                                },
                                                {
                                                    id: 'Lainnya',
                                                    label: 'Lainnya'
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 cursor-pointer text-xs font-medium text-zinc-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: `status-${index}`,
                                                            value: item.id,
                                                            checked: (land.status || 'Milik Sendiri') === item.id,
                                                            onChange: (e)=>onLandChange(index, 'status', e.target.value),
                                                            className: "w-4 h-4 text-emerald-600 border-zinc-300 focus:ring-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 347,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: "Penggunaan Saat ini"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: land.current_use || '',
                                                    onChange: (e)=>onLandChange(index, 'current_use', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white",
                                                    placeholder: "Opsional (misal: Padi, Jagung)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: "Jenis Tanah"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.soil_type || '',
                                                    onChange: (e)=>onLandChange(index, 'soil_type', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Opsional"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Aluvial",
                                                            children: "Aluvial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Liat",
                                                            children: "Liat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: "Sumber Air"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.water_source || '',
                                                    onChange: (e)=>onLandChange(index, 'water_source', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Opsional"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Sungai",
                                                            children: "Sungai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Air Tanah",
                                                            children: "Air Tanah"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                                    children: "Irigasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: land.irrigation_type || '',
                                                    onChange: (e)=>onLandChange(index, 'irrigation_type', e.target.value),
                                                    className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white text-zinc-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Opsional"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Teknis",
                                                            children: "Teknis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Tadah Hujan",
                                                            children: "Tadah Hujan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 395,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                            children: [
                                                "Dokumen Kepemilikan ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 103
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onDragOver: (e)=>handleDragOver(index, e),
                                            onDragLeave: (e)=>handleDragLeave(index, e),
                                            onDrop: (e)=>handleDrop(index, e),
                                            className: `relative group border border-dashed rounded-xl p-6 transition-all text-center flex flex-col items-center justify-center min-h-[140px] gap-4 ${isDragging[index] ? 'border-emerald-500 bg-emerald-50' : preview?.isNew ? 'border-blue-200 bg-blue-50/30' : hasExistingDoc ? 'border-emerald-200 bg-emerald-50/40' : 'border-zinc-300 bg-zinc-50/50 hover:bg-zinc-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    ref: (el)=>{
                                                        fileInputRefs.current[index] = el;
                                                    },
                                                    onChange: (e)=>handleFileChange(index, e),
                                                    accept: ".pdf, image/*",
                                                    className: "absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center text-center gap-2 max-w-full z-10",
                                                    children: [
                                                        fileUrl && !isPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-lg overflow-hidden border border-zinc-200 bg-white flex-shrink-0 relative shadow-sm mx-auto",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: fileUrl,
                                                                alt: "Preview dokumen",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-14 h-14 rounded-lg border flex items-center justify-center text-2xl flex-shrink-0 shadow-sm mx-auto ${isPdf ? 'bg-red-50 border-red-200 text-red-500' : 'bg-zinc-100 border-zinc-200 text-zinc-400'}`,
                                                            children: isPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFilePdf"], {}, void 0, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 36
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCloudUploadAlt"], {}, void 0, false, {
                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 52
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "max-w-xs px-2",
                                                            children: preview?.isNew ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-bold text-blue-900 break-all",
                                                                        children: preview.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                        lineNumber: 452,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-blue-600 font-semibold mt-0.5",
                                                                        children: "Berkas baru siap diunggah"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                        lineNumber: 453,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : hasExistingDoc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-bold text-emerald-900",
                                                                        children: "Berkas Tersimpan di Server"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                        lineNumber: 457,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-emerald-600 font-semibold flex items-center justify-center gap-1 mt-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                                lineNumber: 459,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " Terarsip aktif"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-bold text-zinc-700",
                                                                        children: "Drag & Drop berkas di sini"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                        lineNumber: 464,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-zinc-500 font-medium mt-0.5",
                                                                        children: "Atau klik untuk menelusuri berkas (PDF, JPG, PNG Maks. 2MB)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 21
                                                }, this),
                                                preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-2 z-30 w-full mt-1",
                                                    children: [
                                                        hasExistingDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: fileUrl,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "px-3 py-1.5 bg-white border border-zinc-200 rounded-lg text-emerald-700 hover:text-emerald-900 hover:border-emerald-200 font-bold text-xs flex items-center gap-1.5 transition shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
                                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 29
                                                                }, this),
                                                                " Lihat Berkas"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleRemoveFile(index),
                                                            className: "px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Batal / Hapus"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 59
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 424,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 422,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-zinc-700 mb-1.5",
                                            children: "Catatan"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 486,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: land.notes || '',
                                            onChange: (e)=>onLandChange(index, 'notes', e.target.value),
                                            className: "w-full border border-zinc-200 rounded-xl p-2.5 text-xs focus:outline-none focus:border-zinc-400 bg-white h-20 resize-none",
                                            placeholder: "Masukkan catatan jika ada..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                            lineNumber: 243,
                            columnNumber: 15
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/farmers/FarmerLandSection.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(FarmerLandSection, "CrL/cDz7YG05IfYamh7nxQ7asVI=");
_c = FarmerLandSection;
var _c;
__turbopack_context__.k.register(_c, "FarmerLandSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/farmers/FarmerForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FarmerForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerProfileSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/farmers/FarmerProfileSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerLandSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/farmers/FarmerLandSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function FarmerForm({ isAdding, formData, setFormData, farmerGroups, onAddFarmerGroupClick, onSubmit, onCancel, onDelete, provinces, cities, districts, villages, onProfileRegionChange }) {
    _s();
    const [landRegions, setLandRegions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Menggunakan useRef untuk mencatat ID petani yang sedang diproses agar tidak fetch berulang-ulang
    const lastFetchedFarmerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // SINKRONISASI WILAYAH LAHAN EKSISTING SAAT MODE EDIT
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FarmerForm.useEffect": ()=>{
            if (isAdding) {
                return;
            }
            // Ambil identifier unik data petani (bisa NIK atau ID)
            const farmerIdentifier = formData.nik || formData.id;
            if (formData.lands && formData.lands.length > 0 && farmerIdentifier !== lastFetchedFarmerId.current) {
                const fetchAllExistingLandRegions = {
                    "FarmerForm.useEffect.fetchAllExistingLandRegions": async ()=>{
                        // Kunci tracker agar tidak terjadi pemanggilan berkali-kali akibat JSON.stringify
                        lastFetchedFarmerId.current = farmerIdentifier;
                        const initialRegions = {};
                        try {
                            await Promise.all(formData.lands.map({
                                "FarmerForm.useEffect.fetchAllExistingLandRegions": async (land, index)=>{
                                    const regions = {
                                        cities: [],
                                        districts: [],
                                        villages: []
                                    };
                                    try {
                                        if (land.province_id) {
                                            const resCity = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/provinces/${land.province_id}/cities`);
                                            regions.cities = resCity.data || [];
                                        }
                                        if (land.city_id) {
                                            const resDist = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/cities/${land.city_id}/districts`);
                                            regions.districts = resDist.data || [];
                                        }
                                        if (land.district_id) {
                                            const resVill = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${land.district_id}/villages`);
                                            regions.villages = resVill.data || [];
                                        }
                                    } catch (error) {
                                        console.error(`Gagal memuat wilayah untuk lahan indeks ${index}`, error);
                                    }
                                    initialRegions[index] = regions;
                                }
                            }["FarmerForm.useEffect.fetchAllExistingLandRegions"]));
                            setLandRegions(initialRegions);
                        } catch (err) {
                            console.error("Gagal memuat rentetan wilayah lahan", err);
                        }
                    }
                }["FarmerForm.useEffect.fetchAllExistingLandRegions"];
                fetchAllExistingLandRegions();
            }
        }
    }["FarmerForm.useEffect"], [
        isAdding,
        formData.nik,
        formData.id
    ]); // 🚀 PERBAIKAN: Hapus JSON.stringify dari array dependensi!
    // RESET STATE WILAYAH LAHAN HANYA SAAT TOMBOL "TAMBAH PETANI" BARU DIKLIK PERTAMA KALI
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FarmerForm.useEffect": ()=>{
            if (isAdding) {
                setLandRegions({});
                lastFetchedFarmerId.current = null;
            }
        }
    }["FarmerForm.useEffect"], [
        isAdding
    ]);
    const handleAddLand = async ()=>{
        const currentLands = formData.lands || [];
        const hasExistingLand = currentLands.length > 0;
        // 1. Ambil data dari lahan terakhir (indeks terakhir) jika ada
        const lastLand = hasExistingLand ? currentLands[currentLands.length - 1] : null;
        // 2. Tentukan nilai awal wilayah (ngikut yang sudah ada, atau kosong jika belum ada)
        const defaultProvince = lastLand ? lastLand.province_id : '';
        const defaultCity = lastLand ? lastLand.city_id : '';
        const defaultDistrict = lastLand ? lastLand.district_id : '';
        const defaultVillage = lastLand ? lastLand.village_id : '';
        const newIndex = currentLands.length;
        // 3. Tambah data lahan baru ke state formData
        setFormData({
            ...formData,
            lands: [
                ...currentLands,
                {
                    id: undefined,
                    land_name: '',
                    province_id: defaultProvince,
                    city_id: defaultCity,
                    district_id: defaultDistrict,
                    village_id: defaultVillage,
                    area: '',
                    unit: 'Hektar(Ha)',
                    status: 'Milik Sendiri',
                    current_use: '',
                    soil_type: '',
                    water_source: '',
                    irrigation_type: '',
                    ownership_document: '',
                    document_preview: null,
                    location_address: '',
                    notes: ''
                }
            ]
        });
        // 4. Salin daftar opsi region (dropdown) dari lahan sebelumnya ke indeks lahan baru
        if (lastLand) {
            const lastLandRegions = landRegions[newIndex - 1] || {
                cities: [],
                districts: [],
                villages: []
            };
            setLandRegions((prev)=>({
                    ...prev,
                    [newIndex]: {
                        ...lastLandRegions
                    }
                }));
        }
    };
    const handleRemoveLand = (index)=>{
        const updatedLands = formData.lands.filter((_, i)=>i !== index);
        setFormData({
            ...formData,
            lands: updatedLands
        });
        setLandRegions((prev)=>{
            const next = {
                ...prev
            };
            delete next[index];
            return next;
        });
    };
    const handleLandChange = async (index, field, value)=>{
        setFormData((prev)=>{
            const updatedLands = [
                ...prev.lands || []
            ];
            updatedLands[index] = {
                ...updatedLands[index],
                [field]: value
            };
            if (field === 'province_id') {
                updatedLands[index].city_id = '';
                updatedLands[index].district_id = '';
                updatedLands[index].village_id = '';
            } else if (field === 'city_id') {
                updatedLands[index].district_id = '';
                updatedLands[index].village_id = '';
            } else if (field === 'district_id') {
                updatedLands[index].village_id = '';
            }
            return {
                ...prev,
                lands: updatedLands
            };
        });
        if (field === 'province_id') {
            if (!value) {
                setLandRegions((prev)=>({
                        ...prev,
                        [index]: {
                            cities: [],
                            districts: [],
                            villages: []
                        }
                    }));
                return;
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/provinces/${value}/cities`);
            setLandRegions((prev)=>({
                    ...prev,
                    [index]: {
                        cities: res.data || [],
                        districts: [],
                        villages: []
                    }
                }));
        } else if (field === 'city_id') {
            if (!value) {
                setLandRegions((prev)=>({
                        ...prev,
                        [index]: {
                            ...prev[index],
                            districts: [],
                            villages: []
                        }
                    }));
                return;
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/cities/${value}/districts`);
            setLandRegions((prev)=>({
                    ...prev,
                    [index]: {
                        ...prev[index],
                        districts: res.data || [],
                        villages: []
                    }
                }));
        } else if (field === 'district_id') {
            if (!value) {
                setLandRegions((prev)=>({
                        ...prev,
                        [index]: {
                            ...prev[index],
                            villages: []
                        }
                    }));
                return;
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${value}/villages`);
            setLandRegions((prev)=>({
                    ...prev,
                    [index]: {
                        ...prev[index],
                        villages: res.data || []
                    }
                }));
        }
    };
    const handleProfileRegionCascade = async (type, code)=>{
        if (onProfileRegionChange) {
            await onProfileRegionChange(type, code);
        }
        // Jika user mengubah wilayah di PROFIL, sinkronkan struktur daftar opsi drop-down di LAHAN ke-0 secara paralel jika diperlukan
        if (formData.lands && formData.lands.length > 0) {
            try {
                if (type === 'province') {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/provinces/${code}/cities`);
                    setLandRegions((prev)=>({
                            ...prev,
                            0: {
                                cities: res.data || [],
                                districts: [],
                                villages: []
                            }
                        }));
                } else if (type === 'city') {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/cities/${code}/districts`);
                    setLandRegions((prev)=>({
                            ...prev,
                            0: {
                                ...prev[0],
                                districts: res.data || [],
                                villages: []
                            }
                        }));
                } else if (type === 'district') {
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${code}/villages`);
                    setLandRegions((prev)=>({
                            ...prev,
                            0: {
                                ...prev[0],
                                villages: res.data || []
                            }
                        }));
                }
            } catch (e) {
                console.error("Gagal sinkronisasi cascading drop-down lahan otomatis", e);
            }
        }
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        onSubmit(e);
    };
    const actionGridCols = !isAdding && onDelete ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6 text-zinc-700 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-base font-extrabold text-zinc-900 flex items-center gap-2 border-b border-zinc-100 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {
                        className: "text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isAdding ? 'Data Petani (Registrasi Baru)' : 'Ubah Informasi Master Petani'
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleFormSubmit,
                className: "space-y-5 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerProfileSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        formData: formData,
                        setFormData: setFormData,
                        provinces: provinces,
                        cities: cities,
                        districts: districts,
                        villages: villages,
                        farmerGroups: farmerGroups,
                        onAddFarmerGroupClick: onAddFarmerGroupClick,
                        onProfileRegionChange: handleProfileRegionCascade
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerLandSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        lands: formData.lands || [],
                        provinces: provinces,
                        landRegions: landRegions,
                        onAddLand: handleAddLand,
                        onRemoveLand: handleRemoveLand,
                        onLandChange: handleLandChange
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid ${actionGridCols} gap-4 pt-6 border-t border-zinc-100 w-full`,
                        children: [
                            !isAdding && onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onDelete,
                                className: "w-full px-5 py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-sm font-bold transition text-center order-3 sm:order-1",
                                children: "Hapus Akun"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: "w-full px-6 py-3 border border-zinc-300 hover:bg-zinc-100 rounded-xl text-sm font-bold text-zinc-700 transition text-center order-2",
                                children: "Batal"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full px-8 py-3 bg-[#107349] hover:bg-[#179661] text-white rounded-xl text-sm font-bold transition shadow-md text-center order-1 sm:order-3",
                                children: "Simpan"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/farmers/FarmerForm.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
_s(FarmerForm, "w89JZrmnOJ4MmUPa+R8etEZYPRA=");
_c = FarmerForm;
var _c;
__turbopack_context__.k.register(_c, "FarmerForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/farmers/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
'use client';
;
;
function EmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-dashed border-zinc-200 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[450px] shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-blue-50 text-green-600 rounded-2xl mb-4 shadow-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaIdCard"], {
                    className: "text-3xl"
                }, void 0, false, {
                    fileName: "[project]/app/components/dashboard/farmers/EmptyState.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/dashboard/farmers/EmptyState.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-base font-extrabold text-zinc-800 tracking-tight",
                children: "Belum Ada Petani Terpilih"
            }, void 0, false, {
                fileName: "[project]/app/components/dashboard/farmers/EmptyState.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-400 font-medium max-w-sm mt-1 leading-relaxed",
                children: "Silakan pilih profil di samping untuk mengubah data, atau klik tombol tambah untuk mendaftarkan anggota kelompok tani baru."
            }, void 0, false, {
                fileName: "[project]/app/components/dashboard/farmers/EmptyState.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/farmers/EmptyState.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/admin-lapangan/data-petani/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataPetaniPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/farmers/FarmerList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/farmers/FarmerForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/farmers/EmptyState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function DataPetaniPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminName, setAdminName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Andi');
    const [farmers, setFarmers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [farmerGroups, setFarmerGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFarmer, setSelectedFarmer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // STATE MODAL CUSTOM
    const [isGroupModalOpen, setIsGroupModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newGroupName, setNewGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newGroupDesc, setNewGroupDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // STATE MASTER WILAYAH UNTUK FILTER (DILUAR FORM)
    const [filterDistricts, setFilterDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterVillages, setFilterVillages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // STATE MASTER WILAYAH KHUSUS FORM PROFIL/EDIT PETANI
    const [provinces, setProvinces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cities, setCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [villages, setVillages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // STATE FORM DATA
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        address: '',
        farmer_group_id: '',
        nik: '',
        province_id: '',
        city_id: '',
        district_id: '',
        village_id: '',
        notes: '',
        lands: [
            {
                id: undefined,
                land_name: '',
                province_id: '',
                city_id: '',
                district_id: '',
                village_id: '',
                area: '',
                unit: 'Hektar(Ha)',
                status: 'Milik Sendiri',
                current_use: '',
                soil_type: '',
                water_source: '',
                irrigation_type: '',
                ownership_document: '',
                document_preview: null,
                location_address: ''
            }
        ]
    });
    const Toast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
    const fetchFarmers = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/farmers');
            if (response.data.success) {
                setFarmers(response.data.data);
                // Pemicu otomatis untuk memuat data wilayah filter berdasarkan data petani yang ada
                fetchGlobalRegionsForFilter(response.data.data);
            }
        } catch (error) {
            console.error("Gagal memuat data petani", error);
        }
    };
    const fetchFarmerGroups = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/farmer-groups');
            if (response.data.success) setFarmerGroups(response.data.data);
        } catch (error) {
            console.error("Gagal memuat data kelompok tani", error);
        }
    };
    const fetchProvinces = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/regional/provinces');
            setProvinces(response.data || []);
        } catch (error) {
            console.error("Gagal memuat data provinsi", error);
        }
    };
    /**
   * FUNGSI BARU: Mengambil data kecamatan & desa secara menyeluruh untuk keperluan Filter Dropdown.
   * Anda bisa menyesuaikan endpoint ini jika backend Anda punya route regional global atau berdasarkan City ID tertentu.
   */ const fetchGlobalRegionsForFilter = async (farmersData)=>{
        try {
            // Opsi 1: Jika admin lapangan memegang kota tertentu, langsung tembak kota tersebut.
            // Misal kita ambil sampel city_id dari petani pertama yang ada jika tersedia
            const sampleCityId = farmersData.find((f)=>f.city_id)?.city_id || '32.04'; // default kode kota Anda jika kosong
            if ("TURBOPACK compile-time truthy", 1) {
                const resDist = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/cities/${sampleCityId}/districts`);
                setFilterDistricts(resDist.data || []);
                // Untuk desa, jika ingin langsung diload semua berdasarkan kecamatan pertama:
                if (resDist.data && resDist.data.length > 0) {
                    const firstDistrictCode = resDist.data[0].code;
                    const resVill = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${firstDistrictCode}/villages`);
                    setFilterVillages(resVill.data || []);
                }
            }
        } catch (error) {
            console.error("Gagal memuat master regional untuk panel filter", error);
        }
    };
    // Handler dinamis untuk perubahan region di dalam komponen Form (Bukan Filter)
    const handleProfileRegionChange = async (type, code)=>{
        try {
            if (type === 'province') {
                setFormData((prev)=>({
                        ...prev,
                        province_id: code,
                        city_id: '',
                        district_id: '',
                        village_id: ''
                    }));
                if (!code) {
                    setCities([]);
                    setDistricts([]);
                    setVillages([]);
                    return;
                }
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/provinces/${code}/cities`);
                setCities(res.data || []);
                setDistricts([]);
                setVillages([]);
            } else if (type === 'city') {
                setFormData((prev)=>({
                        ...prev,
                        city_id: code,
                        district_id: '',
                        village_id: ''
                    }));
                if (!code) {
                    setDistricts([]);
                    setVillages([]);
                    return;
                }
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/cities/${code}/districts`);
                setDistricts(res.data || []);
                setVillages([]);
            } else if (type === 'district') {
                setFormData((prev)=>({
                        ...prev,
                        district_id: code,
                        village_id: ''
                    }));
                if (!code) {
                    setVillages([]);
                    return;
                }
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${code}/villages`);
                setVillages(res.data || []);
            } else if (type === 'village') {
                setFormData((prev)=>({
                        ...prev,
                        village_id: code
                    }));
            }
        } catch (err) {
            console.error(`Gagal memuat region via handler untuk ${type}`, err);
        }
    };
    // Handler khusus untuk perubahan dropdown di panel FILTER (Bukan Form)
    const handleFilterRegionChange = async (type, code)=>{
        try {
            if (type === 'district') {
                if (!code) {
                    setFilterVillages([]);
                    return;
                }
                // Ambil data desa terbaru berdasarkan kecamatan yang dipilih pada filter
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${code}/villages`);
                setFilterVillages(res.data || []);
            }
        } catch (err) {
            console.error(`Gagal memuat desa untuk filter kecamatan ${code}`, err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataPetaniPage.useEffect": ()=>{
            const profile = localStorage.getItem('user_profile');
            if (profile) {
                const parsed = JSON.parse(profile);
                if (parsed.name) setAdminName(parsed.name);
            }
            fetchFarmers();
            fetchFarmerGroups();
            fetchProvinces();
        }
    }["DataPetaniPage.useEffect"], []);
    const handleSelectFarmer = async (farmer)=>{
        setIsAdding(false);
        setSelectedFarmer(farmer);
        const BACKEND_URL = 'http://localhost:8000';
        const cleanProvinceId = farmer.province_id ? farmer.province_id.toString().trim() : '';
        const cleanCityId = farmer.city_id ? farmer.city_id.toString().trim() : '';
        const cleanDistrictId = farmer.district_id ? farmer.district_id.toString().trim() : '';
        const cleanVillageId = farmer.village_id ? farmer.village_id.toString().trim() : '';
        try {
            if (cleanProvinceId) {
                const resCity = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/provinces/${cleanProvinceId}/cities`);
                setCities(resCity.data || []);
            }
            if (cleanCityId) {
                const resDist = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/cities/${cleanCityId}/districts`);
                setDistricts(resDist.data || []);
            }
            if (cleanDistrictId) {
                const resVill = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/regional/districts/${cleanDistrictId}/villages`);
                setVillages(resVill.data || []);
            }
        } catch (error) {
            console.error("Gagal menyinkronkan data regional untuk mode edit", error);
        }
        setFormData({
            name: farmer.user?.name || '',
            email: farmer.user?.email || '',
            phone: farmer.user?.phone || '',
            address: farmer.user?.address || '',
            farmer_group_id: farmer.farmer_group_id ? farmer.farmer_group_id.toString() : '',
            nik: farmer.nik || '',
            province_id: cleanProvinceId,
            city_id: cleanCityId,
            district_id: cleanDistrictId,
            village_id: cleanVillageId,
            notes: farmer.notes || '',
            lands: farmer.lands && farmer.lands.length > 0 ? farmer.lands.map((l)=>{
                let fullDocUrl = l.ownership_document || '';
                if (fullDocUrl && !fullDocUrl.startsWith('http')) {
                    fullDocUrl = `${BACKEND_URL}${fullDocUrl}`;
                }
                const hasDoc = fullDocUrl !== '';
                return {
                    id: l.id,
                    land_name: l.land_name,
                    province_id: l.province_id ? l.province_id.toString().trim() : '',
                    city_id: l.city_id ? l.city_id.toString().trim() : '',
                    district_id: l.district_id ? l.district_id.toString().trim() : '',
                    village_id: l.village_id ? l.village_id.toString().trim() : '',
                    area: l.area !== undefined && l.area !== null ? l.area.toString() : '',
                    unit: l.unit || 'Hektar(Ha)',
                    status: l.status || 'Milik Sendiri',
                    current_use: l.current_use || '',
                    soil_type: l.soil_type || '',
                    water_source: l.water_source || '',
                    irrigation_type: l.irrigation_type || '',
                    ownership_document: fullDocUrl,
                    document_preview: hasDoc ? {
                        name: 'Dokumen Terarsip',
                        type: fullDocUrl.toLowerCase().endsWith('.pdf') ? 'application/pdf' : 'image/jpeg',
                        url: fullDocUrl
                    } : null,
                    location_address: l.location_address || '',
                    notes: l.notes || farmer.notes || ''
                };
            }) : [
                {
                    id: undefined,
                    land_name: '',
                    province_id: '',
                    city_id: '',
                    district_id: '',
                    village_id: '',
                    area: '',
                    unit: 'Hektar(Ha)',
                    status: 'Milik Sendiri',
                    current_use: '',
                    soil_type: '',
                    water_source: '',
                    irrigation_type: '',
                    ownership_document: '',
                    document_preview: null,
                    location_address: ''
                }
            ]
        });
    };
    const handleInitAdd = ()=>{
        setSelectedFarmer(null);
        setIsAdding(true);
        setCities([]);
        setDistricts([]);
        setVillages([]);
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            farmer_group_id: farmerGroups.length > 0 ? farmerGroups[0].id.toString() : '',
            nik: '',
            province_id: '',
            city_id: '',
            district_id: '',
            village_id: '',
            notes: '',
            lands: [
                {
                    id: undefined,
                    land_name: '',
                    province_id: '',
                    city_id: '',
                    district_id: '',
                    village_id: '',
                    area: '',
                    unit: 'Hektar(Ha)',
                    status: 'Milik Sendiri',
                    current_use: '',
                    soil_type: '',
                    water_source: '',
                    irrigation_type: '',
                    ownership_document: '',
                    document_preview: null,
                    location_address: ''
                }
            ]
        });
    };
    const handleSaveFarmer = async (e)=>{
        e.preventDefault();
        if (formData.nik.length !== 16) {
            Toast.fire({
                icon: 'error',
                title: 'Format NIK Salah. Harus 16 digit!'
            });
            return;
        }
        const payload = new FormData();
        payload.append('name', formData.name);
        payload.append('email', formData.email);
        payload.append('phone', formData.phone);
        payload.append('address', formData.address || '');
        payload.append('farmer_group_id', formData.farmer_group_id);
        payload.append('nik', formData.nik);
        payload.append('province_id', formData.province_id);
        payload.append('city_id', formData.city_id);
        payload.append('district_id', formData.district_id);
        payload.append('village_id', formData.village_id);
        payload.append('notes', formData.notes || '');
        if (isAdding) {
            payload.append('password', 'password123');
        } else {
            payload.append('_method', 'PUT');
        }
        (formData.lands || []).forEach((land, index)=>{
            if (land.id) payload.append(`lands[${index}][id]`, land.id.toString());
            payload.append(`lands[${index}][land_name]`, land.land_name || '');
            payload.append(`lands[${index}][province_id]`, land.province_id ? land.province_id.toString() : '');
            payload.append(`lands[${index}][city_id]`, land.city_id ? land.city_id.toString() : '');
            payload.append(`lands[${index}][district_id]`, land.district_id ? land.district_id.toString() : '');
            payload.append(`lands[${index}][village_id]`, land.village_id ? land.village_id.toString() : '');
            const parsedArea = land.area ? parseFloat(land.area.toString().replace(',', '.')) : 0;
            payload.append(`lands[${index}][area]`, isNaN(parsedArea) ? '0' : parsedArea.toString());
            payload.append(`lands[${index}][unit]`, land.unit || 'Hektar(Ha)');
            payload.append(`lands[${index}][status]`, land.status || 'Milik Sendiri');
            payload.append(`lands[${index}][current_use]`, land.current_use || '');
            payload.append(`lands[${index}][soil_type]`, land.soil_type || '');
            payload.append(`lands[${index}][water_source]`, land.water_source || '');
            payload.append(`lands[${index}][irrigation_type]`, land.irrigation_type || '');
            payload.append(`lands[${index}][location_address]`, land.location_address || '');
            if (land.ownership_document instanceof File) {
                payload.append(`lands[${index}][ownership_document]`, land.ownership_document);
            } else if (typeof land.ownership_document === 'string' && land.ownership_document !== '') {
                payload.append(`lands[${index}][ownership_document]`, land.ownership_document);
            }
        });
        try {
            if (isAdding) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/farmers', payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Petani baru didaftarkan!'
                });
            } else if (selectedFarmer) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/farmers/${selectedFarmer.id}`, payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Profil petani diperbarui!'
                });
            }
            setIsAdding(false);
            setSelectedFarmer(null);
            fetchFarmers();
        } catch (error) {
            const msg = error.response?.data ? Object.values(error.response.data).flat().join(', ') : 'Terjadi kesalahan sistem.';
            Toast.fire({
                icon: 'error',
                title: msg
            });
        }
    };
    const handleOpenGroupModal = ()=>{
        setNewGroupName('');
        setNewGroupDesc('');
        setIsGroupModalOpen(true);
    };
    const handleSaveGroupCustom = async ()=>{
        if (!newGroupName.trim()) {
            Toast.fire({
                icon: 'error',
                title: 'Nama kelompok tani wajib diisi!'
            });
            return;
        }
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/farmer-groups', {
                name: newGroupName,
                description: newGroupDesc
            });
            if (response.data.success) {
                Toast.fire({
                    icon: 'success',
                    title: 'Kelompok Tani Baru berhasil dibuat!'
                });
                await fetchFarmerGroups();
                setFormData((prev)=>({
                        ...prev,
                        farmer_group_id: response.data.data.id.toString()
                    }));
                setIsGroupModalOpen(false);
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Gagal menyimpan kelompok tani.'
            });
        }
    };
    const handleDeleteFarmer = async ()=>{
        if (!selectedFarmer) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: 'Apakah Anda yakin?',
            text: "Data master petani akan dihapus permanen!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#71717a',
            confirmButtonText: 'Ya, Hapus!'
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/farmers/${selectedFarmer.id}`);
                    Toast.fire({
                        icon: 'success',
                        title: 'Data petani telah dibuang.'
                    });
                    setSelectedFarmer(null);
                    fetchFarmers();
                } catch (error) {
                    Toast.fire({
                        icon: 'error',
                        title: 'Gagal menghapus data.'
                    });
                }
            }
        });
    };
    const handleSyncFarmers = async ()=>{
        try {
            Toast.fire({
                icon: 'info',
                title: 'Memulai sinkronisasi data...'
            });
            await fetchFarmers();
            await fetchFarmerGroups();
            Toast.fire({
                icon: 'success',
                title: 'Data berhasil disinkronkan!'
            });
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Gagal melakukan sinkronisasi.'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f8fafc] text-zinc-800 antialiased font-sans pb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/admin-lapangan",
                                className: "p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-500 hover:text-zinc-800 shadow-sm transition flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-extrabold text-zinc-900 tracking-tight",
                                        children: "Manajemen Data Petani"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-500 font-medium",
                                        children: "Integrasi Real-Time dengan Database Master Docker Backend"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-xl text-xs font-semibold self-start sm:self-center shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWifi"], {}, void 0, false, {
                                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Koneksi Server Aktif"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                lineNumber: 445,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-10 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            farmers: farmers,
                            selectedFarmer: selectedFarmer,
                            searchTerm: searchTerm,
                            setSearchTerm: setSearchTerm,
                            onSelectFarmer: handleSelectFarmer,
                            onInitAdd: handleInitAdd,
                            farmerGroups: farmerGroups,
                            districts: filterDistricts,
                            villages: filterVillages,
                            onSync: handleSyncFarmers,
                            onFilterRegionChange: handleFilterRegionChange
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6",
                        children: isAdding || selectedFarmer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$FarmerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isAdding: isAdding,
                            formData: formData,
                            setFormData: setFormData,
                            farmerGroups: farmerGroups,
                            onAddFarmerGroupClick: handleOpenGroupModal,
                            onSubmit: handleSaveFarmer,
                            onCancel: ()=>{
                                setSelectedFarmer(null);
                                setIsAdding(false);
                            },
                            onDelete: handleDeleteFarmer,
                            provinces: provinces,
                            cities: cities,
                            districts: districts,
                            villages: villages,
                            onProfileRegionChange: handleProfileRegionChange
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                            lineNumber: 470,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$farmers$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                            lineNumber: 485,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                lineNumber: 449,
                columnNumber: 9
            }, this),
            isGroupModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl w-[420px] p-5 shadow-xl border border-zinc-100 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[#00aa5b] font-bold text-lg tracking-wide text-center w-full mb-4",
                            children: "Kelompok Petani"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                            lineNumber: 494,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-zinc-600 mb-1",
                                            children: "Nama kelompok petani"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newGroupName,
                                            onChange: (e)=>setNewGroupName(e.target.value),
                                            className: "w-full px-3 py-3 bg-[#f3f4f6] border border-zinc-200 rounded-xl text-xs text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] transition box-border",
                                            placeholder: "Masukkan nama kelompok tani..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-zinc-600 mb-1",
                                            children: "Deskripsi"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 2,
                                            value: newGroupDesc,
                                            onChange: (e)=>setNewGroupDesc(e.target.value),
                                            className: "w-full px-3 py-6 bg-[#f3f4f6] border border-zinc-200 rounded-xl text-xs text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] transition resize-none box-border",
                                            placeholder: "Masukkan keterangan/deskripsi..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                            lineNumber: 497,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 w-full mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsGroupModalOpen(false),
                                    className: "bg-[#f3f4f6] hover:bg-zinc-200 text-zinc-900 font-bold py-2.5 rounded-xl text-sm transition flex-1 text-center border border-zinc-300 cursor-pointer",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSaveGroupCustom,
                                    className: "bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-2.5 rounded-xl text-sm transition flex-1 text-center cursor-pointer",
                                    children: "Simpan"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                            lineNumber: 519,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                    lineNumber: 493,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
                lineNumber: 492,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/admin-lapangan/data-petani/page.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_s(DataPetaniPage, "Dww5Va7DTTvq59HOaB7m6kqf3nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DataPetaniPage;
var _c;
__turbopack_context__.k.register(_c, "DataPetaniPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1n41axc._.js.map