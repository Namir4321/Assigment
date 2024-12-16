import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Carsouel from "../SignUp/Carsouel";
import image1 from "@/Image/singin.jpeg";
import image2 from "@/Image/signintwo.png";
import SignInCard from "./SigInCard";
import image3 from "@/Image/signup.png";
import image4 from "@/Image/signuptwo.png";
const SignInPage = () => {
  const ImagesNum = [image1, image2, image3, image4];
  return (
    <div className="w-full  relative">
      {" "}
     
      <Navbar />
      <div
        className="w-[200px] h-[236px] fixed -bottom-8 -left-12 rounded-full z-0
        bg-gradient-to-bl from-[#ccf557] to-[#000000] border-none
        opacity-[43%] blur-3xl "
      ></div>
      <div
        className="w-[200px] h-[236px] fixed top-8 -right-12 rounded-full z-0
        bg-gradient-to-bl from-[#4F59A8] to-[#000000] border-none
        opacity-[43%] blur-3xl "
      ></div>
      <div className="flex w-full h-full items-center  ">
        {/* Left Section */}
        <div className="hidden md:flex  w-1/2 h-full">
          <div className=" max-w-[500px]  mt-12 w-full h-full ml-auto">
            <Carsouel group="w-5/6" ImagesNum={ImagesNum} />{" "}
          </div>
        </div>
        {/* Right Section */}

        <div className="w-1/2  md:flex justify-center items-center">
          <SignInCard />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
