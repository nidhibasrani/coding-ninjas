import React from 'react'

const MockInterview = () => {
  return (
    <div class="max-w-xs rounded-lg overflow-hidden shadow-lg mt-5  flex flex-col   bg-white ml-2 h-50  ">
     <img class="w-full" src="./public/mock-interview.webp" alt="mockinterview"></img>
        <div className=' py-4'>
            <h1 className='font-semibold font-mulish ml-2'>Mock interview</h1>
        </div>
        <div className='py-3 px-2 font-mulish text-grey'>
            <p>Nail coding assessments and technical challenges</p>
        </div>
        <div className='py-0 px-2 text-grey pb-3 '>
            Gain insights into problem-solving and algorithmic thinking
        </div>
    </div>
  )
}

export default MockInterview