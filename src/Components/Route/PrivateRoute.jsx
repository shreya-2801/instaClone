import React, { useEffect,useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ auth }) => {
  const isUserLoggedIn = () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogIn"));
    if (isLogin) {
      return true;
    } else {
      return false;
    }
  };

  return isUserLoggedIn() ? <Outlet/> : <Navigate to="/login" />;
};
export default PrivateRoute;