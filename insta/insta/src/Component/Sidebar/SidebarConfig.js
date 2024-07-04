import {AiOutlineSearch,AiOutlineHome,AiFillHome, AiOutlineCompass, AiFillCompass, AiOutlineMessage, AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle} from "react-icons/ai"
import {RiVideoFill, RiVideoLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"

export const menu=[
    {
       title:"Home" ,
       icon:<AiOutlineHome className="text-2xl mr-5"/>,
       activeIcon:<AiFillHome className="text-2xl mr-5"/>
    },
    {
        title:"Search" ,
        icon:<AiOutlineSearch className="text-2xl mr-5"/>,
        activeIcon:<AiOutlineSearch className="text-2xl mr-5"/>
     },
     {
        title:"Explore" ,
        icon:<AiOutlineCompass className="text-2xl mr-5"/>,
        activeIcon:<AiFillCompass className="text-2xl mr-5"/>
     },
     {
        title:"Reels" ,
        icon:<RiVideoLine className="text-2xl mr-5"/>,
        activeIcon:<RiVideoFill className="text-2xl mr-5"/>
     },
     {
        title:"Message" ,
        icon:<AiOutlineMessage className="text-2xl mr-5"/>,
        activeIcon:<AiFillMessage className="text-2xl mr-5"/>
     },
     {
        title:"Notification" ,
        icon:<AiOutlineHeart className="text-2xl mr-2"/>,
        activeIcon:<AiFillHeart className="text-2xl mr-2"/>
     },
     {
        title:"Create" ,
        icon:<AiOutlinePlusCircle className="text-2xl mr-5"/>,
        activeIcon:<AiFillPlusCircle className="text-2xl mr-5"/>
     },
     {
        title:"Profile" ,
        icon:<CgProfile className="text-2xl mr-5"/>,
        activeIcon:<CgProfile className="text-2xl mr-5"/>
     }
]