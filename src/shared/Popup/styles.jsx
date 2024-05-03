import { Modal } from "@mui/material";
import styled from "styled-components";

export const TitleUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 20px;
`;

export const PopupUI = styled(Modal)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: none;
  border: none;
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 430px;
  min-height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const PopupHeaderUI = styled.div`
  display: flex;
  padding-inline: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-height: 80px;
  font-size: 20px;
`;
