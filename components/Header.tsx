"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setAnimateHeader(true);
      } else {
        setAnimateHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const links = [
    { href: isHomePage ? "#" : "/", label: "Home" },
    { href: isHomePage ? "#About" : "/#About", label: "About" },
    { href: isHomePage ? "#Explore" : "/#Explore", label: "Explore" },
    { href: "/Lineup", label: "Line up" },
  ];

  return (
    <header
      className={`w-full sticky  top-0 z-50 overflow-hidden font-medium text-lg`}
    >
      <div
        className={`w-full mx-auto relative gap-10 flex items-center justify-between lg:justify-end duration-500 xl:px-10 ease-in ${animateHeader
          ? "backdrop-blur-xl p-2    border-none"
          : "p-2  backdrop-blur-md"
          }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 ">
          <Link className="block relative overflow-hidden  font-HaloDek text-4xl tracking-wider" href="#" >JamNest</Link>
        </div>


        {/* Menu Items */}
        <nav className="hidden lg:flex justify-center gap-10 items-center   p-4 px-16  mr-auto ">
          {links.map((link, index) => (
            <Link
              key={link.label}
              className={`text-white text-shadow hover:text-secondary`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Input
            isClearable
            radius="lg"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="search for event..."
            startContent={
              <FaSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        {/* Tickets Button */}
        <div className="hidden lg:flex  gap-5 items-center">
          <Button
            href="#"
            as={Link}
            color="primary"
            variant="solid"
          >
            Sign Up
          </Button>
          <Button
            href="#"
            as={Link}
            color="primary"
            variant="solid"
          >
            Sign In
          </Button>
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />

        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-3xl lg:hidden items-center  bg-primary rounded-xl p-1"
          onClick={() => setIsOpen(true)}
        >
          <CgMenuRight />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, x: 0 }} // Slide in
            className="fixed inset-0 bg-secondary-900 flex flex-col px-10 space-y-16 z-100 justify-center"
            exit={{ x: "100%" }} // Slide out
            initial={{ opacity: 0, x: "100%" }} // Start off-screen
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <button
              className="absolute top-3 right-2 text-4xl text-white bg-primary rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <nav className="flex flex-col space-y-16   text-center ">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={` hover:text-primary`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mx-auto">
              {" "}
              <Link
                className="text-shadow"
                href="/Tickets"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                Tickets
              </Link>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
