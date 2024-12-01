import React, { useState } from "react";
import { Input } from "../ui/input";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Button } from "../ui/button";
import { LoginCall } from "@/redux/apicall";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const LoginEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(LoginCall({ email, password }));
    if (res.error) {
      setError(res.payload);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="gap-4 grid  items-start">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <FaUser className="mx-1" />|
          </div>
          <Input
            className="pl-12 "
            type="email"
            placeholder="username"
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

        {error && (
          <div className="flex justify-start text-red-500 m-0 p-0">
            <p>{error}</p>
          </div>
        )}

        <div className="flex items-center justify-between  p-1">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />{" "}
            <label htmlFor="rememberMe" className="text-xs text-[#00f5e1]">
              Remember Me
            </label>{" "}
             
          </div>
          <a href="#" className="text-[#00f5e1] text-xs hover:underline">
            Forgot Password?
          </a>
        </div>
        <p className=" text-xs flex mt-0 text-[#00f5e1] pt-0 mb-2">
          Don't have account
          <NavLink className="mx-1 underline text-white" to="/register">
            Register?
          </NavLink>
        </p>
        <Button variant="default" className="bg-[#00f5e1]" type="submit">
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default LoginEmail;
