import React from 'react';

const Profilecards = ({ image, name, position, course1, course2, course3, icon1, icon2, icon3 }) => {
  return (
    <div className="parent flex flex-col border justify-center items-center gap-2 mt-4 w-72 p-5 h-50">
      <div className="profile justify-center items-center flex flex-col gap-2">
        <img src={image} width={70} height={70} alt={`${name}'s profile`} />
        <div className="information font-semibold">{name}</div>
        <div>{position}</div>
      </div>
      <div className="service flex gap-3 my-7">
        <img src={icon1} width={30} height={30} alt="Icon 1" />
        <img src={icon2} width={30} height={30} alt="Icon 2" />
        <img src={icon3} width={30} height={30} alt="Icon 3" />
      </div>
      <div className="font-mulish justify-center items-center flex flex-col text-center">
        <h4 className="text-grey font-semibold">Teaches</h4>
        <p className="text-sm">{course1}</p>
        <p className="text-sm">{course2}</p>
        <p className="text-sm">{course3}</p>
      </div>
      <div className="url">LinkedIn profile</div>
    </div>
  );
};

export default Profilecards;
