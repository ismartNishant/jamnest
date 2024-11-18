'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";

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
        <div className="w-full md:px-8 xl:px-24 py-12 xl:pt-24 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">FAQs</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1 flex justify-center items-center">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-96 rounded-lg overflow-hidden shadow-md relative"
                    >
                        <Image
                            fill
                            src={images[currentImage]}
                            alt={`Party ${currentImage + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Right Column with Accordion */}
                <div className="col-span-2 max-w-screen-md w-full mx-auto">
                    <Accordion>
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                aria-label={`FAQ ${index + 1}`}
                                title={faq.question}
                            >
                                <p>{faq.answer}</p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
