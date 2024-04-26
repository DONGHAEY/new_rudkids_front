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
  font-size: 28px;
`;

export const ProductPriceTextUI = styled.h3`
  font-family: Poppins-Medium;
  font-size: 20px;
`;

export const ModelDescriptionUI = styled.p`
  font-family: Poppins-Medium;
  font-size: 14.5px;
`;

export const ComponentListUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 80%;
  margin-block: 5px;
  overflow-x: scroll;
`;
