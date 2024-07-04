import React from "react";
import "./Searchcss.css";

const SearchComponents = () => {
  return (
    <div className="serachContainer">
      <div>
        <h1>Search</h1>
        <input className="searchInput" type="text" placeholder="Search.." />
      </div>
    </div>
  );
};

export default SearchComponents;
