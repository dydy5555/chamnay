"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Select,
    SelectItem,
    Tabs,
    Tab,
    DatePicker,
} from "@heroui/react";
import {
    MoneySend,
    CardReceive,
    WalletMoney,
    Note,
    ArrowDown,
    ArrowUp,
} from "iconsax-react";

interface IncomeExpenseModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export default function IncomeExpenseModal({
    isOpen,
    onOpenChange,
}: IncomeExpenseModalProps) {
    const [selectedTab, setSelectedTab] = React.useState("income");

    const incomeItems = [
        { label: "Monthly Salary", value: "salary" },
        { label: "Bonus / Commission", value: "bonus" },
        { label: "Freelance / Side Job", value: "freelance" },
        { label: "Business Revenue", value: "business" },
        { label: "Investment Dividend", value: "investment" },
        { label: "Rental Income", value: "rental" },
        { label: "Gift / Allowance", value: "gift" },
        { label: "Other Income", value: "other" },
    ];

    const expenseItems = [
        { label: "House Rent", value: "rent" },
        { label: "Electricity Bill", value: "electricity" },
        { label: "Water Bill", value: "water" },
        { label: "Internet / Phone", value: "internet" },
        { label: "Groceries / Market", value: "groceries" },
        { label: "Dining Out / Coffee", value: "dining" },
        { label: "Fuel / Transport", value: "transport" },
        { label: "Personal Care", value: "personal" },
        { label: "Gym / Health", value: "health" },
        { label: "Entertainment", value: "entertainment" },
        { label: "Shopping / Clothes", value: "shopping" },
        { label: "Other Expense", value: "other" },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            placement="center"
            size="md"
            className="dark text-foreground"
            classNames={{
                base: "bg-[#161b22] border border-white/5 p-4",
                header: "border-b-0",
                footer: "border-t-0",
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h3 className="text-2xl font-black text-white leading-tight">
                                Record Transaction
                            </h3>
                            <p className="text-xs font-bold text-white/30 uppercase tracking-widest">
                                Finance Hub
                            </p>
                        </ModalHeader>
                        <ModalBody className="py-6">
                            <Tabs
                                fullWidth
                                size="lg"
                                aria-label="Transaction Types"
                                selectedKey={selectedTab}
                                onSelectionChange={(key) =>
                                    setSelectedTab(key as string)
                                }
                                color={
                                    selectedTab === "income"
                                        ? "success"
                                        : "danger"
                                }
                                variant="solid"
                                classNames={{
                                    tabList: "bg-white/5 p-1 rounded-2xl",
                                    cursor: "rounded-xl shadow-lg",
                                    tab: "h-12",
                                    tabContent:
                                        "font-bold text-xs uppercase tracking-widest",
                                }}
                            >
                                <Tab
                                    key="income"
                                    title={
                                        <div className="flex items-center space-x-2">
                                            <ArrowDown
                                                size={20}
                                                variant="Bold"
                                                className="rotate-45"
                                            />
                                            <span>Income</span>
                                        </div>
                                    }
                                />
                                <Tab
                                    key="expense"
                                    title={
                                        <div className="flex items-center space-x-2">
                                            <ArrowUp
                                                size={20}
                                                variant="Bold"
                                                className="rotate-45"
                                            />
                                            <span>Expense</span>
                                        </div>
                                    }
                                />
                            </Tabs>

                            <div className="mt-8 space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                        {selectedTab === "income"
                                            ? "Income Source"
                                            : "Expense Item"}
                                    </label>
                                    <Select
                                        placeholder={
                                            selectedTab === "income"
                                                ? "Select source"
                                                : "Select item"
                                        }
                                        variant="bordered"
                                        startContent={
                                            <Note
                                                size={18}
                                                className="text-white/20"
                                            />
                                        }
                                        className="w-full"
                                        classNames={{
                                            trigger:
                                                "bg-white/5 border-white/5 min-h-12 rounded-2xl",
                                            value: "text-white font-bold text-sm",
                                            popoverContent:
                                                "bg-[#1c2128] border border-white/5 text-white",
                                        }}
                                    >
                                        {(selectedTab === "income"
                                            ? incomeItems
                                            : expenseItems
                                        ).map((item) => (
                                            <SelectItem
                                                key={item.value}
                                                className="text-white hover:bg-white/5"
                                            >
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                            Amount ($)
                                        </label>
                                        <Input
                                            type="number"
                                            placeholder="0.00"
                                            variant="bordered"
                                            startContent={
                                                <span className="text-white/20 text-small font-bold">
                                                    $
                                                </span>
                                            }
                                            classNames={{
                                                inputWrapper:
                                                    "bg-white/5 border-white/5 h-12 rounded-2xl",
                                                input: "text-white font-bold",
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                            Amount (Riel)
                                        </label>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            variant="bordered"
                                            endContent={
                                                <span className="text-white/20 text-small font-bold">
                                                    ៛
                                                </span>
                                            }
                                            classNames={{
                                                inputWrapper:
                                                    "bg-white/5 border-white/5 h-12 rounded-2xl",
                                                input: "text-white font-bold",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                        Date
                                    </label>
                                    <DatePicker
                                        variant="bordered"
                                        showMonthAndYearPickers
                                        className="w-full"
                                        classNames={{
                                            base: "bg-white/5 border-white/5 rounded-2xl",
                                            innerWrapper: "h-12 px-4",
                                        }}
                                    />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter className="gap-4">
                            <Button
                                variant="light"
                                onPress={onClose}
                                className="font-bold text-white/30 hover:text-white uppercase text-xs tracking-widest"
                            >
                                Cancel
                            </Button>
                            <Button
                                color={
                                    selectedTab === "income"
                                        ? "success"
                                        : "danger"
                                }
                                onPress={onClose}
                                size="lg"
                                className="font-black text-white shadow-xl shadow-opacity-20 flex-grow rounded-2xl uppercase text-xs tracking-widest"
                                startContent={
                                    <WalletMoney
                                        color={
                                            selectedTab === "income"
                                                ? "#ffffff"
                                                : "#ffffff"
                                        }
                                        size={20}
                                        variant="Bold"
                                    />
                                }
                            >
                                Save Record
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
