import React from "react";
import IITCertificationCard from "./IITCertificationCard";

const IITCertifications = () => {
  return (
    <div className="w-full bg-lightBg pt-1 pb-10 relative">
      {/* Main content area */}
      <div className="parent w-3/4 mx-auto my-20 md:my-40 relative z-10">
        <div>
          {/* <span className='bg-black text-white px-1 left-0 rounded resize-x'>For graduates</span> */}
        </div>
        <div className="font-mulish text-black font-bold text-2xl">
          IIT Certifications
        </div>
        <div className="flex flex-col items-start my-5">
          <p className="font-mulish text-[12px] px-3 py-1 bg-[#745e39] text-lightBg rounded-full font-bold my-2">
            For Graduates
          </p>
          <IITCertificationCard />
         
          <p className="font-mulish text-[12px]   bg-[#745e39] text-lightBg  font-bold rounded-full mt-10 py-1 px-4 ">
              For college students
            </p>
            <div className="flex gap-7 ">
          <IITCertificationCard />
          <IITCertificationCard />
          <IITCertificationCard />
          </div>
        </div>
      </div>

      {/* Background image using the `before` pseudo-element */}
      <div className="before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[174px] before:bg-[url('./assets/homeBg.png')] before:bg-no-repeat before:bg-cover before:bg-bottom before:opacity-50"></div>
    </div>
  );
};

export default IITCertifications;
