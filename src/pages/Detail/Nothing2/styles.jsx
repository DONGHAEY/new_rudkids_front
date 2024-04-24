import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  // position: relative;
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
