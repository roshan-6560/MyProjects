import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./Navi.css";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/my-profile");
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState();
  const openMenu = Boolean(anchorEl);

  const handleLogout = () => {
    console.log("handle logout");
  };
  return (
    <nav className="px-5 z-50 py-[0.8] bg-[#e91e63] lg:px-20 lg:py-2 flex justify-between">
      {" "}
      <div className="flex items-center space-x-4 ">
        <div
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
          onClick={() => navigate("/")}
        >
          <li className="logo font-semibold text-gray-300 text-2xl">
            MoodFood
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2 ">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
        {true ? (
          <span
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "basic-menu" : undefined}
            onClick={false ? handleOpenMenu : navigateToProfile}
            className="font-semibold cursor-pointer"
          >
            Roshan
          </span>
        ) : (
          <IconButton>
            <PersonIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/admin")}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
