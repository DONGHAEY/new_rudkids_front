import { Modal } from "@mui/material";
import styled from "styled-components";

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

export const RudAlertUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const RudAlertHeadUI = styled.div`
  background: linear-gradient(180deg, #0058ec 0%, #004bc8 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;
  padding-block: 10px;
  font-family: Pretendard-ExtraBold;
  font-size: 14px;
  line-height: 100%;
  color: white;
`;

export const ContentUI = styled.div`
  background: #dadada;
`;
