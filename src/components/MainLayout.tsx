"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCentralStore } from "@/Store";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen, setIsSidebarOpen } = useCentralStore();

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
            {/* Sidebar for Desktop */}
            <aside className="hidden lg:flex">
                <Sidebar />
            </aside>

            {/* Mobile Sidebar with Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-50 w-64 lg:hidden"
                        >
                            <Sidebar />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header
                    sidebarOpen={isSidebarOpen}
                    setSidebarOpen={setIsSidebarOpen}
                />
                
                <main className="flex-1">
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {children}
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
