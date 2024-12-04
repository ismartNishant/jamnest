'use client'
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../ui/carousel";

interface BannerCarouselProps {
    carouselBannerImages: { imgSrc: string; name: string }[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
    carouselBannerImages,
}) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }),
    );

    return (
        <Carousel
            className="w-full mx-auto rounded-xl my-4 lg:my-16"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {carouselBannerImages.map((image, index) => (
                    <CarouselItem key={index} className="cursor-pointer md:basis-1/2 lg:basis-1/3">
                        <div className="relative w-full h-40 lg:h-56">
                            <Image
                                fill
                                objectFit="cover"
                                alt={`${image.name}`}
                                className=" object-cover w-full h-full rounded-lg"
                                src={image.imgSrc}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
           
        </Carousel>
    );
};

export default BannerCarousel;
