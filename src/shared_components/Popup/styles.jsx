import { Modal } from "@mui/material";
import styled from "styled-components";

export const TitleUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 20px;
`;

export const PopupUI = styled(Modal)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: none;
  border: none;
  background: none;
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 430px;
  min-height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0;
`;

export const PopupHeaderUI = styled.div`
  display: flex;
  padding-inline: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-height: 60px;
  font-size: 20px;
`;