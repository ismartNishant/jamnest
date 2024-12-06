"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { HeadingOne } from "../Headings/HeadingOne";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type SliderOneProps = {
    title?: string; // Optional title
    children: React.ReactNode;
    CarouselcontentClassName?: string; // Custom class for CarouselContent
};

const SliderOne = ({ title, children, CarouselcontentClassName }: SliderOneProps) => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="relative">
            <Carousel
                className="w-full"
                opts={{
                    align: "start",
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >

                <div className={title ? (`relative`) : (`flex items-center justify-between relative`)}>
                    {title && <HeadingOne>{title}</HeadingOne>}
                    <div className={`absolute top-4 lg:top-6 right-12 lg:right-16`}>
                        <CarouselPrevious className="" />
                        <CarouselNext className="" />
                    </div>
                </div>
                <CarouselContent className={` ${CarouselcontentClassName || "mt-4 lg:mt-8"}`}>
                    {children}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default SliderOne;
