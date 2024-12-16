import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { LoginCall } from "@/redux/apicall";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      if (!email || !password) {
        setError("Email and Password are required.");
        return;
      }
    const res = await dispatch(LoginCall({ email, password }));
    if (res.error) {
      console.log(res)
      setError(res.payload || "Login failed. Please try again.");
    } else {
      setError("");
    }
  };
   return (
     <div className="w-full  ">
       <form className="w-full">
         <div className="flex flex-col mb-2 w-full">
           <Label className="flex justify-start mb-1 text-lg">
             Enter your email
           </Label>
           <Input
             id="email"
             type="email"
             placeholder="Enter your email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="h-10 border-[#424647] w-full"
           />
           <p className="flex mt-1 text-[#B8B8B8] text-[12px]">
             This name will be displayed with your inquiry{" "}
           </p>
         </div>
         <div className="flex flex-col mb-2 w-full">
           <Label className="flex justify-start mb-1 text-lg">
             Enter your password
           </Label>
           <Input
             id="password"
             type="password"
             placeholder="Enter your password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="h-10 border-[#424647] w-full"
           />
           <p className="flex mt-1 text-[#B8B8B8] text-[12px]">
             This password will be used for authentication.
           </p>
         </div>
         {error && (
           <p className="text-red-500 text-sm mb-4 flex font-semibold">
             {error}
           </p>
         )}
         <div className="flex z-12 mt-4">
           <Button
             type="submit"
             variant="default"
             size="lg"
             className="text-[#CCF575] bg-gradient-to-br from-[#303030] to-[#141414] opacity-100"
             onClick={handleSubmit}
           >
             Login
           </Button>
           <Button
             variant="link"
             className="bg-transparent hover:text-white hover:bg-transparent text-white ring-0 border-none shadow-none mx-2"
           >
             Forgot Password ?
           </Button>
         </div>
       </form>
     </div>
   );
};

export default LoginEmail;
