import React from 'react'
import SliderOne from '../Slider/SliderOne';
import { CarouselItem } from '@/components/ui/carousel';
import { PartiesData } from '@/components/Data/PartiesData';
import PartyCardThree from '../Cards/PartycCardThree';
import TabOne from '../Tabs/TabOne';

const MyEventsTab = () => {
  const MyeventTabsData = [
    {
      key: "upcoming",
      title: "Upcoming",
      content: (
        <div className=" flex flex-wrap gap-5 justify-center lg:pt-5">
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

  return (
    <TabOne tabHeading="My Events" tabsData={MyeventTabsData} />
  )
}

export default MyEventsTab