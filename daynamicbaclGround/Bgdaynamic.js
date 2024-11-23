"use client";

import { usePathname } from "next/navigation";

export default function DynamicBackground({ children }) {
  const pathname = usePathname();

  // شرط برای تغییر کلاس‌ها بر اساس مسیر جاری
  const backgroundClass =
    pathname === "/home"
      ? "bg-[url('/images/homebg.png')]"
      : "bg-[url('/images/bg.png')]";

  return (
    <div className={`${backgroundClass} font-custom bg-cover bg-center h-fit`}>
      {children}
    </div>
  );
}
