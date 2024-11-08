import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Hero = () => {
  return (
    <div className='min-h-screen'>
      <Carousel className="w-full max-w-screen-xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                 
                    <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      
      </Carousel>
    </div>
  )
}

export default Hero