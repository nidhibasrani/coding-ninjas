import React from 'react'

const MockInterview = ({image,title,paragraph1,paragraph2}) => {
  return (
    <div class="max-w-xs rounded-lg overflow-hidden shadow-lg mt-5  flex flex-col   bg-white ml-2 h-50  ">
     <img class="w-full" src={image} alt={title}></img>
        <div className=' py-4'>
            <h1 className='font-semibold font-mulish ml-2'>{title}</h1>
        </div>
        <div className='py-3 px-2 font-mulish text-grey'>
            <p>{paragraph1}</p>
        </div>
        <div className='py-0 px-2 text-grey pb-3 '>
            {paragraph2}
        </div>
    </div>
  )
}

export default MockInterview