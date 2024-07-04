import React from "react";
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
  return (
    <div className="border">
      <div>
        <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_1280.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>FullName</p>
            <p className="opacity-70">username</p>
          </div>
        </div>
        <div>
          <p className="text-blue-600 font-semibold">Switch</p>
        </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
            <SuggetionCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
