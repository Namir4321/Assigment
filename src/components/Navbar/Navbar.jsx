import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { logoutuser } from "@/redux/userRedux";
import { NavLink } from "react-router-dom";
import Frame from "@/Image/Frame.svg";

const Navbar = () => {
  const user = useSelector((state) => state.user.userinfo);
  const dispatch = useDispatch();
  const handleLogut = (e) => {
    dispatch(logoutuser());
  };
  return (
    <div className=" flex   items-center justify-between bg-gradient-to-br from-[#10120C] to-[#212124] p-2 ">
      <div className=" w-full flex justify-start items-start font-bold text-xl mx-6">
        <img src={Frame} alt="" height="" className="h-12" />
      </div>
      <div className=" w-full flex justify-end ">
       <Button
          variant="default"
          size="md"
          className="bg-[#c5ed77] hover:bg-[#c5ed77] shadow-none mx-12 text-black hover:text-black "
          onClick={handleLogut}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
