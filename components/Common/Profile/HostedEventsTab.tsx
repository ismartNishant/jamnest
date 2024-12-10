import { PartiesData } from '@/components/Data/PartiesData';
import { CarouselItem } from '@/components/ui/carousel';
import React from 'react'
import PartyCardThree from '../Cards/PartycCardThree';
import SliderOne from '../Slider/SliderOne';
import TabOne from '../Tabs/TabOne';

const HostedEventsTab = () => {
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
    <TabOne tabHeading="Hosted events" tabsData={HostedTabsData} />
  )
}

export default HostedEventsTab