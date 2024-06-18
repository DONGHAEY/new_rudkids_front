import styled from "styled-components";

export const ListUI = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(0%, 100%);
  column-gap: 16px;
  width: 90%;
`;

export const ProductBoxUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: auto;
  margin-bottom: 16px;
  text-decoration: none;
  line-height: 0;
`;

export const ProductImgWrapperUI = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 14px;
`;

export const ProductImgUI = styled.img`
  width: 90%;
  height: 90%;
  aspect-ratio: 1/1;
  object-fit: cover;
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
