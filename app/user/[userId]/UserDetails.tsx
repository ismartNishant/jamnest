import "./UserDetails.css";
import UserProfileCard from "@/components/Common/Profile/UserProfileCard";
import { HeadingOne } from "@/components/Common/Headings/HeadingOne";
import HostedParties from "@/components/Common/Slider/HostedParties";
import Gallery from "@/components/Common/Profile/Gallery";


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
        <div>
          <HeadingOne>Hosted parties</HeadingOne>
          <HostedParties />
          <Gallery />
          <div />
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
