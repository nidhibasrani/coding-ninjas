import React from 'react'

const PlacementReport = () => {
  return (
   <div className="parent flex flex-col border justify-center items-center gap-1 mt-4 w-fit p-6 h-70 rounded bg-white ml-2 ">
    <div >
    <img src="https://i.pravatar.cc/50" className='rounded-full' width={70} height={70}></img>
        <div>
<img src="./public/microsoft.png" height="70" width="70"></img>
        </div>
        <div className='font-mulish font-semibold text-grey text-sm flex '>
            <h3>Service To Product </h3>
        </div>
    </div>
   </div>
  )
}

export default PlacementReport