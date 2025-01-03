import React from "react";

const Header = () => {
  return (
    <div className="parent flex justify-around py-2 items-center">
      <div className="left flex justify-around gap-6 items-center">
        <div className="logo">
          <img src="./public/logo.svg " height={150} width={150} />
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="font-mulish font-bold ">Job bootcamp</li>
            <li className="font-mulish font-bold ">IIT Certifications</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <button className="bg-orange text-white text-sm rounded-lg p-2 font-mulish">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
