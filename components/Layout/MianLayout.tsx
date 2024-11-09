"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import ScrollToTopWithProgress from "../Common/ScrollToTop";

import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setLoading(false), 500); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  // Specify routes that should not display Header and Footer
  const hideHeaderFooter = ["/login", "/register", "/forgot-password"].includes(
    pathname,
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hideHeaderFooter && <ScrollToTopWithProgress />}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
