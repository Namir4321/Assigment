import React, { useState } from "react";
import { Input } from "../ui/input";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Button } from "../ui/button";
import { RegisterCall } from "@/redux/apicall";
import { NavLink } from "react-router-dom";
const RegisterEmail = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await RegisterCall({ name, dob, email, password });
    console.log(res.error);
    if (res.error) {
      setError(res.error);
    }
  };
  return (
    <div className="gap-4 grid  items-start">
      <form onSubmit={handleSubmit} className="gap-4 grid items-start">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaUser className="mx-1" />|
          </div>
          <Input
            className="pl-12 "
            type="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaUser className="mx-1" />|
          </div>
          <Input
            className="pl-12 "
            type="date"
            placeholder="DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaUser className="mx-1" />|
          </div>
          <Input
            className="pl-12 "
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <IoIosLock className="mx-1" />|
          </div>
          <Input
            className="pl-12"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className=" text-xs flex mt-0 text-[#00f5e1] pt-0 mb-2">
           Have an account
          <NavLink className="mx-1 underline text-white" to="/login">
            Login?
          </NavLink>
        </p>
        {error && (
          <div className="flex justify-start text-red-500 m-0 p-0">
            <p>{error}</p>
          </div>
        )}

        <Button variant="default" className="bg-[#00f5e1]" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterEmail;
