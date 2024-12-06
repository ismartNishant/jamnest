import "./UserDetails.css";
import UserProfileCard from "@/components/Common/Profile/UserProfileCard";
import Gallery from "@/components/Common/Profile/Gallery";
import SliderOne from "@/components/Common/Slider/SliderOne";
import { CarouselItem } from "@/components/ui/carousel";
import { PartiesData } from "@/components/Data/PartiesData";
import Link from "next/link";
import { Card } from "@nextui-org/card";
import { LuCalendarRange } from "react-icons/lu";
import Image from "next/image";
import { FaRegStarHalfStroke } from "react-icons/fa6";


interface User {
  userId: string;
  name: string;
  partiesAttended: string;
  partiesHosted: string;
  avgRating: string;
  verifiedInfo: string[];
  profileStatus: string;
  profileImage: string;
  about: string;
  languagesSpoken: string[];
  location: string;
  funFact: string;
  uselessSkill: string;
  favoriteMovie: string;
  favoriteTVShow: string;
  interests: string[];
}

const UserDetails: React.FC<{ user: User }> = ({ user }) => {
  const imagesArray = [
    "/images/partyImgs/img1.jpg",
    "/images/partyImgs/img2.jpg",
    "/images/partyImgs/img3.jpg",
    "/images/partyImgs/img4.jpg",
    "/images/partyImgs/img5.jpg",
    "/images/partyImgs/img6.jpg",
    "/images/partyImgs/img7.jpg",
    "/images/partyImgs/img8.jpg",
];
  return (
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 lg:space-y-10 space-y-5 ">
      <UserProfileCard
        avgRating={user.avgRating}
        name={user.name}
        partiesAttended={user.partiesAttended}
        partiesHosted={user.partiesHosted}
        profileImage={user.profileImage}
      />
      <div className="">
          <SliderOne title="Hosted Parties">
            {PartiesData.map((party, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <Link href={`/Party/${party.partyId}`}>
                  <Card className="p-2 h-full space-y-2 bg-secondary/10 hover:scale-95 duration-300 ease-in-out border-2 border-white/15">
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        fill
                        alt="party-img"
                        className="w-full h-full object-cover rounded-lg"
                        src={party.image}
                      />
                    </div>
                    <h1 className="text-xl font-medium">
                      {party.title.length > 40
                        ? `${party.title.slice(0, 40)}...`
                        : party.title}
                    </h1>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-base">
                        <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-500">
                          <LuCalendarRange />
                        </span>
                        {party.date}
                      </div>
                      <div className="flex items-center text-xl gap-2">
                        <FaRegStarHalfStroke className="text-primary" />
                        <p>4.5 / 5</p>
                      </div>
                    </div>
                    <p>
                      {party.aboutParty.length > 80
                        ? `${party.aboutParty.slice(0, 80)}...`
                        : party.aboutParty}
                    </p>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </SliderOne>
          <Gallery images={imagesArray}  />
          <div />
        </div>
    </section>
  );
};

export default UserDetails;
