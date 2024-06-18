import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoToShopUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-Bold;
  margin-block: auto;
  color: white;
`;

export const ShopBtnUI = styled(Link)`
  text-decoration: none;
  color: white;
  margin-top: 30px;
  background-color: black;
  border-radius: 18px;
  border: none;
  padding-inline: 94px;
  padding-block: 18px;
  font-family: Poppins-Bold;
  font-size: 17.24px;
  color: white;
`;

export const MessageUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 17px;
  line-height: 120%;
  margin-top: 23px;
  color: black;
`;

export const SubMessageUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 14px;
  line-height: 120%;
  margin-top: 12px;
  color: black;
`;
