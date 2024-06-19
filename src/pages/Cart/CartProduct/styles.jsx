import styled from "styled-components";

export const CartProductUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 20px;
  min-height: 80px;
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  animation: bounceFadeIn 500ms;
`;

export const ProductImgUI = styled.img`
  height: 80px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  gap: 12px;
`;

export const InfoTextWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const QuantityGroupUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const QuantityTextUI = styled.p`
  font-family: Poppins-SemiBold;
  min-width: 15px;
  text-align: center;
  font-size: 12px;
`;

export const QuantityButtonUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #767676;
  color: white;
  width: 12px;
  height: 12px;
  font-size: 8px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
`;

export const CartProductNameUI = styled.p`
  font-size: 17px;
  font-family: Poppins-Bold;
  letter-spacing: -0.3px;
  word-spacing: 0px;
`;

export const CartProductPriceUI = styled.p`
  font-size: 15px;
  font-family: Poppins-Bold;
`;

export const OptionsSectionUI = styled.div`
  font-family: Pretendard-Medium;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 100%;
  font-size: 12px;
  margin-top: 6px;
  letter-spacing: -0.5px;
  color: #6f6f6f;
  gap: 5px;
`;

export const CloseIconWrapperUI = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 22px;
  cursor: pointer;
`;
