import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListUI = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  width: 90%;
`;

export const ProductBoxUI = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 16px;
  text-decoration: none;
`;

export const ProductImgWrapperUI = styled.div`
  background-color: white;
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`;

export const ProductImgUI = styled.img`
  width: 90%;
  height: 90%;
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
