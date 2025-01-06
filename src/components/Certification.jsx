import React from 'react'

const Certification = () => {
  return (
    <div className='parent flex gap-5 items-center border border-[#d8cbb1] px-2 p-5 max-w-screen-lg mx-auto rounded-lg justify-between'>
        <div className='w-2/6 '>
            <img src="./public/certification.webp" alt="image" height={200} width={200}/>
        </div>
        <div>
            <p className='text-bold font-mulish text-2xl w-2/3'>We are an approved training partner of NSDC under their scheme for market led fee-based services</p>
        </div>
    </div>
  )
}

export default Certification