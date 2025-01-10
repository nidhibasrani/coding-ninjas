import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#453934] text-white p-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="./public/footerlogo.svg"/>
          <p>Contact us</p>
          <p>📞 1800-123-3598</p>
          <p>✉️ contact@codingninjas.com</p>
          <div>
          <h5 className="text-lg font-mulish mb-4">Our Offerings</h5>
          <ul>
          <img src="./public/footerlogo.svg"/>
            <li className='mx-10 text-xs font-mulish'>/Job Bootcamp</li>
          <img src="./public/code360footerlogo.webp" width={100} height={100}/>
          </ul>
        </div>
        </div>
       
        <div>
          <h5 className="text-sm font-mulish font-semibold mb-4 ">Coding Ninjas</h5>
          <div className='text-xs font-mulish gap-4'>
          <ul  >
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
          <h5 className="text-sm font-mulish font-semibold mb-4">Products</h5>
          <div className="text-xs font-mulish gap-4">
          <ul>
            <li>Job Bootcamp</li>
            <li>Code 360</li>
           
          </ul>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-mulish font-semibold mb-4">Community</h5>
          <div  className="text-xs font-mulish gap-4">
          <ul>
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from us</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center ">
        <p className='text-xs'>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400"><img src="instagram.svg"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="facebook.svg"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="linkedin.svg"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="twitter.svg"/></a>
          <a href="#" className="text-white hover:text-gray-400"><img src="youtube.svg"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
