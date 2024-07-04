import React from "react";
import AddressCard from "../Cart/AddressCard";

const address = [1, 1, 1, 1];
const UserAdd = ({ item }) => {
  return (
    <div>
      <div className="flex items-center flex-col lg:px-10">
        <h1 className="py-7 text-xl font-semibold text-center">Addresses</h1>
        <div className="flex flex-wrap justify-center space-x-5">
          {address.map((item) => (
            <AddressCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
