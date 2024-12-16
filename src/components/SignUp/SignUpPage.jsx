import React from "react";
import SignupCard from "./SignupCard";
import Carsouel from "./Carsouel";
import Navbar from "@/components/Navbar/Navbar";
import image1 from "@/Image/signup.png";
import image2 from "@/Image/signuptwo.png";

const SignUpPage = () => {
  const ImagesNum = [image1, image2];
  return (
    <div className="w-full min-h-screen relative ">
      <Navbar />
      <div
        className="w-[200px] h-[236px] fixed -bottom-8 -left-12 rounded-full z-0
        bg-gradient-to-bl from-[#ccf557] to-[#000000] border-none
        opacity-[43%] blur-3xl"
      ></div>
      <div className="flex w-full ">
        {/* Left Section */}
        <div className="w-1/2 flex justify-start items-center mx-[15px] md:mx-[65px] ">
          <SignupCard />
        </div>
        {/* Right Section */}
        <div className="w-1/2 hidden md:flex    justify-center items-center">
          <div className="w-full max-h-[480px] mt-12   rounded-l-[15%] relative  overflow-hidden">
            <div
              className="w-[200px] h-[236px] fixed top-16 right-1/3 rounded-full z-0
        bg-gradient-to-tl from-[#ccf557] to-[#b8ce77] border-none
        opacity-[43%] blur-3xl"
            ></div>

            <Carsouel ImagesNum={ImagesNum}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
