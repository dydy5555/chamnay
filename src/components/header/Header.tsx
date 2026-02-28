"use client";
import React from "react";
import {
    SearchNormal1,
    Notification,
    Setting2,
    Wallet,
    Add,
    HambergerMenu,
    Moon,
    Sun1,
} from "iconsax-react";
import {
    Input,
    Button,
    Badge,
    Avatar,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    useDisclosure,
} from "@heroui/react";
import { useTheme } from "next-themes";
import IncomeExpenseModal from "../modals/IncomeExpenseModal";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-40 flex w-full bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 py-3 transition-colors duration-300">
            <div className="flex flex-grow items-center justify-between px-4 md:px-6 2xl:px-11">
                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-2 lg:hidden">
                    <Button
                        isIconOnly
                        variant="flat"
                        size="sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-white/10"
                    >
                        <HambergerMenu
                            size={20}
                            className="text-gray-600 dark:text-white"
                        />
                    </Button>
                </div>

                {/* Search Bar */}
                <div className="hidden sm:block flex-1 max-w-md">
                    <Input
                        classNames={{
                            base: "max-w-full h-10",
                            mainWrapper: "h-full",
                            input: "text-small text-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30",
                            inputWrapper:
                                "h-full font-normal bg-gray-100 dark:bg-[#161b22] border-gray-200 dark:border-white/5 data-[hover=true]:bg-gray-200 dark:data-[hover=true]:bg-[#1c2128] group-data-[focus=true]:bg-gray-200 dark:group-data-[focus=true]:bg-[#1c2128]",
                        }}
                        placeholder="Search records..."
                        size="sm"
                        startContent={
                            <SearchNormal1
                                size={18}
                                className="text-gray-400 dark:text-white/30"
                            />
                        }
                        type="search"
                        variant="bordered"
                    />
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Theme Toggle */}
                    {/* {mounted && ( */}
                    <Button
                        isIconOnly
                        variant="light"
                        radius="full"
                        size="sm"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        {theme === "dark" ? (
                            <Sun1
                                color="#f31260"
                                size={20}
                                className="text-white/40 hover:text-warning transition-colors"
                            />
                        ) : (
                            <Moon
                                color="#f31260"
                                size={20}
                                className="text-gray-400 hover:text-primary transition-colors"
                            />
                        )}
                    </Button>
                    {/* )} */}

                    {/* Quick Add Button */}
                    <Button
                        onPress={onOpen}
                        color="danger"
                        size="sm"
                        radius="full"
                        className="font-bold shadow-lg shadow-danger/20"
                        startContent={
                            <Add color="#ffffff" size={18} variant="Bold" />
                        }
                    >
                        Record
                    </Button>

                    {/* Balance Preview (Desktop) */}
                    <div className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-gray-100 dark:bg-[#161b22] rounded-full border border-gray-200 dark:border-white/10">
                        <div className="w-8 h-8 flex items-center justify-center bg-success/20 text-success rounded-full">
                            <Wallet size={16} color="#f31260" variant="Bold" />
                        </div>
                        <div>
                            <p className="text-[9px] font-bold text-gray-400 dark:text-white/40 uppercase leading-none">
                                Balance
                            </p>
                            <p className="text-sm font-bold text-gray-700 dark:text-white leading-tight">
                                $4,250
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Badge content="3" color="danger" size="sm">
                            <Button
                                isIconOnly
                                variant="light"
                                radius="full"
                                size="sm"
                            >
                                <Notification
                                    size={20}
                                    color="#f31260"
                                    className="text-gray-400 dark:text-white/40"
                                />
                            </Button>
                        </Badge>

                        <Button
                            isIconOnly
                            variant="light"
                            radius="full"
                            size="sm"
                            className="hidden sm:flex"
                        >
                            <Setting2
                                size={20}
                                color="#f31260"
                                className="text-gray-400 dark:text-white/40"
                            />
                        </Button>
                    </div>

                    <Dropdown
                        placement="bottom-end"
                        className="dark:bg-[#161b22] border border-gray-200 dark:border-white/10"
                    >
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="primary"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Profile Actions"
                            variant="flat"
                        >
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold text-gray-400 dark:text-white/40">
                                    Signed in as
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-white">
                                    jason@example.com
                                </p>
                            </DropdownItem>
                            <DropdownItem key="settings">
                                My Settings
                            </DropdownItem>
                            <DropdownItem key="analytics">
                                Analytics
                            </DropdownItem>
                            <DropdownItem key="help_feedback">
                                Help & Feedback
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <IncomeExpenseModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </header>
    );
};

export default Header;
