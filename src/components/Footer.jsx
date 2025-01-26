import React from 'react';

const Footer = () => {
  return (
    <footer 
      className=" text-white bg-footer-gradient p-10 bg-no-repeat bg-cover"
    
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-8">
        <div className="flex flex-col gap-4">
          <img width={160} src="/footerlogo.svg" alt="Footer Logo" />
          <p className="font-mulish font-bold">Contact us</p>
          <p>📞 1800-123-3598</p>
          <p>✉️ contact@codingninjas.com</p>
        </div>
        <div>
          <h5 className="text-lg font-mulish font-bold mb-4">Coding Ninjas</h5>
          <ul className="text-xs font-mulish font-semibold space-y-4">
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Pricing & Refund Policy</li>
            <li>Bug Bounty</li>
            <li>Review</li>
            <li>Press Release</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-mulish font-bold mb-4">Products</h5>
          <ul className="text-xs font-mulish space-y-4 font-semibold">
            <li>Job Bootcamp</li>
            <li>Code 360</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-mulish font-bold mb-4">Community</h5>
          <ul className="text-xs font-mulish space-y-4 font-semibold">
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from us</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <p className="text-xs">Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <img src="/instagram.svg" alt="Instagram" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="/youtube.svg" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
