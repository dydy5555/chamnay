"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  User,
} from "@heroui/react";

const TableOne = () => {
  const columns = [
    { name: "EXPENSE", uid: "expense" },
    { name: "CATEGORY", uid: "category" },
    { name: "AMOUNT ($)", uid: "amountUsd" },
    { name: "AMOUNT (៛)", uid: "amountRiel" },
    { name: "DATE", uid: "date" },
  ];

  const transactions = [
    {
      id: 1,
      name: "Starbucks Coffee",
      category: "Food & Drink",
      amountUsd: 4.50,
      amountRiel: 18000,
      date: "Oct 24, 2023",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Grab Ride",
      category: "Transport",
      amountUsd: 2.25,
      amountRiel: 9000,
      date: "Oct 24, 2023",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: 3,
      name: "Lucky Supermarket",
      category: "Shopping",
      amountUsd: 15.80,
      amountRiel: 63200,
      date: "Oct 23, 2023",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    {
      id: 4,
      name: "Electricity Bill",
      category: "Utilities",
      amountUsd: 45.00,
      amountRiel: 180000,
      date: "Oct 20, 2023",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    },
  ];

  interface Transaction {
    id: number;
    name: string;
    category: string;
    amountUsd: number;
    amountRiel: number;
    date: string;
    avatar: string;
  }

  const renderCell = React.useCallback((transaction: Transaction, columnKey: React.Key) => {
    const cellValue = transaction[columnKey as keyof Transaction];

    switch (columnKey) {
      case "expense":
        return (
          <User
            avatarProps={{ radius: "lg", src: transaction.avatar }}
            description={transaction.date}
            name={cellValue}
          >
            {transaction.name}
          </User>
        );
      case "category":
        return (
          <Chip className="capitalize" color="primary" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "amountUsd":
        return (
          <span className="font-semibold text-black dark:text-white">
            ${(cellValue as number).toFixed(2)}
          </span>
        );
      case "amountRiel":
        return (
          <span className="text-gray-500">
            {(cellValue as number).toLocaleString()} ៛
          </span>
        );
      case "date":
        return <span className="text-sm">{cellValue}</span>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-strokedark dark:bg-boxdark transition-colors duration-300">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
          Recent Transactions
        </h4>
      </div>
      
      <Table 
        aria-label="Recent transactions table"
        classNames={{
          base: "max-h-[520px] overflow-scroll",
          table: "min-w-[600px]",
          th: "bg-transparent text-default-500 border-b border-divider",
        }}
        removeWrapper
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "amountUsd" ? "end" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={transactions}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableOne;
