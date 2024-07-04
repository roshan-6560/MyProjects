import React from "react";
import CarouselItem from "./CarouselItem";
import { topMeals } from "../Topmeals";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MultipleItemCarousel = () => {
  const items = topMeals.map((item) => (
    <CarouselItem image={item.image} title={item.title} />
  ));
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={500}
        infinite
      />
    </div>
  );
};

export default MultipleItemCarousel;
