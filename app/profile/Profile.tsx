"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { GiPartyPopper } from "react-icons/gi";

import UserProfileCard from "@/components/Common/Profile/UserProfileCard";
import TabOne from "@/components/Common/Tabs/TabOne";
import { PartiesData } from "@/components/Data/PartiesData";

import { Chip } from "@nextui-org/chip";
import { CarouselItem } from "@/components/ui/carousel";

import SliderOne from "@/components/Common/Slider/SliderOne";
import { Card } from "@nextui-org/card";
import Link from "next/link";
import Image from "next/image";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("myEvents");

  const MyeventTabsData = [
    {
      key: "upcoming",
      title: "Upcoming",
      content: (
        <div className="mx-auto">
          <SliderOne CarouselcontentClassName="mt-20" >
            {PartiesData.map((party, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Link href={`/Party/${party.partyId}`}>
                  <Card className="relative p-2 h-full space-y-2 bg-secondary/10 hover:scale-95 duration-300 ease-in-out border-2 border-white/15">
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        fill
                        alt="party-img"
                        className="w-full h-full object-cover rounded-lg"
                        src={party.image}
                      />
                    </div>
                    <h1 className="text-xl font-medium">
                      {party.title.length > 40
                        ? `${party.title.slice(0, 40)}...`
                        : party.title}
                    </h1>
                    <Chip className="absolute right-3 top-1" color="primary">{party.partyType}</Chip>
                    <div className=" text-sm space-y-2">
                      <div className="flex items-center gap-2 text-base">
                        <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-500">
                          <LuCalendarRange />
                        </span>
                        {party.date}
                      </div>
                      <div className="flex items-center gap-2 text-base">
                        <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-500">
                          <GrLocation />
                        </span>
                        {party.location.length > 20
                          ? `${party.location.substring(0, 20)}...`
                          : party.location}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-base  font-semibold  text-gray-5">Hosted by : <span className="hover:text-primary underline"> {party.hostedBy}</span></h2>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>))}
          </SliderOne>
        </div>
      ),
    },
    {
      key: "past",
      title: "Past",
      content: (
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      ),
    },
    {
      key: "canceled",
      title: "Canceled",
      content: (
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      ),
    },
  ];

  const HostedTabsData = [
    {
      key: "electronics",
      title: "Electronics",
      content: <p>Discover the latest in electronics and gadgets!</p>,
    },
    {
      key: "clothing",
      title: "Clothing",
      content: <p>Shop for the trendiest clothes of the season.</p>,
    },
    {
      key: "home-appliances",
      title: "Home Appliances",
      content: <p>Upgrade your home with our modern appliances.</p>,
    },
  ];

  return (
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 lg:space-y-10 space-y-5">
      <UserProfileCard
        avgRating={"4.5"}
        isEditable={true}
        name={"Nishant Rajput"}
        partiesAttended={"4"}
        partiesHosted={"15"}
        profileImage="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
      <div className="w-full border-2 border-white/10 bg-white/5 rounded-xl p-5 space-y-5">
        <div className="flex gap-4 w-full ">
          <Button
            className={`uppercase px-6 h-12 text-lg  ${activeTab === "myEvents"
              ? "bg-primary text-white"
              : "bg-transparent border-2 border-white/15 text-white"
              }`}
            endContent={<GiPartyPopper className="text-xl" />}
            onClick={() => setActiveTab("myEvents")}
          >
            My Events
          </Button>
          <Button
            className={`uppercase px-6 h-12 text-lg  ${activeTab === "hostedEvents"
              ? "bg-primary text-white"
              : "bg-transparent border-2 border-white/15 text-white"
              }`}
            endContent={<GiPartyPopper className="text-xl" />}
            onClick={() => setActiveTab("hostedEvents")}
          >
            Hosted Events
          </Button>
        </div>
        <div>
          {activeTab === "myEvents" && (
            <TabOne tabHeading="My Events" tabsData={MyeventTabsData} />
          )}
          {activeTab === "hostedEvents" && (
            <TabOne tabHeading="Hosted events" tabsData={HostedTabsData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
