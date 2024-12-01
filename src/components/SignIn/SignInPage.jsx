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
import AvatarPage from "./AvatarPage";

const SignInPage = () => {
  return (
    <div className="min-w-[350px] flex items-center justify-center   ">
      <Card className="relative bg-[#1D2C4F]">
        <CardHeader className="p-0 m-0">
          <CardTitle className=" absolute z-20 -top-3 left-1/2 -translate-x-1/2 ">
            <div className="bg-[#00f5e1] px-4 py-2 rounded-sm text-base ">
              SIGN IN
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 m-0">
          <AvatarPage className="p-0 m-0 " />
        </CardContent>
        <CardContent>
          <LoginEmail />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
