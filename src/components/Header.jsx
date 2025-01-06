import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="parent flex justify-around  py-3.5 items-center">
        <div className="left flex justify-around gap-12 items-center">
          <div className="logo">
            <img src="./public/logo.svg " height={150} width={150} />
          </div>
          <div>
            <ul className="flex gap-6">
              <li className="font-mulish font-bold  text-[#394871]">Job Bootcamp</li>
              <li className="font-mulish font-bold text-[#394871] ">IIT Certifications</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <button className="bg-orange text-white text-sm rounded-lg py-2.5 px-4 font-mulish font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
