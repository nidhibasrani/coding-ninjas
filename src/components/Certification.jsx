import React from 'react';

const Certification = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-50 py-10">
      <div className="flex gap-10 items-center border-2 border-gray-300 px-5 py-5 rounded-lg shadow-md bg-white max-w-5xl">
        <div className="w-1/3 flex justify-center">
          <img
            src="./public/certification.webp"
            alt="Certification"
            className="rounded-md"
            height={200}
            width={300}
          />
        </div>
        <div className="w-2/3">
          <p className="text-2xl font-normal font-mulish  leading-relaxed text-gray-800 ">
            We are an approved training partner of NSDC under their scheme for market-led fee-based services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
