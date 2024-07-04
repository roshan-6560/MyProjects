import React, { useState } from "react";
import {
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
} from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";
import { GoLocation } from "react-icons/go"
import { GrEmoji } from "react-icons/gr"
import "./CreatePost.css";

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption,setCaption]=useState("");

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.file[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    }
  };
  const handleCaptionChange=(e)=>{
    setCaption(e.target.value)
  }
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };
  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (
      (file && (file.type.startsWith("image/"))) ||
      file.type.startsWith("video/")
    ) {
      console.log("file :",file)
      setFile(file);

    } 
    else {
      setFile(null);
      alert("Please Select An Image or Video");
    }
  };
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center ">
            <p>Create New Post</p>
            <Button
              className=""
              variant={"ghost"}
              size="sm"
              colorScheme={"blue"}
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] justify-between pb-5 flex">
              {!file &&
                <div className="w-[50%]">
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className="drag-drop h-full "
                >
                  <div>
                    <FaPhotoVideo className="text-3xl" />
                    <p>Drag Photos or Videos here</p>
                  </div>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Select From Computer
                  </label>
                  <input
                    className="file"
                    type="file"
                    id="file-upload"
                    accept="image/*,video/*"
                    onChange={handleOnChange}
                  />
                </div>
              </div>}
              {file && <img src={URL.createObjectURL(file)}  className="max-h-full" alt="" />}
              <div className="w-[1px] border-z h-full">
               
              </div>
            <div className="w-[50%]">
              <div className="flex items-center px-2">
                <img className="w-7 h-7 rounded-full" src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg" alt="" />
                <p className="font-semibold ml-4">username</p>
              </div> 
              <div className="px-2">
                <textarea placeholder="Write a caption" className="captionInput" name="caption" rows="8" onChange={handleCaptionChange}></textarea>
              </div>
              <div className="flex justify-between px-2">
              <GrEmoji/>
              <p className="opacity-20">{caption?.length}/2,200</p>
              </div>
              <hr />
              <div className="p-2 flex justify-between items-center">
                <input className="locationInput" type="text" placeholder="location" name="location"  />
                <GoLocation/>
              </div>
              <hr />
            </div>
              </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
