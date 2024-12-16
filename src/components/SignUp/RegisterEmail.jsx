import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { RegisterCall } from "@/redux/apicall";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const RegisterEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const navigate = useNavigate();
   const dispatch = useDispatch();
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

  const res = await RegisterCall({ name,email, password });
  console.log(res)
      if (res.error) {
        setError(res.payload || "Signup failed. Please try again.");
      } else  {
        setError("");
       navigate("/");
      }
  };
  return (
    <div className="w-full  ">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2 w-full">
          <Label className="flex justify-start mb-1 text-lg">
            Enter your Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="h-10 border-[#424647] w-full"
          />
          <p className="flex mt-1 text-[#B8B8B8] text-[12px]">
            This name will be displayed with your inquiry{" "}
          </p>
        </div>
        <div className="flex flex-col mb-2 w-full">
          <Label className="flex justify-start mb-1 text-lg">
            Enter your email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-10 border-[#424647] w-full"
          />
          <p className="flex mt-1 text-[#B8B8B8] text-[12px]">
            This email will be used for communication.
          </p>
        </div>
        <div className="flex flex-col mb-2 w-full">
          <Label className="flex justify-start mb-1 text-lg">
            Enter your password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="h-10 border-[#424647] w-full"
          />
          <p className="flex mt-1 text-[#B8B8B8] text-[12px]">
            Make sure your password is secure.
          </p>
        </div>
        {error && (
          <p className="text-red-500 flex text-sm mb-4" role="alert">
            {error}
          </p>
        )}
        <div className="flex z-12 mt-4">
          <Button
            variant="default"
            size="lg"
            className="text-[#CCF575] bg-gradient-to-br from-[#303030] to-[#141414] opacity-100"
          >
            Register
          </Button>
          <Button
            variant="link"
            className="bg-transparent hover:text-white hover:bg-transparent text-white ring-0 border-none shadow-none mx-2"
          >
            Already have an account?
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterEmail;
