import styled from "styled-components";

export const ProductBoxUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 16px;
`;

export const ProductImgWrapperUI = styled.div`
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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
