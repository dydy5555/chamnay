"use client";

import { 
    Element4, 
    Calendar, 
    Receipt21, 
    EmptyWallet, 
    Chart1, 
    Setting2,
    WalletMoney,
    Logout
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Overview", href: "/home", icon: Element4 },
        { name: "Transactions", href: "/transactions", icon: Receipt21 },
        { name: "Calendar", href: "/calendar", icon: Calendar },
        { name: "Budget", href: "/budget", icon: EmptyWallet },
        { name: "Analytics", href: "/analytics", icon: Chart1 },
        { name: "Settings", href: "/settings", icon: Setting2 },
    ];

    return (
        <div className="w-64 z-50 shrink-0 lg:block h-screen sticky top-0 overflow-hidden bg-white dark:bg-[#0d1117] border-r border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="w-full h-full flex flex-col py-8 px-6">
                
                {/* Logo Section */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="h-10 w-10 flex items-center bg-danger justify-center rounded-2xl text-white shadow-xl shadow-danger/20">
                        <WalletMoney variant="Bold" size={24} />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-gray-800 dark:text-white leading-tight tracking-tight transition-colors">
                            CHAMNAY
                        </h1>
                        <p className="text-[10px] text-gray-400 dark:text-white/30 font-bold uppercase tracking-widest transition-colors">
                            Finance Hub
                        </p>
                    </div>
                </div>

                {/* Nav Items */}
                <div className="flex flex-col gap-2 flex-grow">
                    <p className="px-4 text-[10px] font-bold text-gray-400 dark:text-white/20 uppercase tracking-[0.2em] mb-4 transition-colors">
                        General
                    </p>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 group ${
                                pathname === item.href 
                                ? "bg-primary/5 dark:bg-white/5 text-primary dark:text-white shadow-inner" 
                                : "text-gray-500 dark:text-white/40 hover:text-primary dark:hover:text-white hover:bg-primary/5 dark:hover:bg-white/5"
                            }`}
                        >
                            <item.icon 
                                variant={pathname === item.href ? "Bold" : "Outline"} 
                                size={22} 
                                className={pathname === item.href ? "text-danger" : "text-inherit"}
                            />
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Bottom Logout */}
                <div className="mt-auto">
                    <button className="flex items-center gap-4 px-4 py-4 w-full rounded-2xl text-sm font-bold text-gray-500 dark:text-white/40 hover:text-danger hover:bg-danger/5 transition-all">
                        <Logout size={22} />
                        Logout
                    </button>
                    
                    <div className="mt-6 p-5 rounded-3xl bg-gray-50 dark:bg-gradient-to-br dark:from-white/5 dark:to-transparent border border-gray-200 dark:border-white/5 transition-colors">
                        <p className="text-xs font-bold text-gray-800 dark:text-white mb-1 transition-colors">Upgrade Plan</p>
                        <p className="text-[10px] text-gray-500 dark:text-white/30 mb-3 leading-relaxed font-medium transition-colors">Get unlimited tracking and advanced AI reports.</p>
                        <button className="w-full py-2 bg-gray-800 dark:bg-white text-white dark:text-[#0d1117] text-[11px] font-black rounded-xl hover:opacity-90 transition-all uppercase">
                            Go Pro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
