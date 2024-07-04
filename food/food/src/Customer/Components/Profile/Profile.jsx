import React from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Divider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";
import Order from "./Order";
import UserAdd from "./UserAdd";
import UserPayment from "./UserPayment";
import Favorite from "./Favorite";

const Profile = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-[20%] border-r-gray-500 min-h-screen">
        <ProfileNavigation />
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/useradd" element={<UserAdd />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/payments" element={<UserPayment />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
