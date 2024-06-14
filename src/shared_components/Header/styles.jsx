import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuBarModalUI = styled(Modal)`
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 430px;
  margin: auto;
  overflow: scroll;
  z-index: 999;
`;

export const LogoIconUI = styled(Link)`
  object-fit: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const HeaderUI = styled.div`
  top: 0;
  z-index: 555;
  position: ${({ position }) => position};
  width: 85%;
  max-width: 370px;
  height: 55px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  font-size: 25px;
  align-items: center;
  justify-content: space-between;
`;

export const IconLinkUI = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  color: black;
`;

export const SpacerUI = styled.div`
  margin-top: 55px;
  /* padding-top: 5px; */
`;

export const CartCntTextUI = styled.p`
  position: absolute;
  font-size: 14px;
  width: 15px;
  height: 15px;
  font-family: Poppins-Bold;
  line-height: 0px;
  right: -8px;
  top: -8px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: 1;
  padding: 3px;
`;
