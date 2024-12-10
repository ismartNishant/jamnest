import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from "react";
import { GrChat } from "react-icons/gr";
import { HiHomeModern } from "react-icons/hi2";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaRegPenToSquare } from 'react-icons/fa6'
import { HeadingOne } from "../Headings/HeadingOne";
import JamInput from "../Inputs/JamInput";
import { Input } from "@nextui-org/input";
import Interests from "../Modal/Interests";

const PersonalInfo = () => {
    const [languages, setLanguages] = useState<Set<string>>(new Set());
    const [city, setCity] = React.useState("");
    const [profession, setProfession] = useState("");
    const [funFact, setFunFact] = useState("");

    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguages(new Set(e.target.value.split(",")));
        setCity(e.target.value);
    };
    const Languages = [
        { key: "English", label: "English" },
        { key: "Hindi", label: "Hindi" },
        { key: "Marathi", label: "Marathi" },
        { key: "Tamil", label: "Tamil" },
        { key: "Telugu", label: "Telugu" },
        { key: "Malayalam", label: "Malayalam" },
        { key: "Kannada", label: "Kannada" },
        { key: "Gujarati", label: "Gujarati" },
        { key: "Bengali", label: "Bengali" },
        { key: "Punjabi", label: "Punjabi" },
        { key: "Odia", label: "Odia" },
        { key: "Assamese", label: "Assamese" },
    ];


    console.log(Languages);

    const cities = [
        { key: "mumbai", label: "Mumbai" },
        { key: "pune", label: "Pune" },
        { key: "delhi", label: "Delhi" },
        { key: "bangalore", label: "Bangalore" },
        { key: "kolkata", label: "Kolkata" },
    ];

    // Form submit handler with basic validation
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="rounded-lg border-2 border-white/10 bg-white/5 p-2 lg:p-5 space-y-4 lg:space-y-8">
            <HeadingOne>Personal Information</HeadingOne>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 ">
                <form
                    className=" mx-auto w-full space-y-4 max-w-xl"
                    onSubmit={handleFormSubmit}
                >
                    <div className="flex gap-5  items-center">
                        <div className=" rounded-lg bg-primary/10 p-2.5 ">
                            <HiHomeModern className="text-primary text-2xl" />
                        </div>
                        <h2 className="text-lg fonr-medium">I live in {city} </h2>
                        <Select
                            className=""
                            classNames={{
                                trigger: "min-h-12 bg-black ",
                            }}
                            placeholder="Select city"
                            selectedKeys={[city]}
                            variant="bordered"
                            onChange={handleSelectionChange}
                        >
                            {cities.map((city) => (
                                <SelectItem key={city.key}>{city.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex gap-5  items-center">
                        <div className=" rounded-lg bg-yellow-500/10 p-2.5">
                            <TbBriefcaseFilled className="text-yellow-500 text-2xl" />
                        </div>
                        <h2 className="text-lg fonr-medium">I am {profession}</h2>
                        <Input
                            variant="bordered"
                            placeholder="Profession"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            classNames={{
                                input: [
                                    "text-lg font-medium tracking-wider",
                                    "placeholder:text-base tracking-wide placeholder:font-normal ",
                                ],
                                inputWrapper: "h-12 bg-black",
                                innerWrapper: "bg-transparent",
                            }}
                        />
                    </div>
                    <div className="flex gap-5  items-center">
                        <div className=" rounded-lg bg-sky-500/10 p-2.5 ">
                            <GrChat className="text-sky-500 text-2xl" />
                        </div>
                        <h2 className="text-lg fonr-medium">I speak in {languages}</h2>
                        <Select
                            classNames={{
                                trigger: "min-h-12 bg-black ",
                            }}
                            placeholder="Select languages"
                            selectedKeys={languages}
                            selectionMode="multiple"
                            variant="bordered"
                            onChange={handleSelectionChange}
                        >
                            {Languages.map((language) => (
                                <SelectItem key={language.key} className="text-xl">
                                    {language.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <div className="flex gap-5  items-center">
                        <div className=" rounded-lg bg-emerald-500/10 p-2.5 ">
                            <FaRegFaceSmileBeam className="text-emerald-500 text-2xl" />
                        </div>
                        <h2 className="text-lg fonr-medium">A fun fact about me is{funFact}</h2>
                        <Input
                            placeholder="Fun fact"
                            variant="bordered"
                            value={funFact}
                            onChange={(e) => setFunFact(e.target.value)}
                            classNames={{
                                input: [
                                    "text-lg font-medium tracking-wider",
                                    "placeholder:text-base tracking-wide placeholder:font-normal ",
                                ],
                                inputWrapper: "h-12 bg-black",
                                innerWrapper: "bg-transparent",
                            }}
                        />
                    </div>
                    <div className=" flex justify-end gap-5">
                        <Button
                            startContent={<FaRegPenToSquare />}
                            className="uppercase lg:text-base font-semibold"
                            color="primary"
                            type="button"
                            variant="shadow"
                        >
                            Edit
                        </Button>
                        <Button
                            className="uppercase lg:text-base font-semibold"
                            color="primary"
                            type="submit"
                            variant="ghost"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                <div className="space-y-4">
                    <div className=" flex items-center gap-2 ">
                        <span>
                            <BsEmojiSunglasses className="text-3xl" />{" "}
                        </span>
                        <h1 className="text-2xl uppercase font-bold tracking-wide">
                            Interests
                        </h1>
                    </div>
                    <Interests />

                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
