import { Modal } from "@mui/material";
import styled from "styled-components";

export const MenuBarWrapperUI = styled(Modal)`
  position: fixed, relative;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 430px;
  margin: auto;
  overflow: scroll;
  z-index: 999;
`;

export const MenuBarUI = styled.div`
  background-color: #e1e1e1;
  width: 100%;
  max-width: 260px;
  height: 100%;
  display: flex;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  pointer-events: all;
  flex-direction: column;
  justify-content: center;
  padding-inline: 22px;
  gap: 40px;
`;

export const MenuBtnListUI = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 12px;
`;

export const MenuBtnUI = styled.button`
  width: 100%;
  aspect-ratio: 1/1;
  font-size: 16px;
  background: ${({ background }) => background ?? "none"};
  border: none;
  border-radius: 22px;
  color: black;
  cursor: pointer;
`;

export const MenuBtnTextUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 16px;
  line-height: 18px;
  white-space: pre-wrap;
`;

export const DimmedUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  z-index: -1;
`;
