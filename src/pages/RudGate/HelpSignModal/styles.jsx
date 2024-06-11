import { Modal } from "@mui/material";
import styled from "styled-components";

export const HelpSignModalUI = styled(Modal)`
  display: flex;
  width: 90%;
  height: 100%;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const RudAlertContentsUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  padding-inline: 30px;
  padding-block: 30px;
`;
