import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { LoginButton } from "../Style/Style";
import { Link } from "react-router-dom";
import SearchFilter from "../Store/SearchFilter";
import axios from "axios";

const { Search } = Input;
const NavBar = () => {
  const [searchData, setSearchData] = useState([]);
  const onSearch = (value) => {
    setSearchData(value);
  };
  useEffect(() => {
    console.log(searchData, "searchdata");
    axios
      .get(
        'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
      )

      .then((responseData) => console.log(responseData.data));
  }, [searchData]);

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
        <Link to="/login">
          <LoginButton>Log in</LoginButton>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
