import {
  Divider,
  RadioGroup,
  FormControl,
  Typography,
  FormControlLabel,
  Radio,
  Card,
} from "@mui/material";

import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const categories = [
  "Snacks",
  "Thali",
  "Starter",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accompaniments",
  "Dessert",
];
const foodType = ["Vegetarian Only", "Non-Vegetarian Only", "Both"];
const menu = [1, 1, 1, 1, 1, 1, 1, 1];
const Restaurant = ({ item }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFoodType, setSelectedFoodType] = useState();
  const handleCategoryChange = () => {
    console.log("selectedCategory", selectedCategory);
  };
  const handleFoodTypeChange = () => {
    console.log("selectedFoodType", selectedFoodType);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          {`Home/indian/Mood Restaurant/2/Order Online`}
        </h3>
        <div>
          <img
            className="w-full h-[40vh] object-cover"
            src="https://lh3.googleusercontent.com/p/AF1QipM1bCsN4VtcHHwambWpzoVE0j8ftUgA8s6f3EBk=s1360-w1360-h1020"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold">{`MoodFood Restaurant`}</h1>
          <p className="text-gray-500">description</p>
          <p className="py-3 text-orange-300">
            Open at 10:30am-12midnight (Today)
          </p>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] ">
          <Card div className="p-5 space-y-5 lg:sticky top-28 ">
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Food Type
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="Food Type"
                  value={selectedFoodType}
                  onChange={handleFoodTypeChange}
                >
                  {foodType.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10 mb-2">
          {menu.map((item) => (
            <MenuItemCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
