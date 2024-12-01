import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { logoutuser } from "@/redux/userRedux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user.userinfo);
  const dispatch = useDispatch();
  const handleLogut = (e) => {
    dispatch(logoutuser());
  };
  return (
    <div className=" flex   items-center justify-between">
      <div className=" w-full flex justify-start items-start font-bold text-xl">
        User list
      </div>
      <div className=" w-full flex justify-end">
        <img src={user.image} className="h-6 w-6  rounded-full mx-2" />
        <NavLink to="/" className="text-black hover:text-black font-normal">{user.name}</NavLink>
        <Button
          variant="link"
          size="sm"
          className="bg-transparent mx-1 underline -mt-1"
          onClick={handleLogut}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
