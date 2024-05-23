import React from 'react'
  
 const VedioTitle = ({title,overview}) => {
  
  return (
    <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-3xl '>{title}</h1>
      <p className='py-4 text-l w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white py-2 px-6 text-xl rounded-lg text-black hover:bg-opacity-50'>▶️Play</button>
        <button className='bg-gray-400 py-2 px-8 text-xl rounded-lg text-white hover:bg-opacity-50  mx-2'>ℹ️ More Info</button>
      </div>
    </div>
  )
}
export default VedioTitle;
