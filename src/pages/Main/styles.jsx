import styled from "styled-components";

export const PageUI = styled.div`
  background-color: #1a94d9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  min-height: 100%;
`;

export const ListUI = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  width: 90%;
`;

export const WrapperUI = styled.div`
  width: 100%;
`;

export const ProductBoxUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const ProductImgWrapperUI = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 14px;
`;

export const ProductInfoWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductNameTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
`;

export const ProductPriceTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 11px;
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
`;
