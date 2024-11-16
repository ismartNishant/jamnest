"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";

import MainLayout from "@/components/Layout/MianLayout";
import { HeadingOne } from "@/components/Common/HeadingOne";
import CardOne from "@/components/Common/CardOne";
import BannerCarousel from "@/components/Common/BannerCarousel";

const AllParties = () => {

  const allParties = [
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
      title: "The House Party You’ll Never Forget !",
      image: "/images/parties/p4.jpg",
      hostedBy: "The Party Squad",
      location: "Beach House, Malibu",
      date: "2024-11-01",
      price: "1499",
      partyType: "House Party",
    },
    {
      title: "Get Your Groove On!",
      image: "/images/parties/p3.jpg",
      hostedBy: "DJ Spin",
      location: "Rooftop Lounge, LA",
      date: "2024-11-20",
      price: "799",
      partyType: "House Party",
    },
    {
      title: "Friends, Beats & Good Times!",
      image: "/images/parties/p2.jpg",
      hostedBy: "Club Vibes",
      location: "Warehouse, Brooklyn",
      date: "2024-11-16",
      price: "1299",
      partyType: "House Party",
    },
  ];

  // Today's Parties
  const todayParties = [
    {
      title: "Party at Downtown",
      image: "/images/parties/p1.jpg",
      hostedBy: "DJ Awesome",
      location: "Downtown, NYC",
      date: "2024-11-15",
      price: "999",
      partyType: "House Party",
    },
    {
      title: "House Vibes Only!",
      image: "/images/parties/p4.jpg",
      hostedBy: "The Party Crew",
      location: "City Mansion, LA",
      date: "2024-11-15",
      price: "1299",
      partyType: "House Party",
    },
  ];

  // Tomorrow's Parties
  const tomorrowParties = [
    {
      title: "Rooftop Dance Party!",
      image: "/images/parties/p3.jpg",
      hostedBy: "DJ Spin",
      location: "Rooftop Lounge, LA",
      date: "2024-11-16",
      price: "799",
      partyType: "House Party",
    },
    {
      title: "Vibes Under the Stars",
      image: "/images/parties/p2.jpg",
      hostedBy: "Star Party Crew",
      location: "Warehouse, Brooklyn",
      date: "2024-11-16",
      price: "1399",
      partyType: "House Party",
    },
  ];


  const images = [
    { imgSrc: '/images/banner-carousel/b1.jpg', name: 'Banner 1' },
    { imgSrc: '/images/banner-carousel/b3.jpg', name: 'Banner 2' },
    { imgSrc: '/images/banner-carousel/b2.jpg', name: 'Banner 3' },
    { imgSrc: '/images/banner-carousel/b4.jpg', name: 'Banner 4' },
];

  return (
    <MainLayout>
      <section className="w-full md:px-8 xl:px-24 py-12 xl:pt-24 px-4">
        <HeadingOne className="text-transparent text-center mt-5 text-5xl  font-bold lg:text-9xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Discover All
        </HeadingOne>
        <div className="flex w-full flex-col ">
          <Tabs
            aria-label="Options"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 bg-transparent justify-center lg:justify-end my-5 lg:my-8",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-4  bg-black  border-2  border-default hover:border-primary ",
              tabContent: "group-data-[selected=true]:text-white ",
            }}
            color="primary"
            size="lg"
          >
            <Tab key="all" className="text-lg" title="All">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
                {allParties.map((party, index) => (
                  <CardOne
                    key={index}
                    date={party.date}
                    hostedBy={party.hostedBy}
                    image={party.image}
                    location={party.location}
                    price={party.price}
                    title={party.title}
                    partyType={party.partyType}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="today" className="text-lg" title="Today">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
                {todayParties.map((party, index) => (
                  <CardOne
                    key={index}
                    date={party.date}
                    hostedBy={party.hostedBy}
                    image={party.image}
                    location={party.location}
                    price={party.price}
                    title={party.title}
                    partyType={party.partyType}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="tomorrow" className="text-lg" title="Tomorrow">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
                {tomorrowParties.map((party, index) => (
                  <CardOne
                    key={index}
                    date={party.date}
                    hostedBy={party.hostedBy}
                    image={party.image}
                    location={party.location}
                    price={party.price}
                    title={party.title}
                    partyType={party.partyType}
                  />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>

        <BannerCarousel carouselBannerImages={images} />
      </section>
    </MainLayout>
  );
};

export default AllParties;
