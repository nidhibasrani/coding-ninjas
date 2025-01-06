import React from "react";

const IITCertificationCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-4 w-[18rem] border border-[#d8cbb1] rounded-2xl overflow-hidden mx-auto font-[sans-serif] mt-4">
        <div className="min-h-[145px]">
          <img
            src="./public/pg certification.png"
            className="w-full border-spacing-2"
            alt="PG Certification"
          />
        </div>

        <div className="my-2">
          <h3 className="text-gray-800 text-xl font-mulish font-bold">
            Training and Internship Certification in Advanced DSA
          </h3>
          <p className="my-4 text-sm text-[#745e39] py-2 pl-1 rounded-r-full font-bold font-mulish bg-lightBg">
            E&ICT Academy, IIT Guwahati
          </p>
          <div className="border border-gray-100"></div>
          <div className="flex items-center justify-between mt-6 ">
            <div className="flex gap-2">
              <img
                src="./public/chatgpt.png"
                alt="Icon 1"
                className="w-6 h-6"
              />
              <img src="./public/meta.svg" alt="Icon 2" className="w-6 h-6" />
              <img
                src="./public/powerbi.svg"
                alt="Icon 3"
                className="w-6 h-6"
              />
            </div>
            <p className="text-gray-500 text-sm">6 months</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IITCertificationCard;
