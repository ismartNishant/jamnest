import React from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Ubuntu } from "next/font/google";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

interface SignUpModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onOpenChange }) => {
    const [city, setCity] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState<string>("");

    const cities = [
        { key: "mumbai", title: "Mumbai" },
        { key: "pune", title: "Pune" },
        { key: "delhi", title: "Delhi" },
        { key: "bangalore", title: "Bangalore" },
        { key: "kolkata", title: "Kolkata" },
    ];
    const genders = [
        { key: "male", title: "Male" },
        { key: "female", title: "Female" },
        { key: "other", title: "Other" },
    ];

    // Validate email using regex
    const validateEmail = (value: string) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    };

    // Handle form input change and validation for both name and email
    const handleInputChange = (inputValue: string, fieldName: string) => {
        switch (fieldName) {
            case "name":
                setName(inputValue);
                break;
            case "email":
                setEmail(inputValue);

                if (inputValue === "" || validateEmail(inputValue)) {
                    setEmailError("");
                } else {
                    setEmailError("Please enter a valid email address.");
                }
                break;
            default:
                break;
        }
    };

    // Form submit handler with basic validation
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");

            return;
        }

        console.log(name, email, city, gender);

        setName("");
        setEmail("");
        setCity("");
        setGender("");
        setEmailError("");

        onOpenChange(false);
    };

    return (
        <Modal
            id="signupmodal"

            backdrop="blur"
            className="bg-secondary-900 border-2 border-white/10"
            isDismissable={false}
            isOpen={isOpen}
            placement="top-center"
            size="4xl"
            onOpenChange={onOpenChange}
        >
            <ModalContent className="py-5">
                {(onClose) => (
                    <ModalBody className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
                        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-white">
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
                        <div className="flex flex-col justify-center space-y-4">
                            <h1
                                className={`${ubuntu.className} font-medium text-4xl uppercase tracking-wide`}
                            >
                                Sign Up
                            </h1>
                            <p>Your Party, Your Rules, Our Expertise.</p>
                            <form name="signup-form" id="Signup-form" className="space-y-4" onSubmit={handleFormSubmit}>
                                <Input
                                    isClearable
                                    isRequired
                                    required
                                    classNames={{
                                        input: [
                                            "bg-transparent text-lg font-medium tracking-wider",
                                            "placeholder:text-base tracking-wide placeholder:font-normal ",
                                        ],
                                        label: "pb-1 tracking-wide font-semibold",
                                        errorMessage: "text-sm font-semibold tracking-wide",
                                        description: "text-sm font-semibold tracking-wider",
                                        innerWrapper: "bg-transparent",
                                    }}
                                    id="FullName"
                                    label="Name"
                                    name="fullname"
                                    placeholder="Enter your full name"
                                    type="text"
                                    value={name}
                                    variant="bordered"
                                    onValueChange={(inputValue) =>
                                        handleInputChange(inputValue, "name")
                                    }
                                />
                                <Input
                                    isClearable
                                    isRequired
                                    required
                                    classNames={{
                                        input: [
                                            "bg-transparent text-lg font-medium tracking-wider",
                                            "placeholder:text-base tracking-wide placeholder:font-normal ",
                                        ],
                                        label: "pb-1 tracking-wide font-semibold",
                                        innerWrapper: "bg-transparent",
                                    }}
                                    color={emailError ? "danger" : email ? "success" : "default"}
                                    errorMessage={emailError || "Please enter a valid email"}
                                    id="UserEmail"
                                    isInvalid={!!emailError}
                                    label="Email"
                                    name="useremail"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    variant="bordered"
                                    onValueChange={(inputValue) =>
                                        handleInputChange(inputValue, "email")
                                    }
                                />
                                <Select
                                    isRequired
                                    required
                                    label='City'
                                     name="select-city"
                                     id="City"
                                    placeholder="Select city"
                                    selectedKeys={[city]}
                                    variant="bordered"
                                    onChange={(e) => setCity(e.target.value)} // Corrected: Use `setCity` for city selection
                                >
                                    {cities.map((city) => (
                                        <SelectItem key={city.key} value={city.key}>
                                            {city.title}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Select
                                    isRequired
                                    required
                                    label='Gender'
                                    id="Gender"
                                    name="Gender"
                                    placeholder="Select gender"
                                    value={gender} // Corrected: Use `value` for gender selection
                                    variant="bordered"
                                    onChange={(e) => setGender(e.target.value)} // Corrected: Use `setGender` for gender selection
                                >
                                    {genders.map((gender) => (
                                        <SelectItem key={gender.key} value={gender.key}>
                                            {gender.title}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Button
                                    className="w-full tracking-wider uppercase font-bold text-xl hover:scale-95 duration-300 ease-in-out"
                                    color="primary"
                                    size="lg"
                                    type="submit"
                                    variant="shadow"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </ModalBody>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SignUpModal;
