import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuBarModalUI = styled(Modal)`
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 430px;
  position: relative;
  margin: 0 auto;
  z-index: 999;
`;

export const LogoIconUI = styled(Link)`
  width: 55%;
  max-width: 156px;
`;

export const HeaderUI = styled.div`
  top: 0;
  z-index: 555;
  position: ${({ position }) => position};
  width: 85%;
  max-width: 370px;
  height: 7%;
  max-height: 50px;
  padding-block: 3.5%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconLinkUI = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.7rem, 8vw, 2rem);
  text-align: center;
  text-decoration: none;
  color: black;
`;

export const CartCntTextUI = styled.p`
  position: absolute;
  font-size: clamp(0.3rem, 4vw, 1rem);
  width: 70%;
  height: 70%;
  font-family: Poppins-Bold;
  line-height: 0px;
  right: -35%;
  top: -35%;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: 1;
  padding: 2%;
`;
