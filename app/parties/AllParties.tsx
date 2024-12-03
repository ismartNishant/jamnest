"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import MainLayout from "@/components/Layout/MianLayout";
import { HeadingOne } from "@/components/Common/Headings/HeadingOne";
import CardOne from "@/components/Common/Cards/CardOne";
import BannerCarousel from "@/components/Common/BannerCarousel";
import { PartiesData } from "@/components/Data/PartiesData";

const AllParties = () => {
  const todayParties = [
    {
      "partyId": "D4E5F6",
      "title": "The House Party You’ll Never Forget!",
      "image": "/images/parties/p4.jpg",
      "hostedBy": "Nishant Rajput",
      "userId": "Ab46d",
      "location": "Beach House, Malibu",
      "date": "2024-12-01",
      "time": "6:00 PM to 12:00 AM", // Combined time range as a single string
      "price": "1499",
      "partyType": "Beach Party",
    },
    {
      "partyId": "A1B2C3",
      "title": "Friends, Beats & Good Times!",
      "image": "/images/parties/p1.jpg",
      "hostedBy": "Rohan Gosavi",
      "userId": "Cd87p",
      "location": "Downtown Loft, NYC ,hghh ggokhgo ghgk hjgh",
      "date": "2024-11-15",
      "time": "8:00 PM to 1:00 AM", // Combined time range as a single string
      "price": "899",
      "partyType": "House Party",
    },
  ];

  // Tomorrow's Parties
  const tomorrowParties = [
    {
      "partyId": "G7H8I9",
      "title": "Get Your Groove On!",
      "image": "/images/parties/p3.jpg",
      "hostedBy": "Akriti Negi",
      "userId": "Ef12q",
      "location": "Rooftop Lounge, LA",
      "date": "2024-11-20",
      "time": "9:30 PM to 2:30 AM", // Combined time range as a single string
      "price": "799",
      "partyType": "Rooftop Party",
    },
    {
      "partyId": "J0K1L2",
      "title": "Friends, Beats & Good Times!",
      "image": "/images/parties/p2.jpg",
      "hostedBy": "Priyesh Thakre",
      "userId": "Gh34r",
      "location": "Warehouse, Brooklyn",
      "date": "2024-11-25",
      "time": "7:00 PM to 12:00 AM", // Combined time range as a single string
      "price": "1299",
      "partyType": "House Party",
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
              <div className="flex flex-wrap gap-10 justify-center">
                {PartiesData.map((party, index) => (
                  <CardOne
                    linkSrc={party.partyId}
                    key={index}
                    date={party.date}
                    hostedBy={party.hostedBy}
                    image={party.image}
                    location={party.location}
                    price={party.price}
                    title={party.title}
                    partyType={party.partyType} userId={party.userId}                  />
                ))}
              </div>
            </Tab>
            <Tab key="today" className="text-lg" title="Today">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
                {todayParties.map((party, index) => (
                  <CardOne
                    key={index}
                    linkSrc={party.partyId}
                    date={party.date}
                    hostedBy={party.hostedBy}
                    image={party.image}
                    location={party.location}
                    price={party.price}
                    title={party.title}
                    partyType={party.partyType}
                    userId={party.userId}  
                  />
                ))}
              </div>
            </Tab>
            <Tab key="tomorrow" className="text-lg" title="Tomorrow">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
                {tomorrowParties.map((party, index) => (
                  <CardOne
                    linkSrc={party.partyId}
                    key={index}
                    date={party.date}
                    hostedBy={party.hostedBy}
                    image={party.image}
                    location={party.location}
                    price={party.price}
                    title={party.title}
                    partyType={party.partyType}
                    userId={party.userId}  
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
