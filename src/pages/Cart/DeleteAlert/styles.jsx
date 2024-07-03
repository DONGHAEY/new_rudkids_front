import { Modal } from "@mui/material";
import styled from "styled-components";

export const CenterModalUI = styled(Modal)`
  margin: 0 auto;
  width: 90%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 10%;
  padding-inline: 5%;
`;

export const AskSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3%;
  justify-content: center;
  font-size: clamp(0rem, 5vw, 1.2rem);
  font-family: Pretendard-SemiBold;
`;

export const BtnListUI = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8%;
  gap: 2%;
`;
