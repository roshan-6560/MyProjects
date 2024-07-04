import React, { useState } from 'react'
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import './PostCard.css'
import {FaRegComment} from 'react-icons/fa'
import {RiSendPlaneLine} from 'react-icons/ri'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import CommentModal from '../CommentModal/CommentModal'
import { useDisclosure } from '@chakra-ui/react'

const PostCard = () => {
    const[showDropDown,setShowDropDown]=useState(false);
    const[isPostLiked,setIsPostLiked]=useState(false);
    const[isSaved,setIsSaved]=useState(false);
    const {isOpen, onOpen ,onClose}=useDisclosure();

    const handleClick=()=>{
        setShowDropDown(!showDropDown);
    }
    const handlePostLike=()=>{
      setIsPostLiked(!isPostLiked);
  }
  const handlePostSave=()=>{
    setIsSaved(!isSaved);
   }

   const handleOpenCommentModal=()=>{
    onOpen()
   }
  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className='flex justify-between items-center w-full py-4 px-10'> 
            <div className='flex items-center'>
                <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/17/22/10/road-8395119_1280.jpg" alt="" />
                <div className='pl-2'>
                    <p className='font-semibold text-sm'>Username</p>
                    <p className='font-thin text-sm'>location</p>
                </div>
            </div>
            <div className='dropdown'>
                <BsThreeDots className='dots' onClick={handleClick}/>
                <div className='dropdown-content'>
                   {showDropDown && <p  className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                </div>
            </div>
        </div>
        <div className='w-full'>
          <img className='w-full' src="https://cdn.pixabay.com/photo/2023/11/29/16/10/snowman-8419950_1280.jpg" alt="" />
        </div>
        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className='flex items-center space-x-2'>
            {isPostLiked ?<AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-500" onClick={handlePostLike}/>: <AiOutlineHeart className="text-xl hover:opacity-50 cursor-pointer" onClick={handlePostLike}/>}
            <FaRegComment onClick={handleOpenCommentModal} className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
          </div>
          <div className='cursor-pointer'>
          {isSaved ? <BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" onClick={handlePostSave}/>: <BsBookmark className="text-xl hover:opacity-50 cursor-pointer" onClick={handlePostSave}/>}
          </div>
        </div>
        <div className='w-full py-2 px-5'>
          <p>10 likes</p>
          <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
        </div>

        <div className='border border-t w-full'>
          <div className='flex w-full items-center px-5'>
            <BsEmojiSmile/>
            <input className='commentInput' type="text"  placeholder='Add a Comment..'/>
          </div>
        </div>
      </div>
      <CommentModal 
      handlePostLike={handlePostLike} 
      onClose={onClose} 
      isOpen={isOpen} 
      handlePostSave={handlePostSave} 
      isPostLiked={isPostLiked}
      isSaved={isSaved}/>
    </div>
  )
}

export default PostCard
