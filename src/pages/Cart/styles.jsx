import styled from "styled-components";

export const PageUI = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const FlexWrapperUI = styled.div`
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ListWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 90%;
`;

export const PageDescriptionUI = styled.h2`
  font-family: Poppins-SemiBold;
  margin-block: 20px;
  width: 90%;
  text-align: left;
`;
