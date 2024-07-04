import { Modal } from "@mui/material";
import styled from "styled-components";

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 10%;
  padding-inline: 5%;
`;

export const AskSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 90%;
  font-size: clamp(0rem, 5vw, 1.2rem);
  font-family: Pretendard-SemiBold;
`;

export const BtnListUI = styled.div`
  width: 90%;
  display: flex;
  margin-top: 8%;
  gap: 3%;
`;

export const ModalUI = styled(Modal)`
  width: 90%;
  max-width: 390px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
