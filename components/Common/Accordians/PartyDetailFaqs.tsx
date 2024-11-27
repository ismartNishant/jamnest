'use client'
import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Ubuntu } from 'next/font/google'
import { LiaChevronRightSolid, LiaChevronDownSolid } from 'react-icons/lia'

import {
  GiMusicSpell,
  GiHotMeal,
  GiChickenOven,
  GiWineBottle
} from 'react-icons/gi'
import { FaSmoking, FaBanSmoking } from 'react-icons/fa6'
import { MdPets } from 'react-icons/md'
import { BiDrink } from 'react-icons/bi'
import { LuParkingSquare, LuParkingSquareOff } from 'react-icons/lu'
import { TbTruckDelivery, TbElevator, TbElevatorOff } from 'react-icons/tb';
import { RiEBike2Fill } from "react-icons/ri";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700']
})

const PartyDetailFaqs = () => {
  const features = [
    { text: "Smoking is Allowed", icon: <FaSmoking className="text-3xl" /> },
    { text: "No Smoking Allowed", icon: <FaBanSmoking className="text-3xl" /> },
    { text: "Music Available", icon: <GiMusicSpell className="text-3xl" /> },
    { text: "Veg Food Available", icon: <GiHotMeal className="text-3xl" /> },
    { text: "Non-veg Food Available ", icon: <GiChickenOven className="text-3xl" /> },
    { text: "Pets Allowed", icon: <MdPets className="text-3xl" /> },
    { text: "Soft Drinks", icon: <BiDrink className="text-3xl" /> },
    { text: "Alcohol Served Limited", icon: <GiWineBottle className="text-3xl" /> },
    { text: "Parking Available", icon: <LuParkingSquare className="text-3xl" /> },
    { text: "No Parking Available", icon: <LuParkingSquareOff className="text-3xl" /> },
    { text: "Outside Food order", icon: <RiEBike2Fill className="text-3xl" /> },
    { text: "Elevator Available", icon: <TbElevator className="text-3xl" /> },
    { text: "No Elevator Available", icon: <TbElevatorOff className="text-3xl" /> },
  ];

  return (
    <div className='py-5'>
      <Accordion
        className='flex flex-col gap-5 p-0'
        itemClasses={{
          base: 'text-white bg-white/5 border-2 border-white/10 p-4 ',
          title: `${ubuntu.className} text-4xl uppercase font-semibold`,
          indicator: 'text-primary text-4xl  p-1 data-[open=true]:-rotate-90 ',
          trigger: 'flex items-start'
        }}
        selectionMode='multiple'
        variant='splitted'
      >
        <AccordionItem
          aria-label={`Whats Included`}
          indicator={({ isOpen }) =>
            isOpen ? <LiaChevronRightSolid /> : <LiaChevronDownSolid />
          }
          title={`Whats Included`}
        >
          <div className='flex  gap-5 flex-wrap'>
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-md p-2 bg-white/5 flex text-lg items-center gap-2 border-2 border-white/10"
              >
                
                <div className='bg-primary rounded-md p-1'>{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          aria-label={`House Rules`}
          indicator={({ isOpen }) =>
            isOpen ? <LiaChevronRightSolid /> : <LiaChevronDownSolid />
          }
          title={`House Rules`}
        >
          <ol className='list-decimal list-inside text-xl font-medium tracking-wide space-y-4'>
            <li>Respect the property and other guests</li>
            <li>Drink Responsibly</li>
            <li>Help the host keep the house clean</li>
            <li>Banned substances not allowed</li>
            <li>Entry above 21 years of age only</li>
          </ol>
        </AccordionItem>
        <AccordionItem
          aria-label={`How it Works`}
          indicator={({ isOpen }) =>
            isOpen ? <LiaChevronRightSolid /> : <LiaChevronDownSolid />
          }
          title={`How it Works`}
        >
          <ol className='  list-inside text-xl font-medium tracking-wide space-y-4'>
            <li className=''>
              <span className='font-bold text-primary pr-2'> Step 1 : </span>
              Send a request to attend the house party.
            </li>
            <li>
              <span className='font-bold text-primary pr-2'> Step 2 : </span>
              Process the payment and wait for the approval from the host.
            </li>
            <li>
              <span className='font-bold text-primary pr-2'> Step 3 : </span> If
              your request is approved, you will receive the party details on
              your registered email. Simultaneously, you can also check the
              status of your request on your dashboard.
            </li>
            <li>
              <span className='font-bold text-primary pr-2'> Step 4 : </span> If
              your request is not approved, you will receive a 100% refund
              within 5-7 days.
            </li>
          </ol>
        </AccordionItem>
        <AccordionItem
          aria-label={`cancellation policy`}
          indicator={({ isOpen }) =>
            isOpen ? <LiaChevronRightSolid /> : <LiaChevronDownSolid />
          }
          title={`cancellation policy`}
        >
          <ol className='list-upper-alpha list-inside text-xl font-medium tracking-wide space-y-4'>
            <li>
              <span className=' font-semibold'>100% refund</span>
              <ol className='list-roman list-inside mt-2 space-y-2 pl-6 text-gray-4'>
                <li>If you cancel 48 hours before the party start time.</li>
                <li>If the host cancels the party.</li>
              </ol>
            </li>
            <li>
              <span className=' font-semibold'>50% refund</span> if you cancel
              24 hours before the party start time.
            </li>
            <li>
              <span className=' font-semibold'>No refunds</span> if you cancel
              within 24 hours of the party start time.
            </li>
          </ol>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default PartyDetailFaqs