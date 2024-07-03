import styled from "styled-components";

export const ListUI = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin-top: 2%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(0%, 100%);
  column-gap: 5%;
  width: 90%;
`;

export const ProductBoxUI = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-bottom: 9%;
  text-decoration: none;
  line-height: 0;
  position: relative;
  animation: bounceFadeIn 1s;
`;

export const ProductImgWrapperUI = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: clamp(0rem, 3vw, 1rem);
  overflow: hidden;
`;

export const ProductImgUI = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const ProductInfoWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5%;
`;

export const ProductNameTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 3.8vw, 0.9rem);
  line-height: 180%;
  letter-spacing: 0%;
  color: white;
`;

export const ProductPriceTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 3vw, 0.8rem);
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
`;
