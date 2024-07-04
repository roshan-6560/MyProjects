import React from "react";
import RestaurantCard from "../../Pages/Homepage/RestaurantCard";
import { restaurant } from "../../Pages/restaurant";

const Favorite = () => {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex flex-wrap justify-center">
        {restaurant.slice(0, 10).map((item) => (
          <RestaurantCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
