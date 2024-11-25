"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { Tooltip } from "@nextui-org/tooltip";
import { IoMdHelpCircleOutline } from "react-icons/io";
import CouponModal from "../Modal/CouponModal";


interface PriceCardProps {
    price: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ price }) => {
    const [count, setCount] = useState(1); // Number of guests
    const maxLimit = 10;

    const pricePerPerson = parseFloat(price);
    const platformFee = 3; // Fixed platform fee
    const taxes = 11; // Fixed taxes
    const commissionRate = 0.05; // 5% commission

    // Increase count function
    const increaseCount = () => {
        if (count < maxLimit) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    // Decrease count function
    const decreaseCount = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    // Subtotal calculation based on the number of guests
    const subtotal = pricePerPerson * count;

    // Commission calculation (5% of the subtotal)
    const commission = subtotal * commissionRate;

    // Total calculation
    const total = subtotal + platformFee + taxes + commission;

    return (
        <div className="w-full relative max-w-sm">
            <div className="border-2 border-primary bg-gradient-to-br from-primary/50 to-secondary/20 rounded-2xl transition-transform transform hover:scale-105 sticky top-20">
                <div className="p-5 space-y-5">
                    <h1 className="text-5xl font-bold tracking-wide">
                        ₹{price}
                        <span className="text-lg text-gray-200 font-semibold tracking-normal">
                            per person
                        </span>
                    </h1>

                    <div className="bg-black/20 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">No. of Guests</h2>
                            <div className="flex items-center space-x-4">
                                <Button
                                    isIconOnly
                                    color="primary"
                                    size="sm"
                                    variant="ghost"
                                    onClick={decreaseCount}
                                >
                                    <FaMinus className="text-xl" />
                                </Button>
                                <div className="text-3xl font-bold">{count}</div>
                                <Button
                                    isIconOnly
                                    color="primary"
                                    size="sm"
                                    variant="ghost"
                                    onClick={increaseCount}
                                >
                                    <FaPlus className="text-xl" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-base text-gray-300 font-medium">
                            Max limit: {maxLimit} guests
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="flex justify-between gap-4 items-center tracking-wide text-lg font-medium text-gray-2">
                            Sub total ( ₹{price} X {count} ) <span> ₹{subtotal}</span>
                        </p>
                        <div className="flex justify-between gap-4 items-center tracking-wide text-lg font-medium text-gray-2">
                            <Tooltip
                                content={
                                    <div className="space-y-1.5 p-2.5">
                                        <p className="flex justify-between gap-4 items-center tracking-wide text-sm font-medium text-gray-2">
                                            Platform fee <span>₹{platformFee}</span>
                                        </p>
                                        <p className="flex justify-between gap-4 items-center tracking-wide text-sm font-medium text-gray-2">
                                            Taxes <span>₹{taxes}</span>
                                        </p>
                                        <p className="flex justify-between gap-4 items-center tracking-wide text-sm font-medium text-gray-2">
                                            Commission (5%) <span>₹{commission.toFixed(2)}</span>
                                        </p>
                                    </div>
                                }
                                color="secondary"
                                offset={4}
                                placement="bottom"
                                showArrow={true}
                            >
                                <span className="flex items-center gap-1">
                                    Additional charges <IoMdHelpCircleOutline />{" "}
                                </span>
                            </Tooltip>
                            <span>₹{platformFee + taxes + commission.toFixed(2)}</span>
                        </div>
                    </div>
                        <CouponModal />
                    <div className="bg-white/15 p-4 rounded-md">
                        <div className="flex justify-between gap-5 items-center text-2xl font-semibold mb-4">
                            <h4>Total</h4>
                            <h4>₹{total.toFixed(2)}</h4>
                        </div>
                        <Button
                            className="w-full font-semibold uppercase text-xl"
                            color="primary"
                            size="lg"
                            startContent={<IoTicketOutline className="text-2xl" />}
                            variant="solid"
                        >
                            Book A Spot
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;
