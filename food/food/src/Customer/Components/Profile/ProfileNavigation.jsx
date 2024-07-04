import React from "react";
import { Favorite } from "@mui/icons-material";
import { ShoppingBag } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { AccountBalanceWallet } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  {
    title: "Orders",
    icon: <ShoppingBag />,
  },
  {
    title: "Favorite",
    icon: <Favorite />,
  },
  {
    title: "Address",
    icon: <Home />,
  },
  {
    title: "Payments",
    icon: <AccountBalanceWallet />,
  },
  {
    title: "Logout",
    icon: <Logout />,
  },
];
const ProfileNavigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
  };
  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
    if (item.title === "Logout") {
      handleLogout();
      navigate("/");
    }
  };

  return (
    <div className="group h-[90vh] flex-col justify-center text-xl space-y-8 mt-6">
      {menu.map((item) => (
        <>
          <div
            onClick={() => handleNavigate(item)}
            className="px-5 flex items-center space-x-5 cursor-pointer"
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default ProfileNavigation;
