import React from "react";
import "./HomePage.css";
import MultipleItemCarosel from "../Homepage/MultipleItemCarousel";
import RestaurantCard from "./RestaurantCard";
import { restaurant } from "../restaurant";

const HomePage = () => {
  return (
    <div className="">
      <section className="-z-50 banner relative flex  flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">MoodFood</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl ">
            Taste the Convenience : Food,Fast and Delivered.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>
      <section className="flex p-10 lg:py-2 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meals
          </p>
          <MultipleItemCarosel />
        </div>
      </section>
      <section className="px-5 lg:px-20">
        <div className="text-2xl font-semibold text-gray-400 py-1">
          <h1>Order from Our Handpicked Favorites</h1>
          <div className="flex flex-wrap items-center justify-around">
            {restaurant.map((item, index) => (
              <RestaurantCard item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
