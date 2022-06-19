import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Pages/Dashboard";
import Beauty from "../Components/Store/Beauty";
import Cart from "../Components/Store/Cart";
import Recipes from "../Components/Store/Recipes";

function Content() {
  return (
    <div>
      {/* <div style={{ marginTop: "80px" }}> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard/beauty" element={<Beauty />} />
        <Route path="/dashboard/recipes" element={<Recipes />} />
        <Route path="/dashboard/cart" element={<Cart />} />
        
      </Routes>
    </div>
  );
}

export default Content;
