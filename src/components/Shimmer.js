import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
        {Array(20).fill("").map((e,index) => 
            <div key={index} className='w-[300px] h-[350px] bg-gray-300 p-10 m-10'></div>
        )}
    </div>
  )
}

export default Shimmer