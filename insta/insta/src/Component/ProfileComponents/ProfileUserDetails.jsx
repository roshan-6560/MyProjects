import React from 'react'
import {TbCircleDashed} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full '>
      <div className='flex items-center'>
        <div className='w-[15]'>
            <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/29/13/28/owl-8419617_1280.jpg" 
            alt="profile pic" />
        </div>
        <div className='space-y-5 ml-8'>
           <div className='flex space-x-10  items-center'>
            <p>Username</p>
            <button>Edit profile</button>
            <TbCircleDashed></TbCircleDashed>
           </div> 
           <div className='flex space-x-10'>
             <div>
                 <span className='font-semibold mr-2'>10</span>
                 <span>Post</span>
             </div>
             <div>
                 <span className='font-semibold mr-2'>5</span>
                 <span>followers</span>
             </div>
             <div>
                <span className='font-semibold mr-2'>7</span>
                <span>following</span>
             </div>
           </div>
           <div>
            <p className='font-semibold'>kshitija kadam</p>
            <p className='font-thin text-sm' >Artist😎 |
                colorfull Life🎨|
               ♌Leo |
               lebendige Farben❤️</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails
