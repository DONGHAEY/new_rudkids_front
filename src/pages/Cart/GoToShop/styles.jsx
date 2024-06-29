import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoToShopUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-Bold;
  width: 100%;
  height: 100%;
  margin-block: auto;
  color: white;
  position: relative;
  animation: bounceFadeIn 1s;
`;

export const ShopBtnUI = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 8%;
  background-color: white;
  border-radius: 18px;
  border: none;
  padding-inline: 26%;
  padding-block: 5%;
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 5vw, 1.2rem);
  color: black;
`;

export const MessageUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 5vw, 1rem);
  line-height: 120%;
  margin-top: 8%;
  color: white;
`;

export const SubMessageUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 3.5vw, 0.8rem);
  line-height: 120%;
  margin-top: 3%;
  color: white;
`;
