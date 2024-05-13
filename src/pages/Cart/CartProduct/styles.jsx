import styled from "styled-components";

export const CartProductUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  // align-items: center;
  padding: 20px;
  min-height: 80px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  gap: 10px;
`;

export const InfoTextWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
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
  font-size: 14px;
  font-family: Poppins-Bold;
  letter-spacing: -0.3px;
  word-spacing: 0px;
`;

export const CartProductPriceUI = styled.p`
  font-size: 15px;
  font-family: Poppins-Bold;
`;

export const CloseIconWrapperUI = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 22px;
  cursor: pointer;
`;
