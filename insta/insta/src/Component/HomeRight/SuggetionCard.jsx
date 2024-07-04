import React from 'react'

const SuggetionCard = () => {
  return (
    <div className='flex justify-between items-center '>
      <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2012/03/01/00/21/bridge-19513_1280.jpg" alt="" />
        <div className='ml-2'>
            <p className='text-sm font-semibold'>username</p>
            <p className='text-sm font-semibold opacity-70'>Follows you</p>
        </div>
      </div>
      <p className='text-blue-600 text-sm font-semibold'>follow</p>
    </div>
  )
}

export default SuggetionCard
