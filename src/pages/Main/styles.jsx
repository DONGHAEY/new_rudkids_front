import styled from "styled-components";

export const PageUI = styled.div`
  background-color: #1a94d9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  justify-content: space-between;
`;

export const SectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  position: relative;
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
