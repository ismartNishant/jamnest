// components/IPhoneMockup.tsx
import React from "react";
import { IPhoneMockup } from "react-device-mockup";

type IPhoneMockupProps = {
  videoSrc: string;
};

const PhoneMockup: React.FC<IPhoneMockupProps> = ({ videoSrc }) => {
  return (
    <IPhoneMockup frameColor="#333" screenWidth={250} statusbarColor="#000">
      <video
        autoPlay
        controls
        loop
        muted
        src={videoSrc}
        style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
      />
    </IPhoneMockup>
  );
};

export default PhoneMockup;
