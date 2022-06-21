import React, { useEffect, useState } from "react";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import { GrCart } from "react-icons/gr";

const NavBar = () => {
  const navigate = useNavigate();
  const [badge, setBadge] = useState(0);

  useEffect(() => {
    const item = localStorage.getItem("item");
    if(item){
    if (item.length) {
      setBadge(JSON.parse(item).length);
    }}
  }, [badge]);

  console.log("first")

  return (
    <>
      <StyledHeaderTop className="sticky-header">
        <StyledLeftSideMenu>
          <h2 onClick={() => navigate("/")} className="instaCart__title">
            InstaCart
          </h2>
        </StyledLeftSideMenu>
        <StyledRightSideMenu>
          <LoginButton>Login</LoginButton>

          <BadgeCount
            count={badge}
            size={"small"}
            onClick={() => {
              navigate("/dashboard/cart");
            }}
          >
            <GrCart
              className="bell_icon"
              width="26"
              height="26"
              onClick={() => {
                navigate("/dashboard/cart");
              }}
            />
          </BadgeCount>
        </StyledRightSideMenu>
      </StyledHeaderTop>
    </>
  );
};

export default NavBar;

export const StyledHeaderTop = styled.div`
  height: 80px;
  background-size: cover;
  background-position: 100% 100%;
  display: flex;
  padding: 0px 30px;
  ${"" /* position: fixed; */}
  width: 100%;
  z-index: 1200;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

  @media (max-width: 991.98px) {
    padding: 0 15px;
    width: 100%;
  }
`;

export const StyledLeftSideMenu = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  color: #ffffff;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 40px;
    color: #aaaaaa;
    margin: 0;
    cursor: pointer;
  }
`;
export const StyledRightSideMenu = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: flex-end;
`;

export const LoginButton = styled(Button)`
  border: none;
  margin: 0px 12px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  position: relative;
  background-color: #cbcbcb;
  color: #777777;
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  height: 40px;
  border-radius: 24px;
  padding: 8px 12px;
  width: 100px;
  :hover {
    color: #777777;
    text-decoration: none;
    background: #aaaaaa;
  }
`;
export const BadgeCount = styled(Badge)`
  .ant-badge-count {
    top: 0px;
    right: 1px;
    box-shadow: none;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    font-size: 12px;
    background: linear-gradient(142.07deg, #fc3c3c 13.94%, #ad1b1b 86.39%);
  }
  .bell_icon {
    font-size: 21px;
    color: white;
    cursor: pointer;
  }
`;
