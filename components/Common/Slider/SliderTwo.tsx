"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type SliderTwoProps = {
    children: React.ReactNode;
};

const SliderTwo = ({ children }: SliderTwoProps) => {
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
                <div className="flex items-center justify-between relative">
                    <div className="absolute top-4 lg:top-6 right-12 lg:right-16">
                        <CarouselPrevious className="" />
                        <CarouselNext className="" />
                    </div>
                </div>
                <CarouselContent className="pt-4 lg:pt-16">
                    {children}
                </CarouselContent>

            </Carousel>
        </div>
    );
};

export default SliderTwo;
