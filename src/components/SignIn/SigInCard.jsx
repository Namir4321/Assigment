import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginEmail from "./LoginEmail";
import Frame from "@/Image/Frame.svg";

const SignInCard = () => {
  return (
    <div className="min-w-[350px] md:mt-6  w-full h-full  bg-transparent flex  justify-start  p-0 ">
      <Card className="relative w-5/6 bg-transparent border-none text-white">
        <CardHeader className="">
          <div className="flex mb-1">
            <img src={Frame} alt="" height="" className="h-14" />
          </div>
          <CardTitle className="text-[24px] md:text-[30px] flex font-bold">
            Let the Journey Begin!
          </CardTitle>
          <CardDescription className="text-left mt-2 text-[12px] md:text-[15px] ">
            This is basic login page which is used for levitation assignment{" "}
            <br />
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0  w-full m-0 mx-8">
          <LoginEmail />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInCard;
