import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/modal";
import React, { useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { TbPhone } from "react-icons/tb";
import SignUpModal from "./SignUpModal";

export default function AuthButton() {

const { isOpen: isVerificationOpen, onOpen: onVerificationOpen, onOpenChange: onVerificationOpenChange } = useDisclosure();
    
const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onOpenChange: onSignUpOpenChange } = useDisclosure();

const [value, setValue] = React.useState(""); // Phone number state
const [otp, setOtp] = React.useState(""); // OTP state
const [otpStage, setOtpStage] = React.useState(false); // OTP stage state
const [otpError, setOtpError] = React.useState(""); // OTP error state
const [isOtpVerified, setIsOtpVerified] = React.useState(false); // OTP verification success state
const [hasInteracted, setHasInteracted] = React.useState(false); // To track if the user has interacted with inputs
const [remainingTime, setRemainingTime] = React.useState(60); // Timer for OTP resend
const [isTimerActive, setIsTimerActive] = React.useState(false); // To track if timer is running

    // Validate phone number for 10 digits
    const validatePhoneNumber = (value: string) => /^\d{10}$/.test(value);

    // Validate OTP for 6 digits
    const validateOtp = (value: string) => /^\d{6}$/.test(value);

    // Generalized validation and color logic for both phone and OTP
    const validateInput = (input: string, type: "phone" | "otp") => {
        if (type === "phone") {
            return validatePhoneNumber(input);
        } else if (type === "otp") {
            return validateOtp(input);
        }

        return false;
    };

    const handleInputChange = (input: string, type: "phone" | "otp") => {
        setHasInteracted(true);
        const numericValue = input.replace(/\D/g, "");
        if (type === "phone") {
            setValue(numericValue);
        } else if (type === "otp") {
            setOtp(numericValue);
            setOtpError(
                numericValue.length === 6 && !validateInput(numericValue, "otp")
                    ? "Please enter a valid 6-digit OTP"
                    : ""
            );
        }
    };


    // Handle OTP stage after clicking "Get OTP"
    // Handle OTP stage after clicking "Get OTP"
    const handleGetOtp = (event: React.FormEvent) => {
        event.preventDefault();

        if (value === "") {
            setOtpError("Required"); // Show "Required" error if the phone number is empty
            return;
        }

        if (!isPhoneInvalid && validatePhoneNumber(value)) {
            setOtpError(""); // Clear any existing errors
            setOtpStage(true); // Proceed to OTP stage
            setIsTimerActive(true); // Start the timer
        } else {
            setOtpError("Please enter a valid 10-digit phone number"); // Error for invalid phone number
        }
    };

    // Handle OTP verification
    const handleVerifyOtp = (event: React.FormEvent) => {
        event.preventDefault();
        if (!isOtpInvalid && otp.length === 6) {
            setIsOtpVerified(true);
            onVerificationOpenChange(); // Close verification modal
            onSignUpOpen(); // Open sign-up modal
            resetForm(); // Optionally reset the form
        }
    };

    // Reset form fields
    const resetForm = () => {
        setValue("");
        setOtp("");
        setOtpStage(false);
        setOtpError("");
        setHasInteracted(false); // Reset interaction state
        setIsTimerActive(false); // Reset timer state
        setRemainingTime(60); // Reset timer to 60 seconds
    };

    // Validate phone number state
    const isPhoneInvalid = value !== "" && !validatePhoneNumber(value);
    // Validate OTP state
    const isOtpInvalid = otp !== "" && !validateOtp(otp);

    // Color logic for phone number input
    const getPhoneColor = () => {
        if (!hasInteracted) return "default";

        return isPhoneInvalid ? "danger" : value === "" ? "default" : "success";
    };

    // Color logic for OTP input
    const getOtpColor = () => {
        if (!hasInteracted) return "default";

        return isOtpInvalid ? "danger" : otp === "" ? "default" : "success";
    };

    // Timer logic
    useEffect(() => {
        if (isTimerActive && remainingTime > 0) {
            const timer = setInterval(() => {
                setRemainingTime((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isTimerActive, remainingTime]);

    return (
        <>
            <Button
                isIconOnly
                className="hover:scale-105  text-xl w-10 h-10 lg:w-12 lg:h-12"
                color="primary"
                radius="full"
                variant="shadow"
                onClick={onVerificationOpen}
            >
                <FaRegUser />
            </Button>
            <Modal
                backdrop="blur"
                className="bg-secondary-900 border-2 border-white/10 "
                classNames={{
                    closeButton: 'bg-primary/20 text-white hover:bg-primary'
                }}
                isDismissable={false}
                isOpen={isVerificationOpen}
                placement="center"
                size="4xl"
                onOpenChange={onVerificationOpenChange}
            >
                <ModalContent className="p-4 pt-10 lg:p-5 ">
                    {(onClose) => (
                        <>
                            <ModalBody className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center p-0">
                                <div className="relative w-full h-56 lg:h-96 overflow-hidden rounded-3xl shadow-white">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className="absolute inset-0 w-full h-full object-cover z-10"
                                    >
                                        <source src="/images/party.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="font-HaloDek text-5xl lg:text-6xl tracking-wider text-center pb-4">
                                        JamNest
                                    </h1>

                                    <form name="otpform"
                                    id="otpForm"
                                        className="space-y-4"
                                        onSubmit={otpStage ? handleVerifyOtp : handleGetOtp}
                                    >
                                        {!otpStage ? (
                                            <>
                                                <h1 className={`font-Ubuntu text-xl lg:text-2xl font-normal uppercase lg:pb-5 text-center`}>
                                                    Verify your mobile number
                                                </h1>
                                                <Input
                                                    isRequired
                                                    name="mobilenumber"
                                                    id="phoneNumber"
                                                    required
                                                    classNames={{
                                                        input: [
                                                            "bg-transparent text-xl font-bold tracking-wider",
                                                            "placeholder:text-lg tracking-wide placeholder:font-normal ",
                                                        ],
                                                        label: "pb-1 tracking-wide font-semibold",
                                                        errorMessage: "text-sm font-semibold tracking-wide",
                                                        innerWrapper: "bg-transparent ",
                                                        inputWrapper: [
                                                            "shadow-xl",
                                                            "dark:bg-secondary-900",
                                                            "backdrop-blur-xl",
                                                            "backdrop-saturate-200",
                                                            "group-data-[focus=true]:bg-default/50",
                                                            "dark:group-data-[focus=true]:bg-default/50",
                                                            "!cursor-text",
                                                        ],
                                                    }}
                                                    color={getPhoneColor()}
                                                    endContent={
                                                        <TbPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0 transform scale-x-[-1]" />
                                                    }
                                                    errorMessage="Please enter a valid 10-digit phone number"
                                                    inputMode="numeric" // Hint for mobile numeric keypad
                                                    isInvalid={isPhoneInvalid}
                                                    label="Number"
                                                    maxLength={10}
                                                    pattern="[0-9]*" // Ensure only numeric input is allowed
                                                    placeholder="Enter your number"
                                                    type="tel"
                                                    value={value}
                                                    variant="bordered"
                                                    onValueChange={(inputValue) =>
                                                        handleInputChange(inputValue, "phone")
                                                    }
                                                />
                                                <Button
                                                    className="w-full tracking-wider uppercase font-bold text-xl hover:scale-95 duration-300 ease-in-out"
                                                    color="primary"
                                                    disabled={isPhoneInvalid} // Disable button if the number is invalid
                                                    size="lg"
                                                    type="submit" // Submit the form
                                                    variant="shadow"
                                                >
                                                    Get OTP
                                                </Button>
                                            </>
                                        ) : (
                                            // OTP stage - render OTP input and verify button
                                            <>
                                                <div className=" space-y-0.5 ">
                                                    <h1 className={`font-Ubuntu text-xl lg:text-2xl font-normal uppercase lg:pb-5 text-center`}>
                                                        OTP Verification
                                                    </h1>
                                                    <p>
                                                        Enter the OTP sent to{" "}
                                                        <span className="text-primary font-semibold pl-2 text-lg tracking-wider">
                                                            +91 {value}
                                                        </span>
                                                    </p>
                                                </div>
                                                <Input
                                                name="otpNumber"
                                                    id="otpNumber"
                                                    classNames={{
                                                        input: [
                                                            "bg-transparent text-xl font-bold tracking-wider",
                                                            "placeholder:text-lg tracking-wide placeholder:font-normal ",
                                                        ],
                                                        label: "pb-1 tracking-wide font-semibold",
                                                        errorMessage: "text-sm font-semibold tracking-wide",
                                                        innerWrapper: "bg-transparent ",
                                                        inputWrapper: [
                                                            "shadow-xl",
                                                            "dark:bg-secondary-900",
                                                            "backdrop-blur-xl",
                                                            "backdrop-saturate-200",
                                                            "group-data-[focus=true]:bg-default/50",
                                                            "dark:group-data-[focus=true]:bg-default/50",
                                                            "!cursor-text",
                                                        ],
                                                    }}
                                                    color={getOtpColor()}
                                                    endContent={
                                                        <TbPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0 transform scale-x-[-1]" />
                                                    }
                                                    errorMessage={otpError}
                                                    inputMode="numeric"
                                                    isInvalid={isOtpInvalid}
                                                    label="OTP"
                                                    maxLength={6}
                                                    pattern="[0-9]*"
                                                    placeholder="Enter OTP"
                                                    type="text"
                                                    isRequired
                                                    required
                                                    value={otp}
                                                    variant="bordered"
                                                    onValueChange={(inputValue) =>
                                                        handleInputChange(inputValue, "otp")
                                                    }
                                                />
                                                <Button
                                                    className="w-full tracking-wider uppercase font-bold text-xl hover:scale-95 duration-300 ease-in-out"
                                                    color="primary"
                                                    disabled={isOtpInvalid} // Disable button if OTP is invalid
                                                    size="lg"
                                                    type="submit"
                                                    variant="shadow"
                                                >
                                                    Verify OTP
                                                </Button>

                                                <div className="text-center text-sm">
                                                    {remainingTime > 0 ? (
                                                        <p className="text-lg tracking-wide">
                                                            Resend OTP in{" "}
                                                            <span className="font-bold text-3xl px-2">
                                                                {remainingTime}
                                                            </span>{" "}
                                                            seconds
                                                        </p>
                                                    ) : (
                                                        <Button
                                                            className="text-lg font-semibold tracking-wide uppercase bg-white text-black hover:scale-95 duration-300 ease-in-out"
                                                            onClick={() => {
                                                                setOtpStage(false);
                                                                setRemainingTime(60); // Reset timer for next OTP
                                                                setIsTimerActive(true);
                                                            }}
                                                        >
                                                            Resend OTP
                                                        </Button>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </form>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <SignUpModal
                isOpen={isSignUpOpen} onOpenChange={onSignUpOpenChange}
            />
        </>
    );
}
