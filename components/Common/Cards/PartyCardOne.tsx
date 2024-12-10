import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { IoTicket } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";

type PartyCardOneProps = {
  partyId: string;
  partyType: string;
  title: string;
  hostedBy: string;
  date: string;
  location: string;
  price: string;
  image: string;
};

const PartyCardOne: React.FC<PartyCardOneProps> = ({
  partyId,
  partyType,
  title,
  hostedBy,
  date,
  location,
  price,
  image,
}) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-0 text-white">

      <Link href={`/Party/${partyId}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 bg-customGreen font-semibold text-black px-4 py-1 z-10 rounded-bl-xl">
            {partyType}
          </div>
          <Image
            alt={title}
            className="rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110" // Added scaling on hover
            layout="fill"
            objectFit="cover"
            src={image}
          />
          <div className="absolute rounded-lg w-full bottom-0 left-0 bg-secondary/50 hover:backdrop-blur-sm  bg-opacity-80 text-white  ">
            <div className="bg-black/70 p-3 w-full min-h-52 rounded-lg flex flex-col justify-between ">
              <div className="flex flex-col gap-1 lg:gap-2">
                <h1 className="text-2xl  font-semibold">
                  {title.length > 36 ? `${title.substring(0, 36)}...` : title}
                </h1>
                <h3 className="text-base lg:text-lg">
                  Hosted By
                  <span className="underline font-medium tracking-wider hover:text-primary ms-2 text-gray-3">
                    {hostedBy}
                  </span>
                </h3>
                <div className="flex items-center gap-4 text-sm lg:text-base ">
                  <div className="flex gap-1  items-center ">
                    <LuCalendarRange />
                    {date}
                  </div>
                  <div className="flex gap-1 items-center ">
                    <GrLocation />
                    {location.length > 20
                      ? `${location.substring(0, 20)}...`
                      : location}
                  </div>
                </div>
              </div>
              <Button variant="ghost" color="primary" className="ml-auto w-auto text-lg lg:text-xl font-semibold mt-2 " startContent={<IoTicket />}>
                <span>₹ {price}</span>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PartyCardOne;
