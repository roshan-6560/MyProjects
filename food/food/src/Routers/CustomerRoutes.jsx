import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/Homepage/HomePage";
import Restaurant from "../Customer/Components/Restaurant/Restaurant";
import Cart from "../Customer/Components/Cart/Cart";
import Profile from "../Customer/Components/Profile/Profile";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:city/:title/:id" element={<Restaurant />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/my-profile/*" element={<Profile />} />
    </Routes>
  );
};

export default CustomerRoutes;
