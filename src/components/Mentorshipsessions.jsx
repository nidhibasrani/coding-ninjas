import React from "react";
import MockInterview from "./MockInterview";

const Mentorshipsessions = () => {
  const cardsData = [
    {
      image: "./mock-interview.webp",
      title: "Mock Interview",
      paragraph1: "Nail coding assessments and technical challenges",
      paragraph2:
        " Gain insights into problem-solving and algorithmic thinking",
    },
    {
      image: "./public/Profile-review.webp",
      title: "Profile review",
      paragraph1: "Get your profile & resume reviewed by industry leaders",
      paragraph2: "Focus on different aspects of your job search ",
    },
    {
      image: "./public/Project-guidance.webp",
      title: "Project guidance",
      paragraph1: "Career counselling with industry experts",
      paragraph2: "Get assistance on how to build real time projects ",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto pt-10 md:pt-20">
        <h2 className="font-mulish text-[20px] text-black font-bold">
          1:1 Mentorship sessions
        </h2>
        <p className="font-mulish text-[14px] font-semibold text-gray-400 my-6">
          Personalised guidance to prepare you for your interview needs
        </p>

        <div className="w-full overflow-x-auto">
          <div className="flex gap-6 flex-nowrap">
            {cardsData.map((card, index) => (
              <MockInterview
                key={index}
                image={card.image}
                title={card.title}
                paragraph1={card.paragraph1}
                paragraph2={card.paragraph2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorshipsessions;
