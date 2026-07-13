(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/dashboard/kemenko/MetricCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetricCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function MetricCards({ total, active, inactive, newThisMonth }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 bg-zinc-100 rounded-xl text-zinc-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUsers"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold text-zinc-400 uppercase tracking-wider",
                                children: "Total Cooperatives"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-zinc-800",
                                children: total.toLocaleString("id-ID")
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-emerald-600 font-semibold mt-0.5",
                                children: [
                                    "↑ 8.5%",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400 font-normal",
                                        children: "dari bulan lalu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 bg-emerald-50 rounded-xl text-emerald-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold text-zinc-400 uppercase tracking-wider",
                                children: "Active Cooperatives"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-zinc-800",
                                children: active.toLocaleString("id-ID")
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-emerald-600 font-semibold mt-0.5",
                                children: [
                                    "↑ 6.2%",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400 font-normal",
                                        children: "dari bulan lalu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 bg-amber-50 rounded-xl text-amber-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimesCircle"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold text-zinc-400 uppercase tracking-wider",
                                children: "Inactive Cooperatives"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-zinc-800",
                                children: inactive.toLocaleString("id-ID")
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-amber-600 font-semibold mt-0.5",
                                children: [
                                    "↓ 2.1%",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400 font-normal",
                                        children: "dari bulan lalu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-2xl border border-zinc-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 bg-blue-50 rounded-xl text-blue-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalendarPlus"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold text-zinc-400 uppercase tracking-wider",
                                children: "New This Month"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-zinc-800",
                                children: newThisMonth.toLocaleString("id-ID")
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-emerald-600 font-semibold mt-0.5",
                                children: [
                                    "↑ 14.3%",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400 font-normal",
                                        children: "dari bulan lalu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/kemenko/MetricCards.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = MetricCards;
var _c;
__turbopack_context__.k.register(_c, "MetricCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/kemenko/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function FilterBar({ search, setSearch, statusFilter, setStatusFilter, onReset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col xl:flex-row xl:items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {
                        className: "absolute left-4 top-3.5 text-zinc-400 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search cooperative name, unique code, or location...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "w-full pl-11 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] transition-all text-zinc-700 placeholder-zinc-400"
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-2 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        disabled: true,
                        className: "bg-zinc-50 border border-zinc-200 text-zinc-400 rounded-xl py-2.5 px-4 text-sm font-medium focus:outline-none cursor-not-allowed",
                        defaultValue: "all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "all",
                            children: "All Provinces"
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        disabled: true,
                        className: "bg-zinc-50 border border-zinc-200 text-zinc-400 rounded-xl py-2.5 px-4 text-sm font-medium focus:outline-none cursor-not-allowed",
                        defaultValue: "all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "all",
                            children: "All Regencies/Cities"
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: statusFilter,
                        onChange: (e)=>setStatusFilter(e.target.value),
                        className: "bg-white border border-zinc-200 rounded-xl py-2.5 px-4 text-sm font-semibold text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Status"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "active",
                                children: "Active"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "inactive",
                                children: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onReset,
                className: "p-2.5 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-all text-zinc-600 flex items-center justify-center gap-2 text-sm font-bold shrink-0",
                title: "Reset Filters",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSync"], {
                        size: 13,
                        className: "text-zinc-500"
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "xl:hidden",
                        children: "Reset Filter"
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/dashboard/kemenko/FilterBar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/kemenko/CooperativeTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CooperativeTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function CooperativeTable({ data, loading, actionLoading, onActivate, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-zinc-200/80 shadow-sm overflow-hidden animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-zinc-50/70 border-b border-zinc-200 text-zinc-400 text-[11px] font-bold uppercase tracking-wider",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-6 text-center w-14",
                                    children: "No"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-4",
                                    children: "Cooperative Name"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-4",
                                    children: "Unique Code"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-4 text-center",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-4 text-center",
                                    children: "Members"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-4 text-center",
                                    children: "Warehouses"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "py-4 px-6 text-center w-36",
                                    children: "Action"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-zinc-100 text-sm text-zinc-700",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 7,
                                className: "text-center py-12 text-zinc-400 font-medium",
                                children: "Memuat data logistik nasional..."
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, this) : data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 7,
                                className: "text-center py-12 text-zinc-400 font-medium",
                                children: "Tidak ada data master koperasi yang cocok."
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this) : data.map((coop, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-zinc-50/50 transition-all duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-6 text-center font-semibold text-zinc-400",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-4 font-bold text-zinc-900",
                                        children: coop.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-4 font-mono text-zinc-500 text-[13px]",
                                        children: coop.cooperative_code
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-4 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase ${coop.is_activated ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-amber-50 text-amber-600 border border-amber-200"}`,
                                            children: coop.is_activated ? "Active" : "Inactive"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                            lineNumber: 80,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-4 text-center font-bold text-zinc-800",
                                        children: coop.users_count ?? 0
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-4 text-center font-bold text-zinc-800",
                                        children: coop.warehouses_count ?? 0
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "py-3.5 px-6 flex items-center justify-center gap-1.5",
                                        children: [
                                            !coop.is_activated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onActivate(coop.id),
                                                disabled: actionLoading === coop.id,
                                                className: "bg-[#0F7B4A] hover:bg-[#094D30] text-white text-[12px] px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow-sm transition-all disabled:opacity-50",
                                                title: "Aktifkan & Generate Akun Login",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBolt"], {
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 25
                                                    }, this),
                                                    " ",
                                                    actionLoading === coop.id ? "Activating..." : "Activate"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                lineNumber: 99,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "p-2 text-zinc-500 hover:text-[#0F7B4A] bg-zinc-50 hover:bg-emerald-50 rounded-lg border border-zinc-200/60 transition-all",
                                                        title: "Lihat Detail Profil Spasial",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "p-2 text-zinc-500 hover:text-blue-600 bg-zinc-50 hover:bg-blue-50 rounded-lg border border-zinc-200/60 transition-all",
                                                        title: "Edit Data Dasar Koperasi",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPen"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onDelete(coop.id, coop.cooperative_code),
                                                className: "p-2 text-zinc-400 hover:text-red-600 bg-zinc-50 hover:bg-red-50 rounded-lg border border-zinc-200/60 transition-all",
                                                title: "Hapus Koperasi dari Pusat",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrashAlt"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, coop.id, true, {
                                fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/dashboard/kemenko/CooperativeTable.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = CooperativeTable;
var _c;
__turbopack_context__.k.register(_c, "CooperativeTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/kemenko/AddCoopModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddCoopModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddCoopModal({ isOpen, onClose, onSubmit }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            const errMessage = await onSubmit({
                name,
                cooperative_code: code
            });
            if (errMessage) {
                setError(errMessage);
            } else {
                setName("");
                setCode("");
                onClose();
            }
        } catch  {
            setError("Terjadi kesalahan sistem.");
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-zinc-200 animate-scaleUp",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-zinc-900",
                            children: "Tambah Induk Koperasi"
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-zinc-400 hover:text-zinc-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                                lineNumber: 45,
                                columnNumber: 83
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-4",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1",
                                    children: "Nama Koperasi"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    placeholder: "Contoh: Koperasi Tani Makmur Sentosa",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    className: "w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] text-zinc-700"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1",
                                    children: "Kode Unik Koperasi"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    placeholder: "Contoh: KOP-2025-6512-0016",
                                    value: code,
                                    onChange: (e)=>setCode(e.target.value),
                                    className: "w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F7B4A] font-mono text-zinc-700"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submitting,
                            className: "w-full bg-[#0F7B4A] hover:bg-[#094D30] text-white font-bold py-2.5 rounded-xl text-sm shadow-sm transition-all mt-2 disabled:opacity-50",
                            children: submitting ? "Menyimpan..." : "Simpan ke Sistem Pusat"
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/dashboard/kemenko/AddCoopModal.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(AddCoopModal, "TJTSgu1EvTxbIvfBD9EsvHieWgI=");
_c = AddCoopModal;
var _c;
__turbopack_context__.k.register(_c, "AddCoopModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/dashboard/kemenko/CredentialsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CredentialsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function CredentialsModal({ isOpen, onClose, credentials }) {
    if (!isOpen || !credentials) return null;
    const handleCopy = ()=>{
        navigator.clipboard.writeText(`Email: ${credentials.email}\nPassword: ${credentials.passwordDefault}`);
        alert("Kredensial berhasil disalin ke clipboard!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-md w-full shadow-2xl p-6 border border-zinc-200 animate-scaleUp",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-zinc-900 flex items-center gap-2",
                    children: "🔑 Akun Login Berhasil Dibuat!"
                }, void 0, false, {
                    fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-zinc-500 mt-2",
                    children: "Salin kredensial login default berikut untuk diserahkan kepada pengurus koperasi lapangan."
                }, void 0, false, {
                    fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-2 font-mono text-xs text-zinc-800 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-400 font-sans",
                                    children: "Email:"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                " ",
                                credentials.email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-400 font-sans",
                                    children: "Password:"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                " ",
                                credentials.passwordDefault
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCopy,
                            className: "absolute right-3 top-3 p-2 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-lg transition-all text-zinc-600",
                            title: "Salin Kredensial",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCopy"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mt-5 w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2.5 rounded-xl text-sm transition-all",
                    children: "Saya Sudah Menyalin, Tutup."
                }, void 0, false, {
                    fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/dashboard/kemenko/CredentialsModal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = CredentialsModal;
var _c;
__turbopack_context__.k.register(_c, "CredentialsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CooperativeMasterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/axios.ts [app-client] (ecmascript)");
// Import Komponen Presentasional Global yang Baru Saja Kita Buat
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$MetricCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/kemenko/MetricCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/kemenko/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$CooperativeTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/kemenko/CooperativeTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$AddCoopModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/kemenko/AddCoopModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$CredentialsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/dashboard/kemenko/CredentialsModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CooperativeMasterPage() {
    _s();
    // State Utama Data & Loader
    const [cooperatives, setCooperatives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Filter States
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // State Modal Management
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCredModal, setShowCredModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [credentials, setCredentials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1. Fetching Data secara Live dari Backend (Sekarang Sukses 200 OK!)
    const fetchCooperatives = async ()=>{
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/cooperatives");
            if (response.data.success) {
                setCooperatives(response.data.data);
            }
        } catch (error) {
            console.error("Gagal mengambil data master koperasi:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CooperativeMasterPage.useEffect": ()=>{
            fetchCooperatives();
        }
    }["CooperativeMasterPage.useEffect"], []);
    // 2. Kalkulasi Nilai Metrik Atas (On-The-Fly)
    const totalCoops = cooperatives.length;
    const activeCoops = cooperatives.filter((c)=>c.is_activated).length;
    const inactiveCoops = totalCoops - activeCoops;
    const newThisMonth = cooperatives.filter((c)=>{
        if (!c.created_at) return false;
        const date = new Date(c.created_at);
        const now = new Date();
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).length;
    // 3. Callback Aksi: Aktivasi Koperasi & Pembuatan Otomatis Kredensial
    const handleActivateCooperative = async (id)=>{
        if (!confirm("Apakah Anda yakin ingin mengaktifkan koperasi ini dan men-generate akun login petugas?")) return;
        setActionLoading(id);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/cooperatives/${id}/activate`);
            if (response.data.success) {
                setCredentials({
                    email: response.data.credentials.email,
                    passwordDefault: response.data.credentials.password
                });
                setShowCredModal(true);
                fetchCooperatives(); // Refresh tabel biar status berubah jadi Active
            }
        } catch (error) {
            alert(error.response?.data?.message || "Gagal mengaktifkan koperasi.");
        } finally{
            setActionLoading(null);
        }
    };
    // 4. Callback Aksi: Kirim Data Form Induk Koperasi Baru
    const handleStoreCooperative = async (formData)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/cooperatives", formData);
            if (response.data.success) {
                fetchCooperatives(); // Refresh data live
                return ""; // Berhasil, tidak ada error message
            }
        } catch (error) {
            return error.response?.data?.cooperative_code?.[0] || "Gagal menambahkan data koperasi.";
        }
    };
    // 5. Callback Aksi: Hapus Koperasi Pusat
    const handleDeleteCooperative = async (id, code)=>{
        if (!confirm(`PERINGATAN: Menghapus koperasi akan memutuskan seluruh data petani & gudang terkait!\n\nKetik OK untuk menghapus kode: ${code}`)) return;
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/cooperatives/${id}`);
            if (response.data.success) {
                fetchCooperatives();
            }
        } catch (error) {
            alert("Gagal menghapus data koperasi.");
        }
    };
    // 6. Fungsi Reset Filter
    const handleResetFilters = ()=>{
        setSearch("");
        setStatusFilter("all");
        fetchCooperatives();
    };
    // 7. Proses Penyaringan Data Lokal Sebelum Dilempar ke Komponen Tabel
    const filteredData = cooperatives.filter((item)=>{
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.cooperative_code.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === "all" || statusFilter === "active" && item.is_activated || statusFilter === "inactive" && !item.is_activated;
        return matchesSearch && matchesStatus;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-zinc-900 tracking-tight",
                                children: "Cooperative Master"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-500",
                                children: "Kelola dan pantau seluruh data master koperasi terdaftar di sistem pusat nasional."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddModal(true),
                        className: "bg-[#0F7B4A] hover:bg-[#094D30] text-white px-4 py-2.5 rounded-xl font-bold text-[14px] shadow-sm transition-all flex items-center gap-2",
                        children: "+ Add Cooperative"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$MetricCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                total: totalCoops,
                active: activeCoops,
                inactive: inactiveCoops,
                newThisMonth: newThisMonth
            }, void 0, false, {
                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                search: search,
                setSearch: setSearch,
                statusFilter: statusFilter,
                setStatusFilter: setStatusFilter,
                onReset: handleResetFilters
            }, void 0, false, {
                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$CooperativeTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: filteredData,
                loading: loading,
                actionLoading: actionLoading,
                onActivate: handleActivateCooperative,
                onDelete: handleDeleteCooperative
            }, void 0, false, {
                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$AddCoopModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showAddModal,
                onClose: ()=>setShowAddModal(false),
                onSubmit: handleStoreCooperative
            }, void 0, false, {
                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$dashboard$2f$kemenko$2f$CredentialsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCredModal,
                onClose: ()=>setShowCredModal(false),
                credentials: credentials
            }, void 0, false, {
                fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/kemenko-pangan/cooperative-master/page.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(CooperativeMasterPage, "rBgO2TFQ9pdhbiMkCFle/vBzSvs=");
_c = CooperativeMasterPage;
var _c;
__turbopack_context__.k.register(_c, "CooperativeMasterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0j60q78._.js.map