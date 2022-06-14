import React from "react";
import { BlogWrap, InputWrap, LoginButton } from "../Style/Style";

const Login = () => {
  return (
    <BlogWrap style={{minHeight:"100px",width:"20%"}}>
      <form>
        <InputWrap type="text" placeholder="Enter email " />
        <InputWrap type="password" placeholder="Enter password" />
        <LoginButton>Login</LoginButton>
      </form>
    </BlogWrap>
  );
};

export default Login;
