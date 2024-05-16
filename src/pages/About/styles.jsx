import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* overflow: scroll; */
  /* background-color: skyblue; */
`;

export const PageContentUI = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  background-color: skyblue;
  z-index: -1;
  overflow: scroll;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexColUI = styled.div`
  display: flex;
  position: absolute;
  padding-block: 100px;
  z-index: -1;
  width: 90%;
  max-height: 100%;
  flex-direction: column;
  color: whitesmoke;
  overflow: scroll;
  font-family: Poppins-Bold;
`;
