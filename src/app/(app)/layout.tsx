import AppLayout from "@/components/MainLayout";

export default function AppLayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <AppLayout>{children}</AppLayout>;
}
