"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import { HeadingOne } from "./Headings/HeadingOne";
import { LiaChevronRightSolid, LiaChevronDownSolid } from 'react-icons/lia'

const ubuntu = Ubuntu({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "700"],
});

const Faqs = () => {
    const faqData = [
        {
            question: "How do I host a house party on this platform?",
            answer:
                "To host a house party, simply sign up for an account, navigate to the 'Host a Party' section, and fill out the details about your event, including the date, time, location, and theme. Once submitted, your party will be listed for others to see and join.",
        },
        {
            question: "How can I register for a house party as a guest?",
            answer:
                "Browse through the available house parties on our platform. Once you find a party you'd like to attend, click the 'Register' button on the event page. You may need to provide your details and confirm any required payment or RSVP.",
        },
        {
            question: "Is there a fee to host or join a party?",
            answer:
                "Hosting a party is free, but you can set a cover charge for guests if you wish. As a guest, some parties may have a registration fee determined by the host, while others may be free to attend.",
        },
        {
            question: "Are the house parties safe to attend?",
            answer:
                "We prioritize safety by verifying hosts and providing a review system for attendees. Guests are encouraged to review parties they've attended, and hosts can review guests. Always check the host's profile and reviews before registering.",
        },
        {
            question: "Can I cancel my registration or hosting?",
            answer:
                "Yes, you can cancel your registration or hosting. If you're a guest, go to your dashboard and cancel your RSVP. Refund policies for paid registrations depend on the host's terms. If you're a host, you can cancel your party from the host dashboard, and all registered guests will be notified.",
        },
    ];

    const images = [
        "/images/parties/p1.jpg",
        "/images/parties/p2.jpg",
        "/images/parties/p3.jpg",
        "/images/parties/p4.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full md:px-8 lg:p-20  p-4 ">
            <HeadingOne className="text-3xl lg:text-6xl  font-bold uppercase text-center pb-5 lg:pb-10">
                FAQs
            </HeadingOne>

            <div className="flex gap-5 lg:gap-20  items-start mx-auto w-full flex-col lg:flex-row">
                <div className="max-w-md flex justify-center items-center w-full ">
                    <motion.div
                        key={currentImage}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full  h-64 lg:h-96 rounded-lg overflow-hidden shadow-md relative"
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            fill
                            alt={`Party ${currentImage + 1}`}
                            className="w-full h-full object-cover"
                            src={images[currentImage]}
                        />
                    </motion.div>
                </div>
                <div className="  w-full mx-auto">
                    <Accordion
                        className="gap-4 lg:gap-8  flex flex-col"
                        defaultExpandedKeys={["0"]}
                        itemClasses={{
                            base: "text-white bg-transparent ",
                            title: `${ubuntu.className} text-lg lg:text-2xl uppercase font-semibold `,
                            indicator: "text-primary text-3xl  data-[open=true]:-rotate-90 ",
                            trigger: " flex items-start py-1 ",
                            content:'pt-1'
                        }}
                        selectionMode="multiple"
                        variant='light'

                    >
                        {faqData.map((faq, index) => (
                            <AccordionItem
                          
                                key={index}
                                aria-label={`FAQ ${index + 1}`}
                                indicator={({ isOpen }) =>
                                    isOpen ? <LiaChevronRightSolid /> : <LiaChevronDownSolid />
                                }
                                title={faq.question}
                            >
                                <p className="text-sm lg:text-lg font-light text-gray-4">
                                    {faq.answer}
                                </p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
