import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { GrAlarm } from "react-icons/gr";
import { Tooltip } from "@nextui-org/tooltip";
import { Avatar } from "@nextui-org/avatar";
import parse from "html-react-parser";
import Link from "next/link";
import { Card } from "@nextui-org/card";

import PriceCard from "@/components/Common/Cards/PriceCard";
import BannerCarousel from "@/components/Common/Slider/BannerCarousel";
import "./PartyDetails.css";
import PartyDetailFaqs from "@/components/Common/Accordians/PartyDetailFaqs";
import { Button } from "@nextui-org/button";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

interface Party {
  partyId: string;
  title: string;
  image: string;
  hostedBy: string;
  location: string;
  date: string;
  price: string;
  time: string;
  userId: string;
  partiesHosted: string;
  partyType: string;
  bookingOpen: boolean;
}

const PartyDetails: React.FC<{ party: Party }> = ({ party }) => {
  const images = [
    { imgSrc: "/images/banner-carousel/b1.jpg", name: "Banner 1" },
    { imgSrc: "/images/banner-carousel/b3.jpg", name: "Banner 2" },
    { imgSrc: "/images/banner-carousel/b2.jpg", name: "Banner 3" },
    { imgSrc: "/images/banner-carousel/b4.jpg", name: "Banner 4" },
  ];

  const AboutPartContent = `
      <h1>Event Description: The Sufi Soirée – A Night of Soulful Melodies</h1>
      <p>
        Step into an enchanting world of music, rhythm, and devotion at **The
        Sufi Soirée**, a late-night celebration of timeless Qawwali and mystical
        vibes. Immerse yourself in the soulful symphonies of talented artists as
        they weave magic with their voices, taking you on a spiritual and
        melodic journey.
      </p>
      <p>
        Under the twinkling stars, surrounded by a cozy ambiance, this evening
        promises a perfect blend of tradition and togetherness. Sway to the
        powerful rhythms, lose yourself in the heartfelt lyrics, and let the
        music awaken your soul.
      </p>
      <p>
        Whether you’re a Sufi music aficionado or someone looking for an
        unforgettable cultural experience, **The Sufi Soirée** is where
        melodies, conversations, and shared moments come alive.
      </p>
      <div>
        <h1>Highlights</h1>
        <ol>
          <li>
            Live Qawwali Performance:** Featuring renowned artists and their
            captivating renditions.
          </li>
          <li>
            Interactive Singing Circle:** Join in to add your voice to the
            magic.
          </li>
          <li>
            Exquisite Food & Drinks:** Enjoy traditional delicacies and
            signature cocktails.
          </li>
          <li>
            Cozy Vibes:** Cushions, fairy lights, and an ambiance perfect for
            soulful nights.
          </li>
        </ol>
      </div>
      <p>
        Get ready for a night where hearts beat to the rhythm of Sufi music.
        **Reserve your spot now and let the melodies take over!**
      </p>
  `;

  return (
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative w-full   h-56 lg:h-[30rem] rounded-3xl overflow-hidden border-2 border-white/10">
          <Image
            fill
            priority
            alt={party.title}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            src={party.image}
          />
        </div>
        <div className="w-full flex justify-between gap-10 py-2 lg:py-5 ">
          <div className="w-full max-w-screen-xl space-y-4 lg:space-y-10">
            <div className="space-y-2 lg:space-y-5">
              <h1
                className={`text-2xl lg:text-5xl font-bold  ${ubuntu.className}`}
              >
                {party.title}
              </h1>
              <div className=" flex  items-center gap-2.5 lg:gap-5 flex-wrap">
                <Tooltip
                  color="primary"
                  content={<p className="p-2 text-base ">{party.location} </p>}
                  offset={4}
                  placement="bottom"
                  showArrow={true}
                >
                  <p className="flex items-center gap-2 text-sm lg:text-xl bg-white/10 p-1 lg:p-2 rounded-lg border-2 border-white/10">
                    <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-500 ">
                      <GrLocation />
                    </span>
                    {party.location.length > 30
                      ? `${party.location.slice(0, 30)}...`
                      : party.location}
                  </p>
                </Tooltip>

                <p className="flex items-center gap-2 text-sm lg:text-xl bg-white/10 p-1 lg:p-2 rounded-lg border-2 border-white/10">
                  <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-500 ">
                    <LuCalendarRange />
                  </span>
                  {party.date}
                </p>
                <p className="flex items-center gap-2 text-sm lg:text-xl bg-white/10 p-1 lg:p-2 rounded-lg border-2 border-white/10">
                  <span className="p-1.5 rounded-lg bg-yellow-500/20 text-yellow-500 ">
                    <GrAlarm />
                  </span>
                  {party.time}
                </p>
              </div>
            </div>
            <div className="space-y-2 lg:space-y-5">
              <h1
                className={`${ubuntu.className} text-2xl lg:text-4xl font-semibold`}
              >
                Hosted By
              </h1>
              <div className="w-full max-w-screen-md mr-auto lg:py-5 py-2 p-2 lg:px-10  border-2 border-white/10 flex items-center justify-between rounded-xl bg-white/5 ">
                <div className="flex items-center gap-3 lg:gap-5">
                  <Link href={`/user/${party.userId}`}>
                    <Avatar
                      className="w-14 h-14 lg:w-28 lg:h-28 text-large border-2 border-white/20  lg:rounded-[35px] hover:scale-95 duration-300 ease-in-out"
                      src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    />
                  </Link>
                  <h1 className="text-xl lg:text-3xl font-semibold">
                    {party.hostedBy}
                  </h1>
                </div>

                <div className="text-center bg-primary p-2 lg:p-4 rounded-lg">
                  <h1 className="text-3xl lg:text-5xl font-bold tracking-wide">
                    {party.partiesHosted}
                  </h1>
                  <p className="text-xs lg:text-base">Parties Hosted</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 lg:space-y-5">
              <h1
                className={`${ubuntu.className} text-2xl lg:text-4xl font-semibold`}
              >
                About the Party
              </h1>
              <div className="about-party-content flex flex-col gap-2 lg:gap-4">
                {parse(AboutPartContent)}
              </div>
            </div>
            <PartyDetailFaqs />
          </div>
          <div className="w-full relative max-w-sm">
            <div className="sticky top-24">
              {party.bookingOpen ? (
                <PriceCard price={party.price} />
              ) : (
                <Card className="p-5 space-y-4 hidden lg:block  ">
                  <Button className="text-lg w-full" isDisabled  >Bookking Closed</Button>
                  <h1 className="text-xl flex items-center  gap-2"> Better luck next time! <LiaPrayingHandsSolid className="text-primary text-4xl " /> </h1>
                </Card>
              )}
            </div>
          </div>
        </div>
        <BannerCarousel carouselBannerImages={images} />
        <div>
          <h1
            className={`${ubuntu.className} text-2xl lg:text-4xl font-semibold`}
          >
            Discover Similar House Parties
          </h1>
        </div>
      </div>
      <div />
    </section>
  );
};

export default PartyDetails;
