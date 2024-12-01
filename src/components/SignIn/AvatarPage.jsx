import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const AvatarPage = () => {
  return (
    <div className="min-h-40 w-full rounded-lg mb-8 bg-[#293858] relative">
      {/* SVG Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1d2c4f"
            d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,192C672,181,768,171,864,192C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        
      </div>

      {/* Icon positioned at the bottom */}
      <div className="text-white flex justify-center absolute -bottom-10 left-1/2 -translate-x-1/2 pb-4">
        <FaRegUserCircle className="text-8xl" />
      </div>
    </div>
  );
};

export default AvatarPage;
