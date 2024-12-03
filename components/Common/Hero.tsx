import React from "react";
import { Button } from "@nextui-org/button";
import { GiPartyPopper } from "react-icons/gi";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700']
})

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative grid min-h-screen w-full grid-cols-1 mx-auto gap-4 lg:gap-0  lg:grid-cols-6 px-4 py-20 lg:p-24 items-center justify-center">
        <div className="w-full lg:col-span-4   space-y-2 lg:space-y-8 lg:order-first lg:pt-10 ">
          <h1 className="text-4xl lg:text-7xl font-semibold text-center md:text-left relative">
            Celebrate Together, <span className={`${ubuntu.className} text-transparent text-5xl  font-bold lg:text-9xl bg-clip-text bg-gradient-to-r from-primary to-secondary`}> Anywhere! </span>
            <Image src="/images/icons/confetti2.svg" className="absolute  top-0  right-32 hidden md:block" alt="icon-img" width={100} height={100} />
          </h1>
          <p className="text-base lg:text-xl tracking-wider lg:max-w-screen-md w-full text-gray-3 text-center md:text-left">
            Host your own unforgettable party or join others in the ultimate social experience. Find, join, or create events that bring people together for moments worth celebrating!
          </p>
          <div className="relative flex justify-center  md:justify-start">
            <Button
              className="uppercase font-semibold hover:scale-110 duration-300 ease-in-out  text-lg lg:text-xl"
              color="primary"
              endContent={<GiPartyPopper className="text-2xl" />}
              radius="full"
              variant="shadow"
            >
              Host A Party
            </Button>
            <Image src="/images/icons/disco-ball.svg" className="absolute top-10 lg:top-12 left-28" alt="icon-img" width={100} height={100} />
          </div>
          <div className="">
            {/* <Image src="/images/icons/mask.svg" className="absolute top-20 " alt="icon-img" width={100} height={100} /> */}
          </div>
        </div>

        <div className="w-full lg:col-span-2 mx-auto text-center  relative lg:pt-10  order-first">
          <div className="relative w-full h-56 lg:h-[400px] overflow-hidden rounded-xl lg:rounded-3xl shadow-white">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
