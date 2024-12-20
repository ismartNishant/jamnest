"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Button } from "@nextui-org/button";
import SubscribeForm from "./Forms/SubscribeForm";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const links = [
    { href: "/", label: "Home" },
    { href: "/AboutUs", label: "About Us" },
    { href: "/ContactUs", label: "Contact Us" },
    { href: isHomePage ? "#Parties" : "/#Parties", label: "Parties" },
  ];
  const supportLinks = [
    { href: "/TermsAndConditions", label: "Terms & Conditions" },
    { href: "/PravacyPolicy", label: "Privacy Policy" },
    { href: "/HelpAndSupport", label: "Help" },
    { href: "/Refunds", label: "Refunds" },
  ];


  return (
    <footer className="w-full relative overflow-hidden  backdrop-blur-xl ">
      <div
        className=" bg-blend-overlay w-full h-0.5 absolute left-0 top-0 right-0 "
        style={{
          backgroundImage:
            "linear-gradient(80deg, rgba(221, 221, 221, 0), rgba(255, 255, 255, 0.15) 52%, rgba(255, 255, 255, 0))",
        }}
      />
      <div className="mx-auto px-4 md:px-24 bg-primary-900/5">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-8 py-5 lg:py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8 ">
          <div className="col-span-full  lg:col-span-3 mb-0">
            <Fade>
              <Link
                className="block relative overflow-hidden  font-HaloDek text-4xl lg:text-6xl tracking-wider"
                href="/"
              >
                JamNest
              </Link>
              <Fade>
                <p
                  className="tracking-wider text-sm lg:text-base
                  lg:max-w-xs text-left text-gray-3"
                >
                  Host your own unforgettable party or join others in the
                  ultimate social experience. Find, join, or create events that
                  bring people together for moments worth celebrating!
                </p>
              </Fade>
            </Fade>
          </div>
          <div className="lg:mx-auto text-left">
            <h4 className="text-base md:text-lg font-semibold tracking-wide mb-4 uppercase ">
              JamNest
            </h4>

            <ul className="text-sm md:text-base flex flex-col gap-3.5  transition-all duration-500 font-medium">
              {links.map((link, index) => (
                <li
                  key={link.href}
                  className="hover:translate-x-1 transition-transform duration-300 font-normal"
                >
                  <Fade delay={index * 200}>
                    <Link
                      className={`hover:text-primary relative  no-underline after:rounded-md after:absolute after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in group duration-300 ease-in transition-all`}
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                    >
                      {link.label}
                    </Link>
                  </Fade>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-base md:text-lg font-semibold mb-4 tracking-wide uppercase  ">
              Support
            </h4>
            <ul className="text-sm md:text-base flex flex-col gap-3.5 font-normal  transition-all duration-500 ">
              {supportLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="hover:translate-x-1 transition-transform duration-300 font-normal"
                >
                  <Fade delay={index * 200}>
                    <Link
                      className={`hover:text-primary relative  no-underline after:rounded-md after:absolute after:h-0.5 after:left-0 after:-bottom-1 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in group duration-300 ease-in transition-all`}
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                    >
                      {link.label}
                    </Link>
                  </Fade>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto w-full col-span-2 text-center lg:text-left ">
            <h4 className="text-base md:text-lg font-semibold mb-2 lg:mb-4 tracking-wide uppercase">
              Subscribe to our newsletter
            </h4>
            <Zoom>
              <SubscribeForm />
            </Zoom>
            <div className="flex items-center gap-4 pt-4">
              <Zoom>
                <div className="">
                  <Button
                    isIconOnly
                    className="hover:scale-110"
                    color="primary"
                    href="#"
                    radius="full"
                    variant="shadow"
                  >
                    <FaSquareFacebook className="text-2xl" />
                  </Button>
                </div>
              </Zoom>
              <Zoom>
                <div className="">
                  <Button
                    isIconOnly
                    className="hover:scale-110"
                    color="primary"
                    href="#"
                    radius="full"
                    variant="shadow"
                  >
                    <FaInstagram className="text-2xl" />
                  </Button>
                </div>
              </Zoom>
              <Zoom>
                <div className="">
                  <Button
                    isIconOnly
                    className="hover:scale-110"
                    color="primary"
                    href="#"
                    radius="full"
                    variant="shadow"
                  >
                    <FaXTwitter className="text-2xl" />
                  </Button>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        <div className="py-4 relative">
          <Slide>
            <p className="text-sm lg:text-base uppercase text-gray-4 text-center">
              © 2024 | All rights reserved | Genjee Technologies Private
              Limited
            </p>
          </Slide>

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
