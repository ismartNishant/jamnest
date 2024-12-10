"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { GiPartyPopper } from "react-icons/gi";
import UserProfileCard from "@/components/Common/Cards/UserProfileCard";
import MyEventsTab from "@/components/Common/Profile/MyEventsTab";
import HostedEventsTab from "@/components/Common/Profile/HostedEventsTab";
import PersonalInfo from "@/components/Common/Profile/PersonalInfo";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("myEvents");
 

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
      <PersonalInfo />
      <div className="w-full border-2 border-white/10 bg-white/5 rounded-xl p-2 lg:p-5 space-y-5">
        <div className="flex gap-4 w-full ">
          <Button
            className={` lg:text-lg uppercase   font-semibold tracking-wide ${activeTab === "myEvents"
              ? "bg-primary text-white"
              : "bg-transparent border-2 border-white/15 text-white hover:border-primary"
              }`}
            endContent={<GiPartyPopper className="text-xl" />}
            onClick={() => setActiveTab("myEvents")}
          >
            My Events
          </Button>
          <Button
            className={`lg:text-lg uppercase   font-semibold  tracking-wide  ${activeTab === "hostedEvents"
              ? "bg-primary text-white"
              : "bg-transparent border-2 border-white/15 text-white hover:border-primary"
              }`}
            endContent={<GiPartyPopper className="text-xl" />}
            onClick={() => setActiveTab("hostedEvents")}
          >
            Hosted Events
          </Button>
        </div>

        <div>
          {activeTab === "myEvents" && <MyEventsTab />}
          {activeTab === "hostedEvents" && <HostedEventsTab />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
