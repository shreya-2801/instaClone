import React from "react";
import NavBar from "../Components/Pages/NavBar";
import Content from "../content/Content";

function Layout() {
  return (
    <div className="content-wrap">
      <NavBar />
      <Content />
    </div>
  );
}

export default Layout;
