import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { IoTicket } from "react-icons/io5";
import Link from "next/link";

// Define props type for the component
interface PartyCardProps {
    title: string;
    image: string;
    hostedBy: string;
    location: string;
    date: string;
    price: string;
    partyType: string;
    linkSrc: string; // Changed the prop to 'linkSrc'
}

const CardOne: React.FC<PartyCardProps> = ({
    title,
    image,
    hostedBy,
    location,
    date,
    price,
    partyType,
    linkSrc, // Destructure 'linkSrc' instead of 'href'
}) => {
    return (
        <Card className="w-full rounded-xl group cursor-pointer hover:scale-105 duration-300 ease-in-out relative bg-transparent">
            <Link href={`/Party/${linkSrc}` }> {/* Use linkSrc here */}
                <div className="absolute top-0 right-0 bg-customGreen font-semibold text-black px-4 py-1 z-10 rounded-bl-xl">
                    {partyType}
                </div>
                <CardBody className="h-52 lg:h-64 overflow-hidden">
                    <Image
                        fill
                        alt="Card background"
                        className="object-cover group-hover:scale-110 duration-300 ease-in-out"
                        src={image} // Use the `image` prop for the image URL
                    />
                </CardBody>
                <CardFooter className="border-[2px] border-t-0 border-white/10 bg-secondary-900/30">
                    <div className="text-left flex flex-col gap-1 lg:gap-2 w-full h-full bg-transparent order-t-0">
                        <h1 className="text-2xl font-semibold">
                            {title.length > 32 ? `${title.substring(0, 32)}...` : title}
                        </h1>
                        <h3 className="text-base lg:text-lg text-neutral-400">
                            Hosted By{" "}
                            <span className="underline font-semibold tracking-wider">
                                {hostedBy}
                            </span>
                        </h3>
                        <div className="flex items-center gap-4 text-base lg:text-lg rounded-full bg-white/10 backdrop-blur-sm p-2">
                            <div className="flex gap-1 items-center">
                                <LuCalendarRange />
                                {date}
                            </div>
                            <div className="flex gap-1 items-center">
                                <GrLocation />
                                {location.length > 26
                                    ? `${location.substring(0, 26)}...`
                                    : location}
                            </div>
                        </div>
                        <div className="font-bold text-xl lg:text-2xl flex items-center w-auto ml-auto gap-2 p-1 px-3 rounded-md bg-primary mt-2">
                            <IoTicket /> <span>₹ {price}</span>
                        </div>
                    </div>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default CardOne;
