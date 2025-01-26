import React, { useState } from "react";
import { FiX } from "react-icons/fi"; // Icon for close button
import { FiChevronDown, FiChevronRight } from "react-icons/fi"; // Icons for dropdown and navigation

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isJobBootcampOpen, setIsJobBootcampOpen] = useState(false);
  const [isIITCertificationsOpen, setIsIITCertificationsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="parent flex justify-around py-3.5 items-center">
        <div className="left flex justify-around gap-12 items-center">
          <div className="logo">
            <img src="./public/logo.svg" height={150} width={150} alt="Logo" />
          </div>
          <div className="">
            <ul className="hidden md:flex gap-6">
              <li className="font-mulish font-bold text-[#394871]">
                Job Bootcamp
              </li>
              <li className="font-mulish font-bold text-[#394871]">
                IIT Certifications
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <button className="hidden md:block bg-orange text-white text-sm rounded-lg py-2.5 px-4 font-mulish font-bold">
            Login
          </button>
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-black text-white text-sm rounded-lg py-2.5 px-4 font-mulish font-bold"
          >
            Courses
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="./public/logo.svg" alt="Logo" className="h-8 w-auto" />
           
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 text-xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
          {/* Job Bootcamp Section */}
          <div className="mb-6">
            <button
              className="flex justify-between items-center w-full text-gray-800 font-bold py-2"
              onClick={() => setIsJobBootcampOpen(!isJobBootcampOpen)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <p>Job Bootcamp</p>
              </div>
              {isJobBootcampOpen ? <FiChevronDown /> : <FiChevronRight />}
            </button>
            {isJobBootcampOpen && (
              <ul className="ml-6 mt-2 text-sm text-gray-600">
                <li className="mb-2 text-blue-500 cursor-pointer">
                  Full Stack Web Development with GenAI
                </li>
                <li className="text-blue-500 cursor-pointer">
                  Data Analytics with GenAI
                </li>
              </ul>
            )}
          </div>

          {/* IIT Certifications Section */}
          <div className="mb-6">
            <button
              className="flex justify-between items-center w-full text-gray-800 font-bold py-2"
              onClick={() =>
                setIsIITCertificationsOpen(!isIITCertificationsOpen)
              }
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📄</span>
                <p>IIT Certifications</p>
              </div>
              {isIITCertificationsOpen ? <FiChevronDown /> : <FiChevronRight />}
            </button>
            {isIITCertificationsOpen && (
              <ul className="ml-6 mt-2 text-sm text-gray-600">
                <li className="mb-2 flex justify-between items-center">
                  For graduates <FiChevronRight />
                </li>
                <li className="flex justify-between items-center">
                  For college students <FiChevronRight />
                </li>
              </ul>
            )}
          </div>

          {/* Contact Section */}
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">
              📞 Call us at{" "}
              <a href="tel:18001233598" className="text-blue-500">
                1800-123-3598
              </a>
            </p>
            <p className="text-sm text-gray-600">
              📧{" "}
              <a
                href="mailto:contact@codingninjas.com"
                className="text-blue-500"
              >
                contact@codingninjas.com
              </a>
            </p>
          </div>

          {/* Login Button */}
          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
