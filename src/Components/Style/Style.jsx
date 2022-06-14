import Styled from "styled-components";
 import { Input,Button as BaseButton } from "antd";

 export const Button = Styled(BaseButton)`
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
 height: 48px;
 border-radius: 24px;
 padding: 8px 12px;
 width: auto;
 `;