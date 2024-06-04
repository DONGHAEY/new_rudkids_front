import { Modal } from "@mui/material";
import styled from "styled-components";

export const CenterModalUI = styled(Modal)`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  position: fixed;
`;

export const BottomBoxUI = styled.div`
  position: absolute;
  width: 100%;
  max-width: 430px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  gap: 18px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  z-index: 1;
`;

export const SelectBoxListUI = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  width: 90%;
  gap: 10px;
`;
