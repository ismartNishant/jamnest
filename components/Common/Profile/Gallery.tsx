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

import { HeadingOne } from "../Headings/HeadingOne";

const Gallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const images = [
        { id: 1, src: "/images/parties/p1.jpg" },
        { id: 2, src: "/images/parties/p2.jpg" },
        { id: 3, src: "/images/parties/p3.jpg" },
        { id: 4, src: "/images/parties/p4.jpg" },
    ];


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

    // Open modal and set active image index
    const openModal = (index: number) => {
        setActiveIndex(index);
        onOpen(); // Open modal
    };

    return (
        <section className="py-10 space-y-4">
            <HeadingOne>Party Gallery</HeadingOne>
            <div className=" flex items-center gap-4 flex-wrap justify-center">
                {images.map((image, index) => (
                    <div
                        role='button'
                        key={image.id}
                        className="relative cursor-pointer w-56 h-56  rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            fill
                            alt={`Thumbnail ${index + 1}`}
                            className=" object-cover"
                            src={image.src}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
            placement='center'
                closeButton
                aria-labelledby="image-gallery"
                isOpen={isOpen}
                className="bg-secondary-900 border-2 border-white/10 "
                classNames={{
                    
                    closeButton: 'bg-primary text-white hover:bg-white hover:text-primary text-xl'
                }}
                size="4xl"
                backdrop="blur"
                onClose={onClose}
            >
                <ModalContent className="py-5">
                    <ModalBody className="px-2">
                        <div className="relative w-full h-full flex items-center justify-center gap-2 lg:gap-5">
                            <Button
                                isIconOnly
                                aria-label="Previous image"
                                className=""
                                color="primary"
                                variant="ghost"
                                onClick={handlePrev}
                            >
                                <FaChevronLeft />
                            </Button>

                            {activeIndex !== null && (
                                <div className="w-full h-56 lg:h-[500px] relative overflow-hidden rounded-xl">
                                    <Image
                                        fill
                                        alt={`Image ${activeIndex + 1}`}
                                        className="object-cover "
                                        src={images[activeIndex].src}
                                    />
                                </div>
                            )}

                            <Button
                                isIconOnly
                                aria-label="Next image"
                                className=""
                                color="primary"
                                variant="ghost"
                                onClick={handleNext}
                            >
                                <FaChevronRight />
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </section>
    );
};

export default Gallery;
