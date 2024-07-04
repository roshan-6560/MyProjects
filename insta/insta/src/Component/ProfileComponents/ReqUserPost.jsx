import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaComment} from "react-icons/fa"
import './ReqUser.css'

const ReqUserPost = () => {
  return (
    <div className='p-2 w-full h-full'>
        <div className=' post w-60 h-60'>
            <img className='cursor-pointer' src="https://media.istockphoto.com/id/1455965102/photo/beautiful-sunrise-bursting-through-the-eucalyptus-trees-as-it-rises-over-a-mountain-beside-a.webp?b=1&s=612x612&w=0&k=20&c=Vp_WNf8iy1nl49r5HpYH84ra15CmDRkpm64vdBQMLnk=" alt="" />
          <div className='overlay'> 
            <div className='overlay-text flex justify-between'>
                 <div>
                     <AiFillHeart></AiFillHeart> <span>10</span>
                 </div> 
                 <div><FaComment/><span>30</span></div>
            </div>
          </div>
        </div>
    </div>
  )    
}

export default ReqUserPost
