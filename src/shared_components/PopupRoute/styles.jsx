import { Modal } from "@mui/material";
import styled from "styled-components";

export const PopupRouteUI = styled(Modal)`
  display: flex;
  width: 100%;
  /* height: 100%; */
  min-height: 100%;
  max-width: 430px;
  margin: 0 auto;
  overflow: scroll;
  border: none;
  background: none;
  background-color: white;
`;
