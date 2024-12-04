
import "./UserDetails.css";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { Chip } from "@nextui-org/chip";


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

  const interests = [
    'Reading',
    'Traveling',
    'Cooking',
    'Gardening',
    'Music',
    'Hiking',
    'Painting',
    'Movies',
    'Fitness',
    'Yoga',
    'Fashion',
    'Cycling',
  ];

  return (
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 ">
      <div className="flex gap-5 flex-col lg:flex-row ">
        <div className="max-w-sm w-full">
          <div className="w-full rounded-xl bg-white/10 px-3 py-5 space-y-8 ">
            <div className="space-y-3 relative">
              <div className=" rounded-full w-40 h-40  p-1.5  backdrop-blur-sm bg-gradient-to-br from-primary to-secondary mx-auto">
                <Avatar
                  className="w-full h-full rounded-full"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
              </div>
              <Button isIconOnly size="lg" aria-label="Like" className="absolute top-0 right-4 hover:bg-primary ">
                <FaRegPenToSquare className="text-2xl" />
              </Button>
              <div className="text-center space-y-1">
                <h1 className={`font-Ubuntu font-medium text-3xl `}>{user.name}</h1>
                <h2 className="flex items-center gap-2 text-2xl text-emerald-400 font-semibold justify-center"><FaMedal /> Verified</h2>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 text-center  ">
              <div >
                <h2 className="text-3xl font-semibold">{user.partiesAttended}</h2>
                <p className="text-gray-300">Parties attended</p>
              </div>
              <div className="bg-primary p-2 rounded-lg">
                <h2 className="text-3xl font-semibold">{user.partiesHosted}</h2>
                <p className="font-semibold">Parties hosted</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">{user.avgRating}</h2>
                <p className="text-gray-300">Avg. rating</p>
              </div>
            </div>
            <div className="space-y-4  rounded-lg px-3 pt-2 pb-5  ">
              <h1 className="font-semibold text-3xl">Interests</h1>
              <div className="flex flex-wrap gap-3">
                {user.interests.map((interest, index) => (
                  <Chip
                    classNames={{
                      content: "font-semibold text-sm lg:text-base"
                    }} key={index} size="lg" variant="bordered" color="primary" className="tracking-wide ">
                    {interest}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 bg-white/5 rounded-xl p-5">

        </div>
      </div>
    </section>
  );
};

export default UserDetails;
