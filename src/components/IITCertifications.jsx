import React from "react";
import IITCertificationCard from "./IITCertificationCard";

const IITCertifications = () => {
  return (
    <div className="parent w-3/4 mx-auto my-20 md:my-40">
      <div>
        {/* <span className='bg-black text-white px-1 left-0 rounded resize-x'>For graduates</span> */}
      </div>
      <div className="  font-mulish text-black font-bold text-2xl ">IIT Certifications</div>
      <IITCertificationCard />
    </div>
  );
};

export default IITCertifications;
