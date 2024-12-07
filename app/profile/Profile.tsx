"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { GiPartyPopper } from "react-icons/gi";
import UserProfileCard from "@/components/Common/Cards/UserProfileCard";
import TabOne from "@/components/Common/Tabs/TabOne";
import { PartiesData } from "@/components/Data/PartiesData";
import { CarouselItem } from "@/components/ui/carousel";
import SliderOne from "@/components/Common/Slider/SliderOne";
import PartyCardThree from "@/components/Common/Cards/PartycCardThree";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("myEvents");

  const MyeventTabsData = [
    {
      key: "upcoming",
      title: "Upcoming",
      content: (
        <div className=" flex flex-wrap gap-5 justify-between pt-5">
          {PartiesData.map((party, index) => (
            <PartyCardThree
              className="max-w-sm"
              key={index}
              partyType={party.partyType}
              location={party.location}
              partyId={party.partyId}
              image={party.image}
              title={party.title}
              date={party.date}
              rating={party.rating}
              aboutParty={party.aboutParty}
            />
          ))}
        </div>
      ),
    },
    {
      key: "past",
      title: "Past",
      content: (
        <SliderOne>
          {PartiesData.map((party, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4  justify-center">
              <PartyCardThree
                partyType={party.partyType}
                location={party.location}
                key={party.partyId}
                partyId={party.partyId}
                image={party.image}
                title={party.title}
                date={party.date}
                rating={party.rating}
                aboutParty={party.aboutParty}
              />
            </CarouselItem>
          ))}
        </SliderOne>
      ),
    },
    {
      key: "canceled",
      title: "Canceled",
      content: (
        <SliderOne>
          {PartiesData.slice().reverse().map((party, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 justify-center ">
              <PartyCardThree
                partyType={party.partyType}
                location={party.location}
                key={party.partyId}
                partyId={party.partyId}
                className="opacity-50 hover:opacity-100 duration-300 ease-in-out"
                image={party.image}
                title={party.title}
                date={party.date}
                rating={party.rating}
                aboutParty={party.aboutParty}
              />
            </CarouselItem>
          ))}
        </SliderOne>

      ),
    },
  ];

  const HostedTabsData = [
    {
      key: "all",
      title: "All",
      content: (
        <SliderOne>
          {PartiesData.map((party, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4  justify-center">
              <PartyCardThree
                partyType={party.partyType}
                location={party.location}
                key={party.partyId}
                partyId={party.partyId}
                image={party.image}
                title={party.title}
                date={party.date}
                rating={party.rating}
                aboutParty={party.aboutParty}
              />
            </CarouselItem>
          ))}
        </SliderOne>
      ),
    },
    {
      key: "requested",
      title: "Requested",
      content: (
        <SliderOne>
          {PartiesData.slice().reverse().map((party, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 justify-center ">
              <PartyCardThree
                partyType={party.partyType}
                location={party.location}
                key={party.partyId}
                partyId={party.partyId}
                image={party.image}
                title={party.title}
                date={party.date}
                rating={party.rating}
                aboutParty={party.aboutParty}
              />
            </CarouselItem>
          ))}
        </SliderOne>
      ),
    },
    {
      key: "approved",
      title: "Approved",
      content: (
        <SliderOne>
          {PartiesData.map((party, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4  justify-center">
              <PartyCardThree
                partyType={party.partyType}
                location={party.location}
                key={party.partyId}
                partyId={party.partyId}
                image={party.image}
                title={party.title}
                date={party.date}
                rating={party.rating}
                aboutParty={party.aboutParty}
              />
            </CarouselItem>
          ))}
        </SliderOne>
      ),
    },
    {
      key: "declined",
      title: "Declined",
      content: 
      (
        <SliderOne>
        {PartiesData.slice().reverse().map((party, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 justify-center ">
            <PartyCardThree
              partyType={party.partyType}
              location={party.location}
              key={party.partyId}
              partyId={party.partyId}
              className="opacity-50 hover:opacity-100 duration-300 ease-in-out"
              image={party.image}
              title={party.title}
              date={party.date}
              rating={party.rating}
              aboutParty={party.aboutParty}
            />
          </CarouselItem>
        ))}
      </SliderOne>
      ),
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
      <div className="w-full border-2 border-white/10 bg-white/5 rounded-xl p-2 lg:p-5 space-y-5">
        <div className="flex gap-4 w-full ">
          <Button
            className={` lg:text-lg uppercase   font-semibold tracking-wide ${activeTab === "myEvents"
              ? "bg-primary text-white"
              : "bg-transparent border-2 border-white/15 text-white hover:border-primary"
              }`}
            endContent={<GiPartyPopper className="text-xl" />}
            onClick={() => setActiveTab("myEvents")}
          >
            My Events
          </Button>
          <Button
            className={`lg:text-lg uppercase   font-semibold  tracking-wide  ${activeTab === "hostedEvents"
              ? "bg-primary text-white"
              : "bg-transparent border-2 border-white/15 text-white hover:border-primary"
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
