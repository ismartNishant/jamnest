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
import { FaBell } from "react-icons/fa6";
import { LuSearch, LuUser } from "react-icons/lu";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { FiLogOut } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    { href: "/AboutUs", label: "About Us" },
    { href: "/ContactUs", label: "Contact Us" },
    { href: "/HelpAndSupport", label: "Help" },
  ];

  const cities = [
    { key: "mumbai", label: "Mumbai" },
    { key: "pune", label: "Pune" },
    { key: "delhi", label: "Delhi" },
    { key: "bangalore", label: "Bangalore" },
  ];

  return (
    <header className={`w-full sticky  top-0 z-50 overflow-hidden text-lg`}>
      <div
        className={`w-full mx-auto relative gap-5 flex items-center justify-between p-2 lg:p-3 px-2 duration-500 xl:px-10 ease-in ${
          animateHeader
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
        {/* Menu Items */}
        <nav className="hidden lg:flex justify-center gap-10 items-center   p-4 px-16  mr-auto ">
          {links.map((link) => (
            <Link
              key={link.label}
              className={`text-white text-shadow hover:text-primary`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Input
            isClearable
            classNames={{
              input: [
                "bg-transparent",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60 text-lg tracking-wide font-normal",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "dark:bg-primary/5",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "group-data-[focus=true]:bg-primary/50",
                "dark:group-data-[focus=true]:bg-primary/50",
                "!cursor-text",
              ],
            }}
            placeholder="Search for event..."
            radius="full"
            size="lg"
            startContent={
              <LuSearch className="text-black/50 mb-0.5 text-xl dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Select>
            <SelectTrigger className="border-0 flex items-center justify-between gap-2 text-lg uppercase font-semibold rounded-full focus:ring-0 cursor-pointer bg-primary hover:scale-105 duration-300 ease-in-out   w-auto">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-0 cursor-pointer  ">
              <SelectGroup className="  items-center p-2">
                {cities.map((city) => (
                  <SelectItem
                    key={city.key}
                    className="hover:bg-primary cursor-pointer w-auto uppercase "
                    value={city.key}
                  >
                    {city.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Tickets Button */}
        <div className="flex  gap-5 items-center  uppercase ">
          <Button
            as={Link}
            className="font-medium px-8 hover:scale-105  hidden lg:flex tracking-wide text-lg "
            color="primary"
            href="/login"
            radius="full"
            variant="shadow"
          >
            Sign In
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                as="button"
                className="w-10 h-10 lg:w-14 lg:h-14"
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Link Actions"
              color="primary"
              variant="bordered"
            >
              <DropdownItem
                key="profile"
                href="/profile"
                startContent={<LuUser className="text-lg " />}
              >
                Profile
              </DropdownItem>
              <DropdownItem
                key="notification"
                href="/HelpAndSupport"
                startContent={<FaBell className="text-lg " />}
              >
                Notification
              </DropdownItem>
              <DropdownItem
                key="help"
                showDivider
                className="pb-3 "
                href="/HelpAndSupport"
                startContent={
                  <IoChatbubbleEllipsesOutline className="text-lg " />
                }
              >
                Help & Support
              </DropdownItem>
              <DropdownItem
                key="logout"
                href="#"
                startContent={<FiLogOut className="text-lg" />}
              >
                Logout
              </DropdownItem>
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
                  className={` hover:text-primary text-2xl`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button
              as={Link}
              className="font-medium  uppercase hover:scale-105  lg:hidden flex tracking-wide text-xl "
              color="primary"
              href="/login"
              radius="full"
              variant="shadow"
            >
              Sign In
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
