import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from '../../Component/Post/CreatePostModal'
import SearchComponents from "../Search/SearchComponents";

const Sidebar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const[activeTab,setActiveTab]=useState();
  const [isSearchVisible,setIsSearchVisible]=useState(false);
  const navigate=useNavigate();

  const handleTabClick=(tab)=>{
    setActiveTab(tab)
    if (tab==="profile") {
      navigate("/username")
    }
    else if(tab==="Home"){
      navigate("/");
    }
    else if(tab==="Create"){
      onOpen();
    }
    if(tab==="Search"){
      setIsSearchVisible(true)
    }
    else setIsSearchVisible(false)
  };

  return (
    <div>
      <div className="sticky top-0 h-[100vh]">
        <div className="flex flex-col justify-between px-10">
          <div className="pt-3 pb-5">
            <img 
            className="w-40" 
            src="http://i.imgur.com/zqpwkLQ.png" 
            alt="Instagram" />
          </div>
          <div mt-10>
            {menu.map((item) => (
              <div onClick={()=>handleTabClick(item.title)} className="flex items-center mb-3.5 cursor-pointer text-lg">
                {activeTab===item.title?item.activeIcon:item.icon}
                <p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pt-10 pb-5 ml-10">
          <IoReorderThreeOutline className="text-2xl mr-2" />
          <p className="text-1.5xl mr-5">More</p>
        </div>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen}/>
      {
      <SearchComponents/>}
    </div>
  );
};

export default Sidebar;
