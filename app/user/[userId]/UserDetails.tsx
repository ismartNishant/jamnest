import "./UserDetails.css";
import UserProfileCard from "@/components/Common/Cards/UserProfileCard";
import Gallery from "@/components/Common/Profile/Gallery";
import SliderOne from "@/components/Common/Slider/SliderOne";
import { CarouselItem } from "@/components/ui/carousel";
import { PartiesData } from "@/components/Data/PartiesData";
import Link from "next/link";
import { Card } from "@nextui-org/card";
import { LuCalendarRange } from "react-icons/lu";
import Image from "next/image";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import PartyCardThree from "@/components/Common/Cards/PartycCardThree";


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
              <PartyCardThree
              partyType={party.partyType}
                location={party.location}
                key={party.partyId}
                partyId={party.partyId}
                image={party.image}
                title={party.title}
                date={party.date}
                rating={party.rating}
                aboutParty={party.aboutParty}
              />

            </CarouselItem>
          ))}
        </SliderOne>
        <Gallery images={imagesArray} />
        <div />
      </div>
    </section>
  );
};

export default UserDetails;
