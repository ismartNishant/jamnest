"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { FiLogOut } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
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
    { href: "/", label: "Home" },
    { href: "/AboutUs", label: "About" },
    { href: "/ContactUs", label: "Contact Us" },
    { href: "/HelpAndSupport", label: "Help" },
  ];

  return (
    <header className={`w-full sticky  top-0 z-50 overflow-hidden text-lg`}>
      <div
        className={`w-full mx-auto relative gap-10 flex items-center justify-between p-2 lg:p-3  duration-500 xl:px-10 ease-in ${animateHeader
          ? "backdrop-blur-xl   bg-white/5   border-none"
          : " bg-white/10 backdrop-blur-md"
          }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 ">
          <Link
            className="block relative overflow-hidden  font-HaloDek text-4xl tracking-wider"
            href="#"
          >
            JamNest
          </Link>
        </div>

        <div className="hidden lg:block">
          <Input
            isClearable
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
            radius="lg"
            startContent={
              <FaSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        {/* Tickets Button */}
        <div className="flex  gap-5 items-center  uppercase ">
          <Button
            as={Link}
            className="font-medium shadow-inner  shadow-primary hidden lg:flex tracking-wide text-lg hover:bg-primary hover:text-white"
            color="primary"
            href="/register"
            radius="full"
            variant="shadow"
          >
            Sign Up
          </Button>
          <Dropdown  >
            <DropdownTrigger>
              <Avatar  as="button" src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions" color="primary" variant="bordered">
              <DropdownItem href="/profile" key="profile" startContent={<LuUser className="text-lg " />}>Profile</DropdownItem>
              <DropdownItem href="/HelpAndSupport" key="help" startContent={<FaBell className="text-lg " />}>Notification</DropdownItem>
              <DropdownItem showDivider href="/HelpAndSupport" className="pb-3 " key="help" startContent={<IoChatbubbleEllipsesOutline className="text-lg " />}>Help & Support</DropdownItem>
              <DropdownItem href="#" key="copy" startContent={<FiLogOut className="text-lg" />} >Logout</DropdownItem>

            </DropdownMenu>
          </Dropdown>
          <button
            className="text-3xl lg:hidden items-center  bg-primary rounded-xl p-1"
            onClick={() => setIsOpen(true)}
          >
            <CgMenuRight />
          </button>
        </div>



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
