import React, { useState } from "react";
import { Card, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RestaurantCard = ({ item, index }) => {
  const navigate = useNavigate();
  const [isCommLike, setIsCommLike] = useState();
  const handleLike = () => {
    setIsCommLike(!isCommLike);
  };

  return (
    <Card className="m-5 w-[18rem] productCard">
      <div
        onClick={() =>
          navigate(`/restaurant/${item.city}/${item.name}/${index + 1}`)
        }
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.imageUrl}
          alt="image not found"
        />
      </div>
      <div className="p-2 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm">
            {item.description.length < 40
              ? item.description.substring(0, 40) + "..."
              : DataTransfer.description}
          </p>
        </div>
        <div>
          <IconButton onClick={handleLike}>
            {isCommLike ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
