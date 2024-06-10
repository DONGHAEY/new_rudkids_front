import { Modal } from "@mui/material";
import styled from "styled-components";

export const ModalUI = styled(Modal)`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RudAlertWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
`;

export const ContentImgWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 10px;
  padding-bottom: 20px;
`;
