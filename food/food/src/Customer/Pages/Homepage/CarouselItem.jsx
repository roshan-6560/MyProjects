import React from "react";

const CarouselItem = ({ image, title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-[15rem] h-[10rem] lg:w-[14-rem] lg:h-[14rem]
        rounded-full object-cover object-center "
        src={image}
        alt="img not found"
      />
      <span className="py-3 font-semibold text:xl text-gray-400">{title}</span>
    </div>
  );
};

export default CarouselItem;
