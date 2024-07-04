import React from "react";
import CustomerRoutes from "./CustomerRoutes";
import { Route, Routes } from "react-router-dom";
import Restaurant from "../Customer/Components/Restaurant/Restaurant";
import Navbar from "../Customer/Components/Navbar/Navbar";

const Routers = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/restaurant/:city/:title/:id" element={<Restaurant />} />
      </Routes>
    </div>
  );
};

export default Routers;
