// CouponModal.tsx
"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { TbRosetteDiscount } from "react-icons/tb";
import { Input } from "@nextui-org/input";
import { useToast } from "@/hooks/use-toast";

interface CouponModalProps {
  onApplyCoupon: (code: string, discountAmount: number) => void;
  totalPrice: number; // The total price for calculating the discount
}

const CouponModal: React.FC<CouponModalProps> = ({ onApplyCoupon, totalPrice }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [couponCode, setCouponCode] = useState("");
  const { toast } = useToast();

  // Example coupons with a value and discount type (percentage or fixed amount)
  const couponList = [
    { code: "DISCOUNT10", description: "10% off on total price", value: 10, type: "percent" },
    { code: "BOONZA", description: "Get ₹50 off", value: 50, type: "fixed" },
    { code: "WELCOME100", description: "Get ₹100 off", value: 100, type: "fixed" },
  ];

  // Function to apply the coupon
  const handleCouponApply = (code: string, type: string, value: number) => {
    setCouponCode(code);
    let discountAmount = 0;
    if (type === "percent") {
      // Apply percentage discount
      discountAmount = (totalPrice * value) / 100; // Calculate percentage discount based on totalPrice
    } else if (type === "fixed") {
      // Fixed discount value
      discountAmount = value;
    }
    onApplyCoupon(code, discountAmount); // Call callback to apply discount
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim()) {
      const appliedCoupon = couponList.find((coupon) => coupon.code === couponCode);
      if (appliedCoupon) {
        handleCouponApply(appliedCoupon.code, appliedCoupon.type, appliedCoupon.value);
        toast({
          variant: "default",
          className: "bg-success border-0 text-2xl text-black font-bold tracking-wide",
          title: "Coupon Successfully Applied",
          description: `Coupon code ${couponCode} applied.`,
        });
        setCouponCode(""); // Reset input field
        onOpenChange(); // Close modal
      } else {
        toast({
          variant: "destructive",
          className: "bg-danger border-0 text-2xl text-black font-bold tracking-wide",
          title: "Invalid Coupon",
          description: "The coupon code you entered is not valid.",
        });
      }
    }
  };

  return (
    <>
      <Button
        className="uppercase w-full text-lg bg-black"
        radius="md"
        size="lg"
        startContent={<TbRosetteDiscount className="text-3xl text-primary" />}
        onPress={onOpen}
      >
        Apply Coupon Code
      </Button>
      <Modal
        backdrop="blur"
        size="lg"
        className="bg-secondary-900 border-2 border-white/15"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl">Apply Coupon Code</ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleFormSubmit}
                  className="p-2 flex items-center gap-2 justify-between bg-black rounded-lg"
                >
                  <Input
                    required
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="bg-none"
                    startContent={<TbRosetteDiscount className="text-3xl text-primary" />}
                    classNames={{
                      input: ["bg-none text-base lg:text-lg"],
                      innerWrapper: "bg-none",
                      inputWrapper: [
                        "shadow-xl",
                        "dark:bg-transparent",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-none",
                        "dark:hover:bg-none",
                        "group-data-[focus=true]:bg-none",
                        "dark:group-data-[focus=true]:bg-transparent",
                        "!cursor-text",
                      ],
                    }}
                    id="coupancode"
                    placeholder="Enter Coupon Code"
                    type="text"
                  />
                  <Button
                    type="submit"
                    variant="light"
                    color="success"
                    radius="full"
                    disabled={!couponCode.trim()}
                  >
                    Apply
                  </Button>
                </form>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Available Coupons</h3>
                  <div className="space-y-3">
                    {couponList.map((coupon) => (
                      <div
                        key={coupon.code}
                        className="flex items-end justify-between p-4 bg-white/15 backdrop-blur-sm rounded-lg"
                      >
                        <div className="space-y-3">
                          <h1 className="text-lg font-medium">{coupon.description}</h1>
                          <div>
                            <span className="text-lg font-bold border-[3px] border-primary/40 rounded-md text-primary border-dashed py-0.5 bg-primary/10 tracking-widest px-4">
                              {coupon.code}
                            </span>
                          </div>
                        </div>
                        <Button
                          radius="sm"
                          color="primary"
                          variant="shadow"
                          className="uppercase font-semibold text-base tracking-wide"
                          onClick={() =>
                            handleCouponApply(coupon.code, coupon.type, coupon.value)
                          }
                        >
                          Apply Coupon
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  className="uppercase text-lg font-medium"
                  variant="solid"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CouponModal;
