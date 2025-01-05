import React from 'react'

const Hero = () => {
  return (
    <div className='parent flex justify-center flex-col items-center bg-black'>
    <div className="text-purple-500">
    Restricted by opportunities?
    </div>
<div>
<h3 className='text-5xl font-bold text-white '>Get the tech career you deserve. Faster. </h3>   
    </div>
    <div className="text-grey" >
       <p>Structured coding courses that get you there faster with confidence.</p> 
    </div>
    <div>
        <button className="bg-orange text-white  rounded-lg px-5 py-5 font-mulish text-xl flex gap-2 items-center">
            Explore Offerings
            <img src="./public/arrow-down.svg"/>
        </button>
        <div>
      <h2>My Video</h2>
      <video width="600" controls>
        <source src="./public/C:\Users\nidhi\OneDrive\Desktop\codezintern2\vite-project\public\coding ninja video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    </div>
  )
}

export default Hero