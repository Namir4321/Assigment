import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterEmail from "./RegisterEmail";


const SignupCard = () => {
  return (
    <div className="min-w-[350px] md:mt-6  w-full h-full  bg-transparent flex  justify-start  p-0 ">
      <Card className="relative w-5/6 bg-transparent border-none text-white">
        <CardHeader className="">
          <CardTitle className="text-[20px] md:text-[30px] flex font-bold">
            Sign up to begin journey
          </CardTitle>
          <CardDescription className="text-left mt-2 text-[15px]">
            This is a basic signup page which is used for levitation <br className="hidden md:block" />
            assignment purpose. 
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0  w-full m-0 mx-8">
          <RegisterEmail />
        </CardContent>
      </Card>
    </div>
  );
}

export default SignupCard
