import styled from "styled-components";

export const ProductUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block: 5.5%;
  padding-inline: 5%;
  background-color: rgba(255, 255, 255, 0.9);
  border: solid 2px;
  border-color: #e7e7e7;
  border-radius: clamp(0rem, 5vw, 1rem);
  margin-block: 1.5%;
`;

export const FlexColUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 13%;
`;

export const ProductImgUI = styled.img`
  width: 30%;
  max-width: 88px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const QuantityTextUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Pretendard-Bold;
  min-width: 15px;
  text-align: center;
  color: #6f6f6f;
  font-size: clamp(0rem, 3.3vw, 0.8rem);
  line-height: 250%;
`;

export const ProductNameUI = styled.p`
  font-size: clamp(0rem, 4vw, 1rem);
  font-family: Poppins-Bold;
  letter-spacing: -0.3px;
  word-spacing: 0px;
  line-height: 100%;
`;

export const ProductPriceUI = styled.p`
  font-size: clamp(0rem, 3.8vw, 0.95rem);
  font-family: Poppins-Bold;
  letter-spacing: -0.3px;
  word-spacing: 0px;
  line-height: 200%;
`;

export const OptionsSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 120%;
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 3vw, 0.75rem);
  color: #6f6f6f;
`;
