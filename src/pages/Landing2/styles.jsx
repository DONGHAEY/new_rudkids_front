import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

export const BottomFixed = styled.div`
  position: fixed;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const BottomSpacerUI = styled.div`
  width: 100%;
  height: 150px;
`;
