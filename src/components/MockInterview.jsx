import React from "react";

const MockInterview = ({ image, title, paragraph1, paragraph2 }) => {
  return (
    <div className="w-[300px] md:w-[350px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg mt-5 bg-white ml-2">
      {/* Image Section */}
      <img className="w-full h-48 object-cover" src={image} alt={title}></img>
      
      {/* Title */}
      <div className="py-4 px-4">
        <h1 className="font-semibold font-mulish text-lg">{title}</h1>
      </div>
      
      {/* Paragraph 1 */}
      <div className="py-3 px-4 font-mulish text-gray-700">
        <p>{paragraph1}</p>
      </div>
      
      {/* Paragraph 2 */}
      <div className="py-3 px-4 font-mulish text-gray-700">
        <p>{paragraph2}</p>
      </div>
    </div>
  );
};

export default MockInterview;
