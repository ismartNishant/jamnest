import { Ubuntu } from "next/font/google";
import "./UserDetails.css";
import { Avatar } from "@nextui-org/avatar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

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
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 ">
      <div className="relative ">
        <div className="w-full  h-32 lg:h-56 bg-gradient-to-br from-primary to-secondary " />
        <div className="relative flex items-center gap-16 justify-center lg:justify-between">
          <div className=" absolute -top-20 rounded-[35px] w-48 h-48 lg:w-64 lg:h-64 p-2 lg:p-4 backdrop-blur-sm bg-white/15">
            <Avatar
              className="w-full h-full rounded-[30px]"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
