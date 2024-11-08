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
// import { Select, SelectItem } from "@nextui-org/select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
    { key: "delhi", label: "Delhi" },
    { key: "bangalore", label: "Bangalore" },
    { key: "hyderabad", label: "Hyderabad" },
    { key: "ahmedabad", label: "Ahmedabad" },
    { key: "chennai", label: "Chennai" },
    { key: "kolkata", label: "Kolkata" },
    { key: "pune", label: "Pune" },
    { key: "jaipur", label: "Jaipur" },
    { key: "surat", label: "Surat" }
  ];

  return (
    <header className={`w-full sticky  top-0 z-50 overflow-hidden text-lg`}>
      <div
        className={`w-full mx-auto relative gap-5 flex items-center justify-between p-2 lg:p-3 px-2 duration-500 xl:px-10 ease-in ${animateHeader
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
          {links.map((link, index) => (
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
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60 text-lg",
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
          <Select >
            <SelectTrigger className="border-0 text-base cursor-pointer outline-none active:outline-none hover:bg-primary focus:outline-none w-44">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-0 cursor-pointer ">
              <SelectGroup>
                <SelectLabel>Cities</SelectLabel>
                {cities.map((city) => (
                  <SelectItem key={city.key} className="hover:bg-primary cursor-pointer " value={city.key}>
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
            className="font-medium px-10  border-primary bg-transparent text-primary-50  hover:scale-105  bg-gradient-to-tr from-primary to-secondary hidden lg:flex tracking-wide text-lg "
            href="/login"
            radius="full"
          >
            Sign In
          </Button>
          <Dropdown  >
            <DropdownTrigger>
              <Avatar as="button" src="https://i.pravatar.cc/150?u=a04258114e29026302d" className="w-10 h-10 lg:w-14 lg:h-14" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions" color="primary" variant="bordered">
              <DropdownItem href="/profile" key="profile" startContent={<LuUser className="text-lg " />}>Profile</DropdownItem>
              <DropdownItem href="/HelpAndSupport" key="notification" startContent={<FaBell className="text-lg " />}>Notification</DropdownItem>
              <DropdownItem showDivider href="/HelpAndSupport" className="pb-3 " key="help" startContent={<IoChatbubbleEllipsesOutline className="text-lg " />}>Help & Support</DropdownItem>
              <DropdownItem href="#" key="logout" startContent={<FiLogOut className="text-lg" />} >Logout</DropdownItem>

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
              className="font-medium  uppercase border-primary bg-transparent text-primary-50  hover:scale-105  bg-gradient-to-tr from-primary to-secondary lg:hidden flex tracking-wide text-xl "
              href="/login"
              radius="full"
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
