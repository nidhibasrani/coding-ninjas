import React from 'react';

function SuccessStories() {
  const stories = [
    {
      name: 'Twisam',
      title: 'Full Stack Developer',
      image: '/twisam.png', // Replace with actual image path
      quote: 'I am so grateful to Coding Ninjas. Their lessons helped me excel in projects. CN transformed my journey, giving me clarity and optimization skills!',
    },
    {
      name: 'Onkar Lapate',
      title: 'SDF-1',
      image: '/onkar.png', // Replace with actual image path
      quote: 'Chose Coding Ninjas for structured, high-quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.',
    },
    {
      name: 'Durgesh Chaubey',
      title: 'SOE-1',
      image: '/durgesh.png', // Replace with actual image path
      quote: 'Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.',
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col justify-center items-center gap-6 mt-4 p-5">
      <h2 className="text-2xl font-bold font-mulish mb-4">Stories from people like you</h2>
      <div className='flex gap-3 mb-2'>
      <p className="font-mulish text-[12px] px-2 py-1 bg-[#745e39] text-lightBg rounded-full font-bold my-2">
      Non tech to tech
          </p>
          <p className="font-mulish text-[12px] px-3 py-1 bg-white text-black rounded-full font-bold my-2">
     Service to product 
          </p>
          
          <p className="font-mulish text-[12px] px-3 py-1 bg-white text-black rounded-full font-bold my-2">
          Tier 2/3 colleges
          
          </p>
          <p className="font-mulish text-[12px] px-3 py-1 bg-white text-black rounded-full font-bold my-2">
          Tier 2/3 colleges
          
          </p>
          <p className="font-mulish text-[12px] px-3 py-1 bg-white text-black rounded-full font-bold my-2">
          <p className="font-mulish text-[12px] px-3 py-1 bg-white text-black rounded-full font-bold my-2">
         Job Bootcamp 
          
          </p>
          
          </p>
          </div>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {stories.map((story, index) => (
          <div key={index} className="bg-grey text-white rounded-lg p-6 max-w-xs w-72 h-96 flex flex-col justify-center items-center shadow-md">
            <img src={story.image} alt={story.name} className="rounded-full w-24 h-24 mb-4" />
            <h3 className="text-lg font-semibold mb-2 font-mulish text-center">{story.name}</h3>
            <p className="text-sm font-mulish text-center">{story.title}</p>
            <p className="text-sm mt-4 font-mulish text-center">{story.quote}</p>
            <div className="mt-4 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-mulish">Post</p>
                <img src="./public/arrow-right.svg" alt="Arrow Right" className="w-4 h-4" />
                <p className="text-sm font-mulish">Cogent e Private ltd</p>
              </div>
              <p className="text-sm font-mulish">Coding Ninjas</p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#FF6B3D] hover:bg-[#ff5c2a] font-mulish text-white font-semibold text-xl px-6 py-3 rounded-lg inline-flex items-center gap-2 mt-9">
          Explore offerings
          <img src="./arrow-down.svg" alt="arrow" height={25} width={25} />
        </button>
    </div>
  );
}

export default SuccessStories;
