"use client";

import { Button } from "@nextui-org/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeadingOne } from "../Common/Headings/HeadingOne";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [randomRotations, setRandomRotations] = useState<number[]>([]);

  // Generate random rotations only after client-side mounting
  useEffect(() => {
    const generateRandomRotations = () => {
      const rotations = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
      setRandomRotations(rotations);
    };
    generateRandomRotations();
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="w-full md:px-8 lg:p-20  p-4  ">
      <h1 className="text-2xl lg:text-6xl font-medium uppercase text-center pb-5 lg:pb-10 font-Ubuntu ">Our Clients Testimonials </h1>
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-10 lg:gap-20 my-5 lg:my-20">
        <div className="relative max-w-xl h-36 lg:h-64 w-full mx-auto">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotations[index] || 0, // Use precomputed rotation values
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotations[index] || 0,
                  zIndex: isActive(index)
                    ? 999
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotations[index] || 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-between flex-col bg-white/5  p-2.5 lg:p-5 rounded-lg ">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl lg:text-4xl font-medium font-Ubuntu lg:mb-2">
              {testimonials[active].name}
            </h3>
            <p className=" text-base lg:text-lg text-primary font-semibold">
              {testimonials[active].designation}
            </p>
            <motion.p className=" text-base lg:text-lg text-gray-4 mt-4 lg:mt-8 ">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4  pt-6 lg:pt-12 ">
            <Button onClick={handlePrev} variant="ghost" color="primary" isIconOnly><FaChevronLeft /> </Button>
            <Button onClick={handleNext} variant="ghost" color="primary" isIconOnly><FaChevronRight /> </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
