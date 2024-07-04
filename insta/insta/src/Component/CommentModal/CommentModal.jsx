import React from "react";
import "./CommentCard";
import { useState } from "react";
import { ModalBody, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import {
  BsThreeDots,
  BsBookmarkFill,
  BsBookmark,
  BsEmojiSmile,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Comm.css";

import CommentCard from "./CommentCard";

const CommentModal = ({
  onClose,
  isOpen,
  isSaved,
  isPostLiked,
  handlePostLike,
  handlePostSave,
}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh] relative">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2023/11/30/20/43/roses-8422426_1280.png"
                  alt="image not found"
                />
              </div>
              <div className="w-[55%] pl-10">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div className="flex">
                      <img
                        className=" w-9 h-9 rounded-full ml-5"
                        src="https://cdn.pixabay.com/photo/2023/11/29/13/28/owl-8419617_1280.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="ml-3">Username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <div className="comment">
                  {[1, 1, 1, 1, 1].map(() => (
                    <CommentCard />
                  ))}
                </div>

                <div className="absolute bottom-0 w-[90%]">
                  <div className="flex justify-between items-center w-full py-4">
                    <div className="flex items-center space-x-2">
                      {isPostLiked ? (
                        <AiFillHeart
                          className="text-2xl hover:opacity-50 cursor-pointer text-red-500"
                          onClick={handlePostLike}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handlePostLike}
                        />
                      )}
                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                      <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer">
                      {isSaved ? (
                        <BsBookmarkFill
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handlePostSave}
                        />
                      ) : (
                        <BsBookmark
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handlePostSave}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <p>10 likes</p>
                    <p className="opacity-50 text-sm cursor-pointer">
                      1 day ago
                    </p>
                  </div>
                  <div className="border border-t w-[55%]">
                    <div className="flex items-center px-3 ">
                      <BsEmojiSmile />
                      <input
                        className="commentInput w-[70%]"
                        type="text"
                        placeholder="Add a Comment..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
