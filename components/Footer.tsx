"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuClock, LuMail } from "react-icons/lu";
import { GrPhone } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();
  // Check if it's the home page
  const isHomePage = pathname === "/";

  const links = [
    { href: "/", label: "Home" },
    { href: "/AboutUs", label: "About Us" },
    { href: "/ContactUs", label: "Contact Us" },
  ];

  return (
    <footer className="w-full relative overflow-hidden  backdrop-blur-xl text-accent-foreground ">
      <div className="mx-auto px-4 md:px-16 bg-white/5 backdrop-blur-lg">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8 ">
          <div className="col-span-full  lg:col-span-3 mb-0">
            <Link
              className="block relative overflow-hidden  font-HaloDek text-6xl tracking-wider"
              href="#"
            >
              JamNest
            </Link>

            <p className="py-4 text-base text-acent lg:max-w-xs text-left">
              At Tantrawave, we fuse technology and creativity to deliver smart,
              efficient solutions for your success.
            </p>


          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-base md:text-lg font-medium tracking-wide mb-4 uppercase text-accent">
              JamNest
            </h4>

            <ul className="text-sm md:text-base flex flex-col gap-3.5 text-acent transition-all duration-500 font-medium">
              {links.map((link, index) => (
                <li
                  key={link.href}
                  className="hover:translate-x-1 transition-transform duration-300"
                >
                  <Link
                    className={`hover:text-primary relative  no-underline after:rounded-md after:absolute after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary ${activeLink === link.href
                      ? "text-primary after:w-full"
                      : " after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in group duration-300 ease-in transition-all"
                      }`}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-base md:text-lg font-medium mb-4 tracking-wide uppercase text-accent">
              Support
            </h4>

            <ul className="text-sm md:text-base flex flex-col gap-3.5 text-acent transition-all duration-500 font-medium">
              <li className="hover:translate-x-1 transition-transform link-hover">
                <Link href="#faqs">FAQs</Link>
              </li>

              <li className="hover:translate-x-1 transition-transform link-hover">
                <Link href="/PravacyPolicy">Privacy Policy</Link>
              </li>

              <li className="hover:translate-x-1 transition-transform link-hover">
                <Link href="/TermsAndConditions">Terms &amp; Conditions</Link>
              </li>

              <li className="hover:translate-x-1 transition-transform link-hover">
                <Link href="/HelpAndSupport">Help</Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left col-span-2 md:px-3 ">
            <h4 className="text-base md:text-lg  font-medium mb-4 tracking-wide uppercase text-accent">
              Contact US
            </h4>

            <div className="text-sm md:text-base flex flex-col gap-3">
              <h3>
                Balewadi High St, near Kapil Salon, Baner, Pune, Maharashtra
                411045
              </h3>

              <div className="flex items-center gap-2 ">
                <LuClock className="text-2xl" />
                <div className="">
                  <h1 className="text-base font-medium">Opening Hours:</h1>
                  <p className="font-light">Mon - Sat: 10.00 AM - 7.00 PM </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <GrPhone className="text-2xl" />
                <div className="">
                  <h1 className="text-base font-medium">Phone Call:</h1>
                  <p className="font-light">+91 9890239360 </p>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <LuMail className="text-2xl" />
                <div className="">
                  <p className="font-light">hello@jamnest.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 relative">
          <div className="flex  justify-between items-center">
            <div className="text-base uppercase text-gray-400 ">
              © 2024 | All rights reserved | Genjee Technologies Private
              Limited
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 bg-primary rounded-full hover:scale-105"><FaSquareFacebook  className="text-3xl"/></Link>
              <Link href="#" className="p-2 bg-primary rounded-full hover:scale-105"><FaInstagram  className="text-3xl"/></Link>
             
            </div>
          </div>

          <div
            className=" bg-blend-overlay w-full h-0.5 absolute left-0 top-0 right-0 "
            style={{
              backgroundImage:
                "linear-gradient(80deg, rgba(221, 221, 221, 0), rgba(255, 255, 255, 0.25) 52%, rgba(255, 255, 255, 0))",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
