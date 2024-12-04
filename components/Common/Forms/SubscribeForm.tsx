"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { LuSend } from "react-icons/lu";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Validate email using regex
  const validateEmail = (value: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  };

  // Handle input changes for email
  const handleInputChange = (inputValue: string) => {
    setEmail(inputValue);

    // Validate email dynamically
    if (inputValue === "" || validateEmail(inputValue)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Final validation before submission
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Reset email and clear errors after successful submission
    alert(`Email Submitted: ${email}`);
    setEmail("");
    setEmailError("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs w-full ">
      <Input
        value={email}
        className=""
        onChange={(e) => handleInputChange(e.target.value)}
        classNames={{
          input: ["bg-black text-lg font-semibold "],
          
          inputWrapper: [
            "pr-2",
            "h-14",
            "shadow-xl",
            "bg-dark-2",
            "dark:bg-black",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-black",
            "dark:hover:bg-black",
            "group-data-[focus=true]:bg-black",
            "dark:group-data-[focus=true]:bg-black",
            "!cursor-text",
          ],
        }}
        endContent={
          <Button
            isIconOnly
            aria-label="send"
            className=""
            color="primary"
            radius="full"
            type="submit"
            variant="solid"
          >
            <LuSend className="text-2xl hover:rotate-45 duration-300 ease-in-out" />
          </Button>
        }
        color={emailError ? "danger" : email ? "success" : "default"}
        isInvalid={!!emailError}
        errorMessage={emailError}
        id="footer-subscribe-email"
        placeholder="Enter Email"
        variant="bordered"
        radius="full"
        size="md"
        type="email"
      />

    </form>
  );
};

export default SubscribeForm;
