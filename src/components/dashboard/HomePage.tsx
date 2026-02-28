"use client";
import React from "react";
import {
    WalletMoney,
    MoneySend,
    CardReceive,
    TrendUp,
    TrendDown,
    Activity,
    Chart as ChartIcon,
} from "iconsax-react";
import CardDataState from "../cards/CardDataState";
import ChartOne from "../charts/ChartOne";
import TableOne from "../tables/TableOne";
import { Button } from "@heroui/react";

const HomePage: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Top Welcome & Balance Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-boxdark p-8 rounded-2xl border border-gray-100 dark:border-strokedark shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-black dark:text-white">Good Morning!</h1>
                    <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your money today.</p>
                    </div>
                <div className="flex flex-col items-end">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                        Total Balance
                    </p>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-4xl font-black text-black dark:text-white">
                            $12,450.00
                        </h2>
                        <span className="text-xl font-bold text-gray-400">
                            / 50,000,000 ៛
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <CardDataState
                    title="Monthly Income"
                    total="$4,250.00"
                    rate="12.5%"
                    levelUp
                >
                    <MoneySend className="text-primary" variant="Bold" />
                </CardDataState>

                <CardDataState
                    title="Monthly Expenses"
                    total="$1,240.00"
                    rate="4.3%"
                    levelDown
                >
                    <CardReceive className="text-danger" variant="Bold" />
                </CardDataState>

                <CardDataState
                    title="Net Savings"
                    total="$3,010.00"
                    rate="15.2%"
                    levelUp
                >
                    <WalletMoney className="text-success" variant="Bold" />
                </CardDataState>

                <CardDataState
                    title="Total Transactions"
                    total="48"
                    rate="2.4%"
                    levelUp
                >
                    <Activity className="text-warning" variant="Bold" />
                </CardDataState>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 xl:col-span-8">
                    <ChartOne />
                </div>

                <div className="col-span-12 xl:col-span-4 space-y-6">
                    <div className="bg-white dark:bg-boxdark p-6 rounded-2xl border border-gray-100 dark:border-strokedark shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="font-bold text-black dark:text-white flex items-center gap-2">
                                <ChartIcon size={20} className="text-primary" />
                                Quick Actions
                            </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                color="primary"
                                variant="flat"
                                className="font-bold py-6 rounded-xl"
                            >
                                Add Income
                            </Button>
                            <Button
                                color="danger"
                                variant="flat"
                                className="font-bold py-6 rounded-xl"
                            >
                                Add Expense
                            </Button>
                            <Button
                                color="warning"
                                variant="flat"
                                className="font-bold py-6 rounded-xl col-span-2"
                            >
                                Generate Report
                            </Button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-2xl text-white shadow-lg shadow-primary/20">
                        <h4 className="font-bold text-lg mb-2">Savings Goal</h4>
                        <p className="text-white/80 text-sm mb-4">
                            You&apos;re 75% of the way to your &quot;New Car&quot; goal. Keep
                            it up!
                        </p>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                            <div className="bg-white h-full w-3/4 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        </div>
                    </div>
                </div>

                <div className="col-span-12">
                    <TableOne />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
