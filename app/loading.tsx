"use client";
import { ColorRing } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ColorRing
        ariaLabel="color-ring-loading"
        colors={["#FF2883", "#FF4D96", "#FFB3D0", "#A499EA", "#4C24C1"]}
        height="80"
        visible={true}
        width="80"
        wrapperClass="color-ring-wrapper"
        wrapperStyle={{}}
      />
    </div>
  );
};

export default Loading;
