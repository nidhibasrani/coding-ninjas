import React from 'react'

const OurOfferingCards = () => {
  return (
    <>
    <div class="parent flex bg-white ">
    <div
      class="bg-blue-100 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4  items-center">
      <div class="p-6 ">
       <img src="./public/fullstack.svg" />
        <h4 class=" text-lg text-gray-500 leading-relaxed text-center ">Full Stack Web Development </h4>
        </div>
        <div
      class="bg-white overflow-hidden mx-auto mt-4 flex mb-0 rounded py-2">
      <p>140+hourofcontent <span></span>600+problems<span/> 10k+Learners</p>
      
      </div>
    </div>
    <div
      class="bg-blue-100 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4  items-center">
      <div class="p-6 ">
       <img src="./public/data Analytics.svg" />
        <h4 class=" text-lg text-gray-500 leading-relaxed text-center ">Data Analytics </h4>
        </div>
        <div
      class="bg-white overflow-hidden mx-auto mt-4 flex mb-0 rounded py-2">
      <p>140+hourofcontent <span></span>600+problems<span/> 10k+Learners</p>
      
      </div>
    </div>
    </div>
    </>
  )
}

export default OurOfferingCards