import React from "react";
import UserProfileCard from "@/components/Common/Profile/UserProfileCard";

const Profile = () => {
  return (
    <section className="w-full md:px-8 xl:px-24 py-16 xl:pt-20 px-4 lg:space-y-10 space-y-5">
      <UserProfileCard
        avgRating={"4.5"}
        isEditable={true}
        name={"Nishant Rajput"}
        partiesAttended={"4"}
        partiesHosted={"15"}
        profileImage="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
      <div className="w-full border-2 bg-white/5 rounded-xl p-5" />
    </section>
  );
};

export default Profile;
