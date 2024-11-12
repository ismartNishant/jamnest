'use client'
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";

import MainLayout from "@/components/Layout/MianLayout";


type FormData = {
  Name: string;
  Email: string;
  Contact: string;
  Message: string;
};

const ContactUS = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Contact: "",
    Message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = {
      Name: formData.Name,
      Email: formData.Email,
      Contact: formData.Contact,
      Message: formData.Message,
    };

    const baseUrl =
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY4MDYzZTA0MzA1MjY1NTUzNDUxMzYi_pc";

    const url = new URL(baseUrl);

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key as keyof FormData]);
    });

    fetch(url.toString())
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setFormData({
          Name: "",
          Email: "",
          Contact: "",
          Message: "",
        });
        showAlert();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const showAlert = () => {
    alert("Your message has been sent!");
  };

  return (
    <MainLayout>
      <section className="relative">
        <div className="flex flex-col gap-20 relative ">
          <div className="absolute top-0 w-full h-[500px] overflow-hidden z-10 ">
            <Image
              fill
              alt="banner-office-image"
              className="object-cover w-full h-full"
              src="/images/office.webp"
            />
            <div className="absolute inset-0 bg-black  opacity-65" />
          </div>

          <div className="flex flex-col gap-5 items-center justify-center  z-20  pt-32 lg:pt-40 pb-20 px-4">
            <h1 className="text-5xl lg:text-7xl font-bold =text-center">Contact Us</h1>
            <p className="max-w-xl text-lg text-center">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>

            <form
              className="mx-auto w-full max-w-screen-md flex flex-col gap-5 p-3 lg:p-12 bg-gradient-to-br from-primary/50 to-secondary/50 border border-white/50 rounded-2xl"
              onSubmit={handleSubmit}
            >
          
              <Slide direction="up">
                <div className="grid w-full items-center gap-1.5">
                  <Input
                    required
                    variant="bordered"
                    className=""
                    classNames={{
                      input: ["bg-transparent text-base lg:text-lg"],
                      innerWrapper: "bg-transparent ",
                      inputWrapper: [
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
                    id="Name"
                    label="Name*"
                    type="text"
                    value={formData.Name}
                    onChange={handleChange}
                  />
                </div>
              </Slide>

              <Slide direction="up">
                <div className="grid w-full items-center gap-1.5">
                  <Input
                    required
                    variant="bordered"
                    className=""
                    classNames={{
                      input: ["bg-transparent text-base lg:text-lg"],
                      innerWrapper: "bg-transparent ",
                      inputWrapper: [
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
                    id="Email"
                    label="Email*"

                    type="email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
              </Slide>

              <Slide direction="up">
                <div className="grid w-full items-center gap-1.5">
                  <Input
                    required
                    variant="bordered"
                    className=""
                    classNames={{
                      input: ["bg-transparent text-base lg:text-lg"],
                      innerWrapper: "bg-transparent ",
                      inputWrapper: [
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
                    id="ContactUS"
                    label="Phone Number*"
                    maxLength={10} // Limit to 10 digits
                    pattern="\\d{10}" // Must be exactly 10 digits

                    type="tel"
                    value={formData.Contact}
                    onChange={(e) => {
                      const value = e.target.value;

                      // Ensure the value is numeric and only up to 10 digits
                      if (/^\d{0,10}$/.test(value)) {
                        handleChange(e); // Only update if the value passes validation
                      }
                    }}
                  />
                </div>
              </Slide>

              <Slide direction="up">
                <div className="grid w-full items-center gap-1.5">
                  <Textarea
                    required
                    label="Message"
                    variant="bordered"
                    className=""
                    classNames={{
                      input: ["bg-transparent text-base lg:text-lg"],
                      innerWrapper: "bg-transparent ",
                      inputWrapper: [
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
                    id="Message"

                    value={formData.Message}
                    onChange={handleChange}
                  />
                </div>
              </Slide>

              <Slide direction="up">
                <div className=" flex items-start bg-black/15 rounded-xl backdrop-blur-sm p-4">
                  <Checkbox 
                    className="before:border-white"
                    id="terms1"
                  />
                  <p className="text-xs lg:text-sm">
                    By submitting this form you agree to our terms and
                    conditions and our privacy policy which explains how we may
                    collect, use and disclose your personal information
                    including to third parties.
                  </p>
                </div>
              </Slide>

              <Zoom>
                <Button
                variant="solid"
                  className="uppercase bg-white font-bold text-black hover:scale-105 duration-300 ease-in-out tracking-wide rounded-full md:text-xl w-full"
                  type="submit"
                >
                  Submit
                </Button>
              </Zoom>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUS;
