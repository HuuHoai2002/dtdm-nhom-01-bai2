import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ĐTĐM - Nhóm 1 | Hệ thống quản lý văn bản",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
      </div>
      <div className="p-4 lg:ml-64 mt-[57px] lg:mt-[81px]">{children}</div>
    </div>
  );
}
