import { Button, Card } from "@mui/material";
import React from "react";

const MenuItemCard = () => {
  const handleAddItem = () => {
    console.log("handleAddItem");
  };
  return (
    <Card className="p-5 lg:flex items-center justify-between box">
      <div className="lg:flex items-center lg:space-x-5">
        <img
          className="w-[7rem] h-[7rem] object-cover "
          src="https://media.istockphoto.com/id/1645803443/photo/plain-pulao-or-polao-with-fried-onion-basmati-chawal-served-in-dish-isolated-on-background.jpg?s=612x612&w=0&k=20&c=JrsNd2wYqp8P3wZxCM7EAm-1qAHyIJ0xT1dXNVotck0="
          alt=""
        />
        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
          <p className="font-semibold text-xl">{`Rice`}</p>
          <p>₹{399}</p>
          <p className="text-gray-400">{`A fragrant and mildly spiced rice dish.This pulao is a complete meal in itself`}</p>
        </div>
      </div>
      <div>
        <Button onClick={handleAddItem}>Add</Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
