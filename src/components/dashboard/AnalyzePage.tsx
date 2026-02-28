"use client";
import React, { useState } from "react";
import {
    InfoCircle,
    Chart,
    ArrowDown,
    ArrowUp,
    ConvertCard,
    Add,
    Receipt21,
    More,
} from "iconsax-react";
import {
    Progress,
    useDisclosure,
    Chip,
    Avatar,
    ScrollShadow,
    Button,
} from "@heroui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import IncomeExpenseModal from "../modals/IncomeExpenseModal";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const AnalyzePage: React.FC = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedMonth, setSelectedMonth] = useState("February");

    const months = ["January", "February", "March", "April"];

    const recentRecords = [
        {
            id: 1,
            name: "Spotify Subscription",
            category: "Entertainment",
            amount: -12.99,
            date: "Today, 10:45 AM",
            type: "expense",
        },
        {
            id: 2,
            name: "Salary Deposit",
            category: "Income",
            amount: 4250.0,
            date: "Yesterday",
            type: "income",
        },
        {
            id: 3,
            name: "Apple Store",
            category: "Shopping",
            amount: -199.0,
            date: "Feb 26, 2025",
            type: "expense",
        },
        {
            id: 4,
            name: "Starbucks Coffee",
            category: "Food & Drink",
            amount: -5.5,
            date: "Feb 25, 2025",
            type: "expense",
        },
        {
            id: 5,
            name: "Freelance Project",
            category: "Income",
            amount: 850.0,
            date: "Feb 24, 2025",
            type: "income",
        },
        {
            id: 6,
            name: "Electric Bill",
            category: "Utilities",
            amount: -85.2,
            date: "Feb 23, 2025",
            type: "expense",
        },
    ];

    const chartOptions: ApexOptions = {
        chart: {
            type: "donut",
            background: "transparent",
        },
        colors: ["#3C50E0", "#FFB017", "#FF4532", "#10B981", "#80CAEE"],
        labels: ["Food", "Transport", "Shopping", "Utilities", "Other"],
        stroke: { show: false },
        legend: { show: false },
        dataLabels: { enabled: false },
        plotOptions: {
            pie: {
                donut: {
                    size: "80%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "14px",
                            color: "#A5A5A5",
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#FFFFFF",
                            offsetY: 10,
                            formatter: (val) => `$${val}`,
                        },
                        total: {
                            show: true,
                            label: "All Spendings",
                            color: "#A5A5A5",
                            formatter: () => "$1,240.00",
                        },
                    },
                },
            },
        },
        theme: { mode: "dark" },
    };

    const chartSeries = [400, 150, 300, 200, 190];

    return (
        <div className="max-w-[1600px] mx-auto pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Analysis Details */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#161b22] px-4 py-2 rounded-full border border-gray-200 dark:border-white/5 transition-colors">
                            <span className="text-sm font-medium text-gray-500 dark:text-white/70">
                                Analysis Period
                            </span>
                            <ArrowDown
                                size={16}
                                className="text-gray-400 dark:text-white/40"
                            />
                        </div>

                        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar w-full justify-center py-2">
                            <span className="text-gray-400 dark:text-white/30 text-sm font-medium transition-colors">
                                2025
                            </span>
                            {months.map((month) => (
                                <div
                                    key={month}
                                    className="flex flex-col items-center gap-1"
                                >
                                    <span
                                        className={`text-sm font-bold cursor-pointer transition-colors ${selectedMonth === month ? "text-gray-800 dark:text-white" : "text-gray-400 dark:text-white/30"}`}
                                        onClick={() => setSelectedMonth(month)}
                                    >
                                        {month}
                                    </span>
                                    {selectedMonth === month && (
                                        <div className="w-1.5 h-1.5 bg-danger rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center py-4">
                        <div className="absolute right-0 top-0">
                            <Chip
                                startContent={
                                    <Chart size={16} variant="Bold" />
                                }
                                className="bg-primary/10 text-primary border-none py-4 font-bold"
                            >
                                Monthly Report
                            </Chip>
                        </div>

                        <div className="w-[300px] h-[300px] flex items-center justify-center">
                            <ReactApexChart
                                options={chartOptions}
                                series={chartSeries}
                                type="donut"
                                width={320}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-[#161b22] p-6 rounded-3xl border border-gray-200 dark:border-white/5 space-y-4 shadow-sm transition-colors">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-success font-bold text-sm">
                                    <ArrowDown
                                        variant="Bold"
                                        size={20}
                                        className="rotate-45"
                                    />
                                    <span>Money In</span>
                                </div>
                                <InfoCircle
                                    size={18}
                                    className="text-gray-300 dark:text-white/20"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                                    $4,250.00
                                </h3>
                                <p className="text-[10px] text-gray-400 dark:text-white/30 mt-1 uppercase font-bold tracking-wider">
                                    +12% vs Jan
                                </p>
                            </div>
                            <Progress
                                color="success"
                                value={65}
                                size="sm"
                                className="bg-gray-100 dark:bg-white/5"
                            />
                        </div>

                        <div className="bg-white dark:bg-[#161b22] p-6 rounded-3xl border border-gray-200 dark:border-white/5 space-y-4 shadow-sm transition-colors">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-danger font-bold text-sm">
                                    <ArrowUp
                                        variant="Bold"
                                        size={20}
                                        className="rotate-45"
                                    />
                                    <span>Money Out</span>
                                </div>
                                <InfoCircle
                                    size={18}
                                    className="text-gray-300 dark:text-white/20"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                                    $1,240.00
                                </h3>
                                <p className="text-[10px] text-gray-400 dark:text-white/30 mt-1 uppercase font-bold tracking-wider">
                                    -5% vs Jan
                                </p>
                            </div>
                            <Progress
                                color="danger"
                                value={30}
                                size="sm"
                                className="bg-gray-100 dark:bg-white/5"
                            />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#161b22] p-8 rounded-[32px] border border-gray-200 dark:border-white/5 space-y-6 shadow-sm transition-colors">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-warning font-bold text-sm">
                                <ConvertCard variant="Bold" size={20} />
                                <span className="text-gray-800 dark:text-white">
                                    Cash Flow Summary
                                </span>
                            </div>
                            <InfoCircle
                                size={18}
                                className="text-gray-300 dark:text-white/20"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6">
                            <div>
                                <p className="text-xs text-gray-400 dark:text-white/40 mb-1 font-bold uppercase tracking-wider">
                                    Net Cash Flow
                                </p>
                                <h3 className="text-3xl font-black text-gray-800 dark:text-white">
                                    $3,010.00
                                </h3>
                                <p className="text-[10px] text-gray-400 dark:text-white/30 font-bold uppercase tracking-wider mt-1">
                                    +15% in Jan
                                </p>
                            </div>
                            <div className="flex-1 max-w-full sm:max-w-[200px] space-y-4">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-[10px] text-gray-500 dark:text-white/40 font-bold uppercase tracking-widest">
                                        <span>Money In</span>
                                        <span className="text-success">
                                            $4.2k
                                        </span>
                                    </div>
                                    <Progress
                                        color="success"
                                        value={70}
                                        size="sm"
                                        className="bg-gray-100 dark:bg-white/5"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-[10px] text-gray-500 dark:text-white/40 font-bold uppercase tracking-widest">
                                        <span>Money Out</span>
                                        <span className="text-danger">
                                            $1.2k
                                        </span>
                                    </div>
                                    <Progress
                                        color="danger"
                                        value={30}
                                        size="sm"
                                        className="bg-gray-100 dark:bg-white/5"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Recent Records */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white dark:bg-[#161b22] p-8 rounded-[32px] border border-gray-200 dark:border-white/5 shadow-sm transition-colors flex flex-col h-full min-h-[600px]">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Receipt21 variant="Bold" size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-gray-800 dark:text-white leading-tight">
                                        Recent Records
                                    </h4>
                                    <p className="text-[10px] text-gray-400 dark:text-white/30 font-bold uppercase tracking-widest">
                                        Transactions
                                    </p>
                                </div>
                            </div>
                            <Button
                                isIconOnly
                                variant="light"
                                radius="full"
                                size="sm"
                            >
                                <More
                                    size={20}
                                    className="text-gray-400 dark:text-white/20"
                                />
                            </Button>
                        </div>

                        <ScrollShadow
                            className="flex-1 -mx-2 px-2"
                            hideScrollBar
                        >
                            <div className="space-y-2">
                                {recentRecords.map((record) => (
                                    <div
                                        key={record.id}
                                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Avatar
                                                size="sm"
                                                icon={
                                                    record.type === "income" ? (
                                                        <ArrowDown />
                                                    ) : (
                                                        <ArrowUp />
                                                    )
                                                }
                                                className={`${record.type === "income" ? "bg-success/20 text-success" : "bg-danger/20 text-danger"} rounded-xl`}
                                            />
                                            <div>
                                                <p className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                                                    {record.name}
                                                </p>
                                                <p className="text-[10px] text-gray-400 dark:text-white/30 font-bold">
                                                    {record.category} •{" "}
                                                    {record.date}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p
                                                className={`text-sm font-black ${record.type === "income" ? "text-success" : "text-gray-800 dark:text-white"}`}
                                            >
                                                {record.type === "income"
                                                    ? "+"
                                                    : "-"}
                                                $
                                                {Math.abs(
                                                    record.amount,
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollShadow>

                        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5">
                            <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-3xl border border-primary/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Add
                                            variant="Bold"
                                            size={24}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-black text-gray-800 dark:text-white">
                                            Quick Add
                                        </h5>
                                        <p className="text-[10px] text-gray-500 dark:text-white/40 font-bold">
                                            New Transaction
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    onPress={onOpen}
                                    fullWidth
                                    className="bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/20"
                                >
                                    Record Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IncomeExpenseModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
};

export default AnalyzePage;
