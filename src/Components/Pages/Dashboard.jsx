import React from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h3>Beauty products near you</h3>
        <Link to="/dashboard/beauty">
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
      <div >
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
      <h3>Shop by store</h3>
      <div style={{display:"flex"}}>
      <div style={{ margin:"20px 23px"}}>
        <Link to="/dashboard/recipes">
          <img
            src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/2fe96fbb83cb4023aef32f209aa7c1c7.jpeg"
            alt="Loading...."
            style={{  width: "200px",
            height: "100px", borderRadius: "15px"  }}
          />
          <div>Zomato</div>
        </Link>
        </div>
        <div style={{ margin:"20px 23px"}}>
        <Link to="/dashboard/beauty">
          <img
            src="https://d3t32hsnjxo7q6.cloudfront.net/i/fb79e7facf701176d4113527c284613f_ra,w158,h184_pa,w158,h184.png"
            alt="Loading...."
            style={{
              width: "200px",
              height: "100px",
              borderRadius: "15px",
              border: "1px solid black",
             
            }}
          />
          <div>maybelline</div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
