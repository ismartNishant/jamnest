"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Modal,
    ModalContent,
    useDisclosure,
    ModalBody,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SliderOne from "../Slider/SliderOne";
import { CarouselItem } from "@/components/ui/carousel";

type GalleryProps = {
    images: string[]; // Array of image URLs
};

const Gallery = ({ images }: GalleryProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handlePrev = () => {
        if (activeIndex !== null) {
            setActiveIndex((activeIndex - 1 + images.length) % images.length);
        }
    };

    const handleNext = () => {
        if (activeIndex !== null) {
            setActiveIndex((activeIndex + 1) % images.length);
        }
    };

    const openModal = (index: number) => {
        setActiveIndex(index);
        onOpen(); // Open modal
    };

    return (
        <section className="py-10 space-y-4">
            <SliderOne title="Images Gallery">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                        <div
                            key={index}
                            className="relative cursor-pointer w-full max-w-md h-full min-h-64 rounded-lg overflow-hidden hover:scale-95 duration-300 ease-in-out group"
                        >
                            <Image
                                fill
                                alt={`Thumbnail ${index + 1}`}
                                className="object-cover"
                                src={image}
                            />


                            <div role="button" onClick={() => openModal(index)} className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                                <span className="z-10 bg-primary rounded-full px-6 py-1.5 uppercase text-xl font-semibold ">View</span>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </SliderOne>

            {/* Modal */}
            <Modal
                placement="center"
                closeButton
                aria-labelledby="image-gallery"
                isOpen={isOpen}
                className="bg-secondary-900 border-2 border-white/10 "
                classNames={{
                    closeButton: "bg-primary text-white hover:bg-white hover:text-primary text-xl",
                }}
                size="4xl"
                backdrop="blur"
                onClose={onClose}
            >
                <ModalContent className="py-5 pt-10 ">
                    <ModalBody className="px-2">
                        <div className="relative w-full h-full flex items-center justify-center gap-1.5 lg:gap-5">
                            <Button
                                isIconOnly
                                aria-label="Previous image"
                                color="primary"
                                className=" min-w-1 w-6 lg:w-11 h-10  "
                                variant="ghost"
                                onClick={handlePrev}
                            >
                                <FaChevronLeft className="text-lg" />
                            </Button>

                            {activeIndex !== null && (
                                <div className="w-full min-h-56 lg:h-[500px] relative overflow-hidden rounded-xl">
                                    <Image
                                        fill
                                        alt={`Image ${activeIndex + 1}`}
                                        className="object-cover"
                                        src={images[activeIndex]}
                                    />
                                </div>
                            )}

                            <Button
                                isIconOnly
                                aria-label="Next image"
                                color="primary"
                                className="min-w-1 w-6  lg:w-11 h-10 "
                                variant="ghost"
                                onClick={handleNext}
                            >
                                <FaChevronRight  className="text-lg" />
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </section>
    );
};

export default Gallery;
