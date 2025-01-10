import React from 'react';
import Profilecards from './Profilecards';

const Profile = () => {
  const data = [
    {
        image: "./public/ankush-33190.webp",
        name: "Ankush Singla",
        position: "Co-Founder & Instructor",
        course1: "Basics of C++ with DSA",
        course2: "Data Science & Machine Learning",
        course3: "Competitive Programming",
        icon1: "./public/logo1.png",
        icon2: "./public/logo2.png",
        icon3: "./public/logo3.png",
      },
    {
      image: "./public/parekh-33195.webp", // Ensure you have an image path here
      name: "Parikh Jain",
      position: "Instructor & Founding Member at Coding Ninjas",
      course1:"Basics of Python with DSA" ,
     
      course2: "Competitive Programming",
      course3: "Product Companies Interview Prep",
      icon1: "./public/logo5.png",
      icon2: "./public/logo6.png",
     icon3:"./public/logo1.png"
    },
    {
      image: "./public/nidhi-33194.webp", // Ensure you have an image path here
      name: "Nidhi Agarwal",
      position: "Founding member & Product Manager at Coding Ninjas",
      course1:"Basics of Python with DSA" ,
     
      course2: "Competitive Programming",
      course3: "Product Companies Interview Prep",
      icon1: "./public/logo7.png",
      icon2: "./public/logo1.png",
      icon3: "./public/logo3.png",
    },
   
   
    // Add images for other items similarly
  ];

  return (
    <div className="bg-white max-w-screen-lg mx-auto">
      <div className="parent flex-col my-14">
        <div className="">
          <h3 className="text-bold font-bold text-light text-black text-center">
            Faculty that brings out the best in you
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {data.length > 0 &&
          data.map((item, i) => (
            <div key={i} className="">
              <Profilecards
                image={item.image}
                name={item.name}
                position={item.position}
                course1={item.course1}
                course2={item.course2}
                course3={item.course3}
                icon1={item.icon1}
                icon2={item.icon2}
                icon3={item.icon3}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
