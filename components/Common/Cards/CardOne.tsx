import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { IoTicket } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@nextui-org/button";

// Define props type for the component
interface PartyCardProps {
    title: string;
    image: string;
    hostedBy: string;
    location: string;
    userId: string
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
    linkSrc,
    userId
}) => {
    return (
        <Card className="w-full rounded-xl group  hover:scale-105 duration-300 ease-in-out relative bg-transparent max-w-sm">

            <div className="absolute top-0 right-0 bg-customGreen font-semibold text-black px-4 py-1 z-10 rounded-bl-xl">
                {partyType}
            </div>
            <Link  href={`/Party/${linkSrc}`}>
                <CardBody className="h-52 lg:h-56 overflow-hidden">
                    <Image
                        fill
                        alt="Card background"
                        className="object-cover group-hover:scale-110 duration-300 ease-in-out"
                        src={image} // Use the `image` prop for the image URL
                    />
                </CardBody>
            </Link>

            <CardFooter className="border-[2px] border-t-0 border-white/10 bg-secondary-900/30  p-2 lg:p-3">
                <div className="text-left flex flex-col gap-2 w-full h-full bg-transparent ">
                    <h1 className="text-2xl font-semibold">
                        {title.length > 32 ? `${title.substring(0, 32)}...` : title}
                    </h1>
                    <h3 className="text-base lg:text-lg text-neutral-400">
                        Hosted By{" "}
                        <Link href={`/user/${userId}`} className="underline font-semibold tracking-wider hover:text-primary">
                            <span >
                                {hostedBy}
                            </span>
                        </Link>
                    </h3>
                    <div className="flex items-center gap-4 text-sm lg:text-lg rounded-full bg-white/10 backdrop-blur-sm p-2">
                        <div className="flex gap-1 items-center">
                            <LuCalendarRange />
                            {date}
                        </div>
                        <div className="flex gap-1 items-center">
                            <GrLocation />
                            {location.length > 20
                                ? `${location.substring(0, 20)}...`
                                : location}
                        </div>
                    </div>

                    <Button as={Link} href={`/Party/${linkSrc}`} variant="ghost" color="primary" className="ml-auto w-auto text-xl font-semibold mt-2 " startContent={<IoTicket />}>
                        <span>₹ {price}</span>
                    </Button>
                </div>
            </CardFooter>

        </Card>
    );
};

export default CardOne;
