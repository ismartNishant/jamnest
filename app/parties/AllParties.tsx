"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import MainLayout from "@/components/Layout/MianLayout";
import CardOne from "@/components/Common/Cards/CardOne";
import BannerCarousel from "@/components/Common/Slider/BannerCarousel";
import { PartiesData } from "@/components/Data/PartiesData";

const AllParties = () => {
  const todayParties = [
    {
      partyId: "J0K1L2",
      title: "Friends, Beats & Good Times!",
      image: "/images/parties/p2.jpg",
      hostedBy: "Priyesh Thakre",
      userId: "Gh34r",
      partiesHosted: "5",
      location: "Warehouse, Brooklyn",
      date: "2024-11-25",
      time: "7:00 PM to 12:00 AM",
      price: "1299",
      partyType: "House Party",
      aboutParty:
        "Experience a vibrant party in a trendy Brooklyn warehouse. Expect great music, amazing people, and unforgettable memories.",
      bookingOpen: false,
    },
    {
      partyId: "M3N4O5",
      title: "Carnival Nights: Dance & Delight!",
      image: "/images/parties/p1.jpg",
      hostedBy: "Sneha Gupta",
      userId: "Wx56y",
      partiesHosted: "20",
      location: "Open Grounds, Miami",
      date: "2024-12-10",
      time: "6:00 PM to 11:00 PM",
      price: "999",
      partyType: "Outdoor Party",
      aboutParty:
        "Step into a carnival-inspired evening filled with dance, lights, and delightful treats. A magical experience under the Miami skies!",
      bookingOpen: true,
    },
  ];

  // Tomorrow's Parties
  const tomorrowParties = [
    {
      partyId: "P6Q7R8",
      title: "Masquerade Ball: Mystery Awaits",
      image: "/images/parties/p2.jpg",
      hostedBy: "Rahul Verma",
      userId: "Zy78k",
      partiesHosted: "12",
      location: "Grand Ballroom, Las Vegas",
      date: "2024-12-20",
      time: "9:00 PM to 2:00 AM",
      price: "1799",
      partyType: "Formal Party",
      aboutParty:
        "Dress to impress and embrace the mystery at our grand masquerade ball in Las Vegas. An elegant night to remember!",
      bookingOpen: false,
    },
    {
      partyId: "D4E5F6",
      title: "The House Party You’ll Never Forget!",
      image: "/images/parties/p4.jpg",
      hostedBy: "Nishant Rajput",
      userId: "Ab46d",
      partiesHosted: "5",
      location: "Beach House, Malibu",
      date: "2024-12-01",
      time: "6:00 PM to 12:00 AM",
      price: "1499",
      partyType: "Beach Party",
      aboutParty:
        "Enjoy the perfect beach vibes with soothing music, bonfires, and cocktails. A one-of-a-kind party experience in Malibu!",
      bookingOpen: false,
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
        <h1 className="text-transparent font-Ubuntu text-center mt-5 text-5xl  font-bold lg:text-9xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Discover All
        </h1>
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
