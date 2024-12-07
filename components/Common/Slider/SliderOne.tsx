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
    // const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="relative mx-auto">
            <Carousel
                className="w-full mx-auto"
                // plugins={[plugin.current]}
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
            >

                <div className={`relative flex items-center min-h-8 lg:min-h-10 justify-between relative mb-4 lg:mb-6`}>
                    {title && <HeadingOne>{title}</HeadingOne>}
                    <div className={`absolute top-4 lg:top-6 right-12 lg:right-16 `}>
                        <CarouselPrevious className="" />
                        <CarouselNext className="" />
                    </div>
                </div>
                <CarouselContent className={` ${CarouselcontentClassName}`} >
                    {children}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default SliderOne;
