"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const links = [
    // { href: isHomePage ? "#Contact" : "/#Contact", label: "contact Us" },
    { href: "/FAQ", label: "FAQ" },
    { href: isHomePage ? "#Explore" : "/#Explore", label: "Explore" },
    { href: isHomePage ? "#Sponsors" : "/#Sponsors", label: "Sponsors" },
  ];

  return (
    <footer className={``}>
      <div className=" px-5 pt-10 pb-5 ">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
          <div className="text-center  uppercase tracking-wide flex flex-col justify-center  gap-5 lg:gap-10 lg:flex-row items-center lg:justify-between w-full text-xs lg:text-base">
            <p className="hover:text-primary inline-flex items-start lg:items-center">
              <FaRegCopyright className="mr-1.5 text-4xl lg:text-xl" /> 2024 |
              All rights reserved | Genjee Technologies Private Limited
            </p>
            <div className="inline-flex gap-5 ">
              <Link className="hover:text-primary" href="/Privacy">
                Privacy{" "}
              </Link>
              <p>|</p>
              <Link className="hover:text-primary" href="/Terms">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
