'use client'
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { Tooltip } from "@nextui-org/tooltip";
import { IoMdHelpCircleOutline } from "react-icons/io";
import CouponModal from "../Modal/CouponModal";
import { TbRosetteDiscount } from "react-icons/tb";

interface PriceCardProps {
    price: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ price }) => {
    const [count, setCount] = useState(1); // Number of guests
    const maxLimit = 10;

    const pricePerPerson = parseFloat(price);
    const platformFee = 3; // Fixed platform fee
    const taxes = 6; // Fixed taxes
    const commissionRate = 0.03;

    // Coupon state
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [discountAmount, setDiscountAmount] = useState<number>(0);

    const couponList = [
        { code: "DISCOUNT10", description: "10% off on total price", value: 10, type: "percent" }, // 10% discount
        { code: "BOONZA", description: "Get ₹50 off", value: 50, type: "fixed" }, // ₹50 off
        { code: "WELCOME100", description: "Get ₹100 off", value: 100, type: "fixed" }, // ₹100 off
    ];

    // Apply coupon logic
    const applyCoupon = (code: string) => {
        const coupon = couponList.find((c) => c.code === code);
        if (coupon) {
            setAppliedCoupon(coupon.code);

            // Calculate discount based on the coupon type
            let discount = 0;
            if (coupon.type === "percent") {
                discount = (pricePerPerson * count * coupon.value) / 100; // Percentage discount
            } else if (coupon.type === "fixed") {
                discount = coupon.value; // Fixed discount
            }

            setDiscountAmount(discount);
        }
    };

    // Remove coupon logic
    const removeCoupon = () => {
        setAppliedCoupon(null);
        setDiscountAmount(0);
    };

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

    // Commission calculation (3% of the subtotal)
    const commission = subtotal * commissionRate;

    // Calculate discounted subtotal
    const discountedSubtotal = subtotal - discountAmount;

    // Total calculation after applying coupon
    const total = discountedSubtotal + platformFee + taxes + commission;

    return (
        <div className="w-full relative max-w-sm hidden lg:block">
            <div className="border-2 border-primary bg-gradient-to-br from-primary/50 to-secondary/20 rounded-2xl transition-transform transform hover:scale-105 sticky top-20">
                <div className="p-5 space-y-3">
                    <h1 className="text-5xl font-bold tracking-wide">
                        ₹{price}
                        <span className="text-lg text-gray-200 font-semibold tracking-normal">
                            per person
                        </span>
                    </h1>

                    <div className="bg-black/20 rounded-lg p-2.5">
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
                        <p className="text-sm text-gray-300 font-medium">
                            Max limit: {maxLimit} guests
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="flex justify-between gap-4 items-center tracking-wide text-base font-medium text-gray-2">
                            Sub total ( ₹{price} X {count} ) <span className="tracking-wide"> ₹{subtotal}</span>
                        </p>

                        <div className="flex justify-between gap-4 items-center text-gray-2">
                            <Tooltip
                                content={
                                    <div className="space-y-1.5 p-2.5">
                                        <p className="flex justify-between gap-4 items-center tracking-wide text-sm font-medium text-gray-2">
                                            Platform fee <span>₹ {platformFee}</span>
                                        </p>
                                        <p className="flex justify-between gap-4 items-center tracking-wide text-sm font-medium text-gray-2">
                                            Taxes <span>₹ {taxes}</span>
                                        </p>
                                        <p className="flex justify-between gap-4 items-center tracking-wide text-sm font-medium text-gray-2">
                                            Commission (3%) <span>₹ {commission.toFixed(2)}</span>
                                        </p>
                                    </div>
                                }
                                color="secondary"
                                offset={4}
                                placement="bottom"
                                showArrow={true}
                            >
                                <span className="flex items-center gap-1 tracking-wide text-base font-medium">
                                    Additional charges <IoMdHelpCircleOutline className="text-xl" />
                                </span>
                            </Tooltip>
                            <span>₹ {(platformFee + taxes + commission).toFixed(2)}</span>
                        </div>
                        {appliedCoupon && (
                            <div className=" flex justify-between items-center">
                                <h3 className="text-base ">
                                    Code ( {appliedCoupon} )
                                </h3>
                                <span className="text-base font-medium ">
                                    - ₹ {discountAmount.toFixed(2)}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="space-y-1">
                        {!appliedCoupon && (
                            <CouponModal onApplyCoupon={applyCoupon} totalPrice={total} />
                        )}
                        {appliedCoupon && (
                            <div className="p-2 bg-emerald-500/70 flex items-center justify-between gap-4 rounded-md">
                                <h3 className="text-base font-semibold flex items-center gap-1 "><TbRosetteDiscount className="text-2xl text-emerald-400" /> {appliedCoupon}</h3>
                                <Button
                                    className="px-4"
                                    size="sm"
                                    color="danger"
                                    variant="shadow"
                                    onClick={removeCoupon}
                                >
                                    Remove Coupon
                                </Button>
                                
                            </div>
                        )}
                    </div>

                    <div className="bg-white/15 p-3 rounded-md">
                        <div className="flex justify-between gap-5 items-center text-2xl font-semibold mb-2">
                            <h4>Total</h4>
                            <h4>₹ {total.toFixed(2)}</h4>
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
