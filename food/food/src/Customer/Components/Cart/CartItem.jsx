import { IconButton } from "@mui/material";
import React from "react";
import { AddCircleOutline } from "@mui/icons-material";
import { RemoveCircleOutline } from "@mui/icons-material";

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://media.istockphoto.com/id/1430050830/photo/yummy-baguette-sandwich-with-various-vegetables-and-slices-of-cheese-placed-on-white.jpg?s=612x612&w=0&k=20&c=b4mY-GcX3leKBRLwo3wzix4x50MD-CWBI3o3uUp9OQs="
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Bread</p>
            <div className="flex justify-between items-center ">
              <div className="flex items-center space-x-1">
                <IconButton color="primary">
                  <RemoveCircleOutline />
                </IconButton>
                <div className="w-5 h-5 text-xs flex">5</div>
                <IconButton color="primary">
                  <AddCircleOutline />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹256</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
