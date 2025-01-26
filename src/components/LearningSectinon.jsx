import React, { useState } from "react";

const LearningSection = () => {
  const [activeTab, setActiveTab] = useState("learn"); // Default active tab

  const tabs = [
    {
      id: "learn",
      title: "Learn",
      description:
        "Experience seamless learning with problem-solving modules, leaderboard, and awards.",
      image: "/learn.webp", // Replace with actual image path
    },
    {
      id: "excel",
      title: "Excel",
      description:
        "Track your skill level and make meaningful progress for you to grow.",
      image: "/excel.webp", // Replace with actual image path
    },
    {
      id: "standout",
      title: "Standout",
      description:
        "Standout to recruiters, showcase ratings, get feedback, and interview insights.",
      image: "/standout.webp", // Replace with actual image path
    },
  ];

  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center w-2/3 mx-auto py-10 gap-5 mt-10">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col space-y-6">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer p-4 border-l-4 ${
                activeTab === tab.id ? "border-blue-500" : "border-transparent"
              }`}
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              <h3
                className={`text-lg font-bold ${
                  activeTab === tab.id ? "text-black" : "text-gray-600"
                }`}
              >
                {tab.title}
              </h3>
              <p className="text-sm text-gray-500">{tab.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 mt-8 md:mt-0 flex justify-center items-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-300 ${
                activeTab === tab.id ? "opacity-100" : "opacity-0"
              } absolute`}
            >
              <img
                src={tab.image}
                alt={tab.title}
                className="w-full max-w-lg rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden overflow-x-auto hide-scrollbar space-x-4 py-10 px-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md p-4 gap-10"
          >
            {/* Image */}
          
            {/* Text */}
            <h3 className="text-lg font-bold text-black">{tab.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{tab.description}</p>
            <div className="mb-4">
              <img
                src={tab.image}
                alt={tab.title}
                className="w-full rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSection;
