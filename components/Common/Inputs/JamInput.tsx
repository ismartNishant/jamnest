import { Input } from "@nextui-org/input";
import React from "react";

interface JamInputProps {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
  variant?: "bordered" | "flat" | "faded" | "underlined";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: "danger" | "success" | "default";
  errorMessage?: string;
  isInvalid?: boolean;
  required?: boolean; 
}

const JamInput: React.FC<JamInputProps> = ({
  id,
  name,
  placeholder,
  type = "text",
  className = "w-full ",
  variant = "bordered",
  value,
  onChange,
  color = "default",
  errorMessage = "",
  isInvalid = false,
  required = false, // Default to false unless passed
}) => {
  return (
    <Input
      className={className}
      classNames={{
        input: [
          "text-lg font-medium tracking-wider",
          "placeholder:text-base tracking-wide placeholder:font-normal ",
        ],
        inputWrapper: "h-12 bg-black",
        errorMessage: "text-sm font-semibold tracking-wide",
        description: "text-sm font-semibold tracking-wider",
        innerWrapper: "bg-transparent",
      }}
      color={color} // Pass the color dynamically
      errorMessage={errorMessage} // Display error message
      id={id}
      isInvalid={isInvalid} // Handle invalid input state
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      variant={variant}
      onChange={onChange}
      required={required} // Dynamically pass required
    />
  );
};

export default JamInput;
