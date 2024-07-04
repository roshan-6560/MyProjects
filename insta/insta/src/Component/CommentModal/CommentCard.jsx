import React from "react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommLike, setIsCommLike] = useState();
  const handleCommLike = () => {
    setIsCommLike(!isCommLike);
  };
 
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <hr />
          <div>
            <img
              className="w-9 h-9 rounded-full mt-2"
              src="https://cdn.pixabay.com/photo/2023/11/29/16/10/snowman-8419950_1280.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">username</span>

              <span className="ml-2">Nice post</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>1 min ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>
        <div>
          {isCommLike ? (
            <AiFillHeart
              className="text-xs hover:opacity-50 cursor-pointer text-red-500"
              onClick={handleCommLike}
            />
          ) : (
            <AiOutlineHeart
              className="text-xs hover:opacity-50 cursor-pointer"
              onClick={handleCommLike}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
