import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
`;

export const FlexWrapperUI = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContentSectionUI = styled.div`
  padding-block: 10px;
  width: 80%;
`;

export const ProductNameTextUI = styled.h1`
  font-family: Poppins-Bold;
`;

export const ProductPriceTextUI = styled.h3`
  font-family: Poppins-Medium;
`;

export const ComponentListUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 80%;
  margin-block: 10px;
  height: 150px;
  overflow-x: scroll;
`;
