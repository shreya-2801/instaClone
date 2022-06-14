import React from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { Button } from "../Style/Style";
const { Search } = Input;
const Dashboard = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <div>
        <h2>InstaCart</h2>

        <Search
          placeholder="Search products,stores and recipes"
          allowClear
          size="large"
          onSearch={onSearch}
          enterButton
          style={{
            position: "relative",
            // -webkit-box-flex: "1",

            // -ms-flex-positive: "1",
            flexGrow: "1",
            width:"800px",
            flexShrink: "1",
            marginRight: "8px",
          }}
        />

        <Button>Log in</Button>
      </div>
      <div>
        <Link to="/dashboard/beauty">
          <h3>Beauty products near you</h3>
          <img
            src="https://d3t32hsnjxo7q6.cloudfront.net/i/af1f35f15ee64cc1003f1ccfc6451d71_ra,w158,h184_pa,w158,h184.jpeg"
            alt="Loading...."
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "1px solid black",
            }}
          />
          <div>Beauty</div>
        </Link>
      </div>
      <div>
        <h3>Recipes</h3>
        <Link to="/dashboard/recipes">
          <img
            src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/27e868e06ffb49aeb558572a9187f56b.png"
            alt="Loading...."
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <div>Recipes</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
