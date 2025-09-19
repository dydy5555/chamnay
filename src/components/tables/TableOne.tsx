import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Image from "next/image";
import TotalCard from "../cards/TotalCard";

const brandData = [
  {
    logo: "/images/materail/desktop.svg",
    name: "Desktop (CPU)",
    visitors: 3.5,
    revenues: "68",
    sales: 590,
    conversion: "Desktop=37, Clone=25",
  },
  {
    logo: "/images/materail/laptop.svg",
    name: "Laptop",
    visitors: 2.2,
    revenues: "35",
    sales: 467,
    conversion: "",
  },
  {
    logo: "/images/materail/monitor.svg",
    name: "Monitor",
    visitors: 2.1,
    revenues: "90",
    sales: 420,
    conversion: "Size:17inch=3, 19inch=5, 20inch=37, 21.5inch=101",
  },
  {
    logo: "/images/materail/ups.svg",
    name: "UPS",
    visitors: 1.5,
    revenues: "80",
    sales: 389,
    conversion: "UPS: Old=63, Old-650VA=3, New-650VA=9",
  },
  {
    logo: "/images/materail/imac.svg",
    name: "iMac",
    visitors: 3.5,
    revenues: "212",
    sales: 390,
    conversion: "Size: (27-inch=2), (21.5-inch=10)",
  },
  {
    logo: "/images/materail/korean-phone.svg",
    name: "Korea-Black phone",
    visitors: 3.5,
    revenues: "88",
    sales: 390,
    conversion: "",
  },
  {
    logo: "/images/materail/Camintel-ip-phone.svg",
    name: "Camintel-ip-phone",
    visitors: 32,
    revenues: "100",
    sales: 390,
    conversion: "",
  },
];

const TableOne = () => {
  const rows = [
    {
      key: "1",
      expenses: "Tony Reichert",
      amountRiel: 25656,
      amountUS: 25656,
      remark: "Active",
    },
    {
      key: "2",
      expenses: "Zoey Lang",
      amountRiel: 1086563,
      amountUS: 25656,
      remark: "Paused",
    },
    {
      key: "3",
      expenses: "Jane Fisher",
      amountRiel: 1232435,
      amountUS: 25656,
      remark: "Active",
    },
    {
      key: "4",
      expenses: "William Howard",
      amountRiel: 546423,
      amountUS: 25656,
      remark: "Vacation",
    },
  ];

  const columns = [
    {
      key: "key",
      label: "",
    },
    {
      key: "expenses",
      label: "EXPENSES",
    },
    {
      key: "amountUS",
      label: "AMOUNT USA",
    },
    {
      key: "amountRiel",
      label: "AMOUNT RIEL",
    },
    {
      key: "remark",
      label: "REMARK",
    },
  ];
  const formatUSD = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);

  const formatKHR = (value: number) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
    }).format(value) + "៛";

  return (
    <div>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Recently
      </h4>
      <Table
        aria-label="Example table with dynamic content"
        classNames={{
          base: "border border-gray-200 rounded-2xl shadow-sm overflow-hidden", // outer frame
          table: "rounded-2xl overflow-hidden", // ensures rounding applies
          th: "border-b border-gray-200 bg-gray-50 text-gray-700 font-medium px-4 py-2 text-left", // header style
          td: "border-b border-gray-100 px-4 py-2 text-gray-600", // body cells
          tr: "hover:bg-gray-50 transition-colors", // row hover effect
        }}
        bottomContent={
          <div className="flex justify-center w-full p-4">
            <TotalCard />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item: any) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {" "}
                  {columnKey === "amountUS"
                    ? formatUSD(item[columnKey])
                    : columnKey === "amountRiel"
                    ? formatKHR(item[columnKey])
                    : item[columnKey]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableOne;
