import React from 'react'
import OurOfferingCards from './OurOfferingCards'
const OurOfferings = () => {
  return (
    <div className='parent flex-col'>
    <div className='text-8xl font-bold text-light text-grey  justify-center flex items-center'>OUR OFFERINGS</div>
    <div className="left flex justify-around gap-6 items-center">
        <div className="logo flex">
        <img src='./public/jobbootcamps.svg' />
        <p className='card text-black font-mulish flex-col'>Job Bootcamps</p>
        <p className='flex-col'>(for graduates)</p>
        <div/>
        </div>
   


    </div>
    <OurOfferingCards/>
   </div>
  
  )
}

export default OurOfferings