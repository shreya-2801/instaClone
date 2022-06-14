import React, { useState } from "react";
import { Input } from "antd";
import { LoginButton } from "../Style/Style";
import { Link } from "react-router-dom";
import SearchFilter from "../Store/SearchFilter";

const { Search } = Input;
const NavBar = () => {
  const [searchData, setSearchData] = useState([]);
  const onSearch = (value) => {
    setSearchData(value);
  };
  console.log(searchData)
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", margin: " 12px 8px" }}
      >
        <h2>InstaCart</h2>

        <Search
          placeholder="Search products,stores and recipes"
          allowClear
          size="large"
          onSearch={onSearch}
          enterButton
          style={{
            position: "relative",
            flexGrow: "1",
            width: "80px",
            flexShrink: "1",
            margin: " 0 15px",
          }}
        />
        <Link to="/login"></Link>
        <LoginButton>Log in</LoginButton>
      </div>
      <SearchFilter  data={searchData}/>
    </>
  );
};

export default NavBar;
