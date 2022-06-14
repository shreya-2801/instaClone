import axios from "axios";
import React from "react";

const Beauty = () => {
  axios
    .get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    )
    .then(function (response) {
      console.log("data", response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <div>Beauty</div>;
};

export default Beauty;
