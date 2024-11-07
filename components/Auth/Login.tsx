import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className=" bg-white/10 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4">
             
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              alt="Dining Experience"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              src="https://readymadeui.com/login-image.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
