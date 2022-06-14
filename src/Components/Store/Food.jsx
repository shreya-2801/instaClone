import React, { useEffect } from "react";
import axios from "axios";
const Food = () => {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    headers: {
      "X-RapidAPI-Key": "3390f56e6bmsha1c8b460301ca2fp191037jsn46a2f206875b",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return <div>Food</div>;
};

export default Food;
