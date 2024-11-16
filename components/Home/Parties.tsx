"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@nextui-org/card";
import Autoplay from "embla-carousel-autoplay";
import { GrLocation } from "react-icons/gr";
import { IoTicket } from "react-icons/io5";
import { LuCalendarRange } from "react-icons/lu";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { HeadingOne } from "../Common/HeadingOne";

const Parties = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const Parties = [
    {
      title: "Friends, Beats & Good Times!",
      image: "/images/parties/p1.jpg",
      hostedBy: "DJ Cool Vibes",
      location: "Downtown Loft, NYC",
      date: "2024-11-15",
      price: "899",
      partyType: "House Party",
    },
    {
      title: "The House Party You’ll Never Forget!",
      image: "/images/parties/p4.jpg",
      hostedBy: "The Party Squad",
      location: "Beach House, Malibu",
      date: "2024-12-01",
      price: "1499",
      partyType: "Beach Party", 
    },
    {
      title: "Get Your Groove On!",
      image: "/images/parties/p3.jpg",
      hostedBy: "DJ Spin",
      location: "Rooftop Lounge, LA",
      date: "2024-11-20",
      price: "799",
      partyType: "Rooftop Party",
    },
    {
      title: "Friends, Beats & Good Times!",
      image: "/images/parties/p2.jpg",
      hostedBy: "Club Vibes",
      location: "Warehouse, Brooklyn",
      date: "2024-11-25",
      price: "1299",
      partyType: "House Party",
    },
  ];

  return (
    <section
      className="w-full md:px-8 xl:px-24 py-12 xl:pt-24 px-4"
      id="Parties"
    >
      <div className="flex items-center justify-between w-full  mb-5 lg:mb-10">
        <HeadingOne className="text-3xl lg:text-6xl  font-bold uppercase">
          Parties
        </HeadingOne>
        <Link
          className="flex justify-center gap-2 items-center bg-primary/15  shadow-xl text-lg  backdrop-blur-md lg:font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 lg:px-4 py-1 lg:py-2 overflow-hidden border-2 rounded-full group"
          href="/all-parties"
        >
          All Parties
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-primary group-hover:border-none p-1 lg:p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary group-hover:fill-primary"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            />
          </svg>
        </Link>
      </div>

      <div>
        <Carousel
          className="w-full mx-auto"
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Parties.map((party, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 cursor-pointer group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-0 text-white">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <div className="absolute top-0 right-0 bg-customGreen font-semibold text-black px-4 py-1 z-10 rounded-bl-xl">
                      {party.partyType}
                    </div>
                    <Image
                      alt={party.title}
                      className="rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110" // Added scaling on hover
                      layout="fill"
                      objectFit="cover"
                      src={party.image}
                    />
                    <div className="absolute  rounded-lg w-full h-auto bottom-0 left-0 bg-secondary/50 hover:backdrop-blur-sm  bg-opacity-80 text-white  ">
                      <div className="bg-black/70 p-3 w-full h-full rounded-lg flex flex-col gap-1 lg:gap-2">
                        <h1 className="text-2xl lg:text-3xl font-semibold">
                          {party.title.length > 28
                            ? `${party.title.substring(0, 28)}...`
                            : party.title}
                        </h1>
                        <h3 className="text-base lg:text-lg">
                          Hosted By{" "}
                          <span className="underline font-semibold tracking-wider">
                            {party.hostedBy}{" "}
                          </span>
                        </h3>
                        <div className="flex items-center gap-4 text-base lg:text-lg">
                          <div className="flex gap-1  items-center ">
                            <LuCalendarRange />
                            {party.date}
                          </div>
                          <div className="flex gap-1 items-center ">
                            <GrLocation />
                            {party.location.length > 26
                              ? `${party.location.substring(0, 26)}...`
                              : party.location}
                          </div>
                        </div>
                        <div className="font-bold text-xl lg:text-2xl flex items-center w-auto ml-auto gap-2 p-1 px-3  rounded-md  bg-primary">
                          <IoTicket /> <span>₹ {party.price} </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden xl:block ">
            <CarouselPrevious
              className="hover:scale-110 duration-200 ease-in-out "
              variant="secondary"
            />
          </div>
          <div className="hidden xl:block ">
            <CarouselNext
              className="hover:scale-110 duration-200 ease-in-out "
              variant="secondary"
            />
          </div>
          <div className="block xl:hidden ">
            <CarouselDots className="mx-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Parties;
