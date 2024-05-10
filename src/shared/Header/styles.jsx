import { Modal } from "@mui/material";
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

export const LogoWrapperUI = styled.div`
  object-fit: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderUI = styled.div`
  top: 0;
  display: flex;
  z-index: 555;
  position: ${({ position }) => position};
  width: 85%;
  max-width: 300px;
  height: 43px;
  padding-top: 5px;
  margin: auto;
  display: flex;
  flex-direction: row;
  font-size: 25px;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapperUI = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  text-align: center;
`;

export const SpacerUI = styled.div`
  margin-top: 43px;
  padding-top: 5px;
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
  z-index: -1;
  padding: 3px;
`;
