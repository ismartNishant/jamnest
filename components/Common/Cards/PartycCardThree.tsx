import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { IoTicket } from "react-icons/io5";
import { Card } from "@nextui-org/card";

interface PartyCardThreeProps {
    partyId: string;
    price?: string; // Make price optional
    image: string;
    title: string;
    date: string;
    location: string;
    partyType: string;
    rating: number; // Assuming rating is a number
    aboutParty?: string; // Make aboutParty optional
    className?: string; // Optional className prop
}

const PartyCardThree: React.FC<PartyCardThreeProps> = ({
    partyId,
    image,
    price,
    title,
    date,
    location,
    rating,
    partyType,
    aboutParty,
    className = "max-w-md", // Default className
}) => {
    return (
        <Card
            className={`w-full relative rounded-lg p-2 h-full bg-gradient-to-br from-secondary hover:scale-95 duration-300 ease-in-out border-2 border-white/15 ${className}`}
        >
            <Link href={`/Party/${partyId}`} className="h-full space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                    <div className="relative w-full h-52 overflow-hidden">
                        <Image
                            fill
                            alt="party-img"
                            className="w-full h-full object-cover rounded-lg"
                            src={image}
                        />
                        <Chip className="absolute right-1 top-1 bg-customGreen text-black">{partyType}</Chip>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl font-semibold">
                            {title.length > 40 ? `${title.slice(0, 40)}...` : title}
                        </h1>
                        <div className="flex items-center gap-2 text-base">
                            <span className="p-1.5 rounded-lg bg-yellow-500/20 text-yellow-500">
                                <GrLocation />
                            </span>
                            {location.length > 30
                                ? `${location.substring(0, 30)}...`
                                : location}
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-base">
                                <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-500">
                                    <LuCalendarRange />
                                </span>
                                {date}
                            </div>
                            <div className="flex items-center text-xl gap-2 font-semibold">
                                <FaRegStarHalfStroke className="text-primary" />
                                <p>{rating} / 5</p>
                            </div>
                        </div>
                        {aboutParty && (
                            <p className="text-gray-3">
                                {aboutParty.length > 80
                                    ? `${aboutParty.slice(0, 80)}...`
                                    : aboutParty}
                            </p>
                        )}
                    </div>
                </div>
                {price && (
                    <div className="text-right">
                        <Button
                            variant="shadow"
                            color="primary"
                            className="text-lg lg:text-xl font-semibold"
                            startContent={<IoTicket />}
                        >
                            ₹ {price}
                        </Button>
                    </div>
                )}
            </Link>
        </Card>
    );
};

export default PartyCardThree;
