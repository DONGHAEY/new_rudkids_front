import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";

export const PageUI = styled.div`
  background-image: url(${backgroundImgSrc});
  background-size: cover;
  background-repeat: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const ListUI = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 300px;
  flex-direction: column;
  align-items: center;
  align-items: center;
  width: 90%;
  gap: 41px;
`;
