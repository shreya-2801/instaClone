import axios from "axios";
import React, { useEffect, useState } from "react";
import { BlogWrap } from "../Style/Style";

const Recipes = () => {
  const [storeData, setStoreData] = useState([]);
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "20", tags: "under_30_minutes" },
    headers: {
      "X-RapidAPI-Key": "8d4b99f80emsh7b77fb4099084bep11175bjsnca454bc0a5ec",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results, "gaeuryfau");
        setStoreData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return storeData.map((data, index) => (
    <BlogWrap key={index} style={{ width: "25rem" }}>
      <h1>{data.name}</h1>
      <span>{data.description}</span>{" "}
      <img
        src={data.thumbnail_url}
        alt="icons"
        style={{ height: "100px", width: "100px" }}
      />
    </BlogWrap>
  ));
};

export default Recipes;
