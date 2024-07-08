import { Modal } from "@mui/material";
import styled from "styled-components";

export const ModalUI = styled(Modal)`
  width: 100%;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 13%;
`;

export const RequireSignUI = styled.div`
  display: flex;
  align-items: center;
  padding: 0%;
  background-color: white;
  border: solid 1.5px black;
  width: 80%;
  margin-bottom: 8%;
`;

export const RequireTxtUI = styled.p`
  font-size: clamp(0rem, 4vw, 1rem);
  font-family: Pretendard-Bold;
  line-height: 120%;
`;
