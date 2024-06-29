import styled from "styled-components";

export const CartProductUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
  background-color: rgba(255, 255, 255);
  border-radius: clamp(0rem, 5vw, 1rem);
  margin-block: 2%;
  animation: bounceFadeIn 500ms;
`;

export const ProductImgUI = styled.img`
  width: 30%;
  max-width: 90px;
  aspect-ratio: 1/1;
  background-color: ghostwhite;
  object-fit: cover;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 9%;
`;

export const InfoTextWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityGroupUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  gap: 6%;
`;

export const QuantityTextUI = styled.p`
  font-family: Poppins-SemiBold;
  text-align: center;
  font-size: clamp(0rem, 3.8vw, 0.8rem);
`;

export const QuantityButtonUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #767676;
  color: white;
  aspect-ratio: 1/1;
  font-size: clamp(0rem, 3vw, 0.5rem);
  padding: 1%;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
`;

export const CartProductNameUI = styled.p`
  font-size: clamp(0rem, 5vw, 1.03rem);
  font-family: Poppins-Bold;
  letter-spacing: -0.05em;
  line-height: 120%;
  word-spacing: 0px;
`;

export const CartProductPriceUI = styled.p`
  font-size: clamp(0rem, 4.3vw, 0.9rem);
  font-family: Poppins-Bold;
  line-height: 200%;
`;

export const OptionsSectionUI = styled.div`
  font-family: Pretendard-Medium;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 100%;
  font-size: clamp(0rem, 3.5vw, 0.75rem);
  letter-spacing: -0.05em;
  color: #6f6f6f;
`;

export const CloseIconWrapperUI = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3%;
  z-index: 9;
  font-size: 22px;
  cursor: pointer;
`;
