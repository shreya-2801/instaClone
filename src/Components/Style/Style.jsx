import styled from "styled-components";
import { Button } from "antd";

export const LoginButton = styled(Button)`
  border: none;
  margin: 0px 12px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  position: relative;
  background-color: rgb(10, 173, 10);
  color: rgb(255, 255, 255);
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  height: 40px;
  border-radius: 24px;
  padding: 8px 12px;
  width: auto;
`;
export const DivWrap = styled.div`
  background-color: #fafafb;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  padding: 10px;
  padding-bottom: 0;
  margin-top: 40px;
  margin-bottom: 10px;
  height: 200px;
`;
export const BlogWrap = styled.div`
  float: left;
  width: 49%;
  margin: 0 20px 10px 10px;
  min-height: 400px;
  background: #f0f8ff;
  box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 25px;
  color: #414141;
`;
export const InputWrap = styled.input`
  display: flex;
  flex-direction:column;
  border-radius: 5px;
  border: 0.1px solid gray;
  width: auto;
  height: 2rem;
  margin: 1rem 1.5rem;
`;
