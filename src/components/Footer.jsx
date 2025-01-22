import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#453934] text-white p-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-8">
        <div>
          <img src="./public/footerlogo.svg" alt="Footer Logo"/>
          <p className='font-mulish'>Contact us</p>
          <p className='gap-5 '>📞 1800-123-3598</p>
          <p>✉️ contact@codingninjas.com</p>
          <div>
            <h5 className="text-lg font-mulish mb-4">Our Offerings</h5>
            <ul className="space-y-2"> {/* Added gap between list items */}
              <img src="./public/footerlogo.svg" alt="Offerings Logo"/>
              <li className='mx-10 text-xs font-mulish'>/Job Bootcamp</li>
              <img src="./public/code360footerlogo.webp" width={100} height={100} alt="Code 360 Logo"/>
            </ul>
          </div>
        </div>
        <div>
          <h5 className="text-l font-mulish font-bold mb-4">Coding Ninjas</h5>
          <div className='gap-6'>
          <ul className="text-xs font-mulish font-semibold space-y-4"> {/* Added gap between list items */}
        
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Pricing & Refund Policy</li>
            <li>Bug Bounty</li>
            <li>Review</li>
            <li>Press Release</li>
           
          </ul>
          </div>
        </div>
        <div>
          <h5 className="text-l font-mulish font-bold mb-4">Products</h5>
          <ul className="text-xs font-mulish space-y-4 font-semibold"> {/* Added gap between list items */}
            <li>Job Bootcamp</li>
            <li>Code 360</li>
          </ul>
        </div>
        <div>
          <h5 className="text-l font-mulish font-bold mb-4">Community</h5>
          <ul className="text-xs font-mulish space-y-4 font-semibold"> {/* Added gap between list items */}
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from us</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <p className='text-xs'>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400"><img src="instagram.svg" alt="Instagram"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="facebook.svg" alt="Facebook"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="linkedin.svg" alt="LinkedIn"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="twitter.svg" alt="Twitter"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="youtube.svg" alt="YouTube"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
