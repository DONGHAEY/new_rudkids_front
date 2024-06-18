import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoToShopUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-Bold;
  height: 100%;
  margin-block: auto;
  color: white;
`;

export const ShopBtnUI = styled(Link)`
  text-decoration: none;

  color: black;
  margin-top: 30px;
  background-color: white;
  border-radius: 18px;
  border: none;
  padding-inline: 94px;
  padding-block: 18px;
  font-family: Poppins-Bold;
  font-size: 17.24px;
  color: black;
`;

export const MessageUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 17px;
  line-height: 120%;
  margin-top: 23px;
  color: white;
`;

export const SubMessageUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 14px;
  line-height: 120%;
  margin-top: 12px;
  color: white;
`;
