import { Card } from "@nextui-org/card";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { PartiesData } from "@/components/Data/PartiesData";
import Link from "next/link";

const HostedParties = () => {
    return (
        <div className="relative">
            <Carousel
                className="w-full "
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent className="pt-10">
                    {PartiesData.map((party, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                            <Link href={`/Party/${party.partyId}`}  >
                            <Card className="p-2 h-full space-y-2 bg-secondary/10 hover:scale-95 duration-300 ease-in-out border-2 border-white/15">
                                <div className="relative w-full h-52 overflow-hidden">
                                    <Image
                                        fill
                                        alt="party-img"
                                        className="w-full h-full object-cover rounded-lg"
                                        src={party.image}
                                    />
                                </div>
                                <h1 className="text-xl font-medium">
                                    {party.title.length > 40 ? `${party.title.slice(0, 40)}...` : party.title}
                                </h1>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-base">
                                        <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-500">
                                            <LuCalendarRange />
                                        </span>
                                        {party.date}
                                    </div>
                                    <div className="flex items-center text-xl gap-2">
                                        <FaRegStarHalfStroke className="text-primary" />
                                        <p>4.5 / 5</p>
                                    </div>
                                </div>
                                <p>
                                    {party.aboutParty.length > 80
                                        ? `${party.aboutParty.slice(0, 80)}...`
                                        : party.aboutParty}
                                </p>
                            </Card>
                            </Link>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-0 right-16 ">
                    <CarouselPrevious className="" />
                    <CarouselNext className="" />
                </div>
            </Carousel>
        </div>
    );
};

export default HostedParties;
