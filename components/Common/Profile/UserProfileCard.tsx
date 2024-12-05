
import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { FaMedal } from "react-icons/fa6";
import EditProfile from "../Buttons/EditProfile";

interface UserProfileCardProps {
  name: string;
  profileImage: string;
  partiesAttended: string;
  partiesHosted: string;
  avgRating: string;
  isEditable?: boolean; 
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  profileImage,
  partiesAttended,
  partiesHosted,
  avgRating,
  isEditable = false, 
}) => {
  return (
    <div className="w-full pt-5 lg:p-10 mx-auto  bg-gradient-to-br rounded-2xl from-primary to-secondary ">
      <div className="relative w-full ">
        <div className="w-full flex items-center gap-3 lg:gap-10   flex-col lg:flex-row">
          <div className="space-y-2 relative ">
            <div className="rounded-full w-32 h-30 lg:w-56 lg:h-56 p-1 lg:p-2.5 backdrop-blur-sm bg-white/40 ">
              <Avatar className="w-full h-full rounded-full" src={profileImage} />
            </div>
            {isEditable && <EditProfile />}
          </div>
          <div className="w-full flex items-center justify-center lg:justify-between flex-wrap gap-2  ">
            <div className=" lg:space-y-1">
              <h1 className="font-Ubuntu font-medium text-2xl lg:text-5xl">
                {name}
              </h1>
              <h2 className="flex items-center gap-2 text-lg lg:text-2xl text-emerald-400 font-semibold justify-center lg:justify-start ">
                <FaMedal /> Verified
              </h2>

            </div>
            <div className="flex justify-center items-center gap-5 text-center bg-white/10 p-2.5 lg:p-5 rounded-lg w-full lg:w-auto">
              <div className="border-r-2 pr-4 py-2 border-white/25">
                <h2 className="text-2xl lg:text-4xl font-semibold">
                  {partiesAttended}
                </h2>
                <p className="text-xs lg:text-base text-gray-300">
                  Parties attended
                </p>
              </div>
              <div className="border-r-2 pr-4 py-2 border-white/25">
                <h2 className="text-2xl lg:text-4xl font-semibold">
                  {partiesHosted}
                </h2>
                <p className="text-xs lg:text-base text-gray-300">Parties hosted</p>
              </div>
              <div>
                <h2 className="text-2xl lg:text-4xl font-semibold">{avgRating} / 5</h2>
                <p className="text-xs lg:text-base text-gray-300">Avg. rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
