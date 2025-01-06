import React from "react";

const OurOfferingCards = ({ title, att1, att2, att3, icon }) => {
  // att means attribute
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-lg md:w-[28rem] w-[20rem]  font-sans overflow-hidden">
          <div className="bg-[#f5f7fe] py-8 px-6 flex items-center  gap-5">
            <img
              className="bg-white p-3 rounded-full"
              src={icon}
              alt="Full Stack Icon"
              width={75}
            />

            <h4 className="text-xl font-mulish font-bold text-black leading-relaxed text-center">
              {title}
            </h4>
          </div>
          <div className="bg-white py-4  px-6 flex justify-between text-center ">
            <div className="flex flex-col">
              <span className="text-sm font-mulish font-medium text-gray-600">
                {att1}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-mulish  font-medium text-gray-600">
                {att2}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-mulish  font-medium text-gray-600">
                {att3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurOfferingCards;
