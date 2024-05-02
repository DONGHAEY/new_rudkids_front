import styled from "styled-components";

export const CartProductUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // padding-left: 35px;
  // padding-right: 32px;
  // padding-block: 20px;
  padding: 20px;
  gap: 30px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.9);
  border: solid 2px;
  border-color: #e7e7e7;
  border-radius: 20px;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  height: 90%;
`;

export const InfoTextWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
`;

export const QuantityGroupUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const QuantityTextUI = styled.p`
  font-family: Pretendard-ExtraBold;
  min-width: 15px;
  text-align: center;
  color: #6f6f6f;
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
`;

export const CartProductNameUI = styled.p`
  font-size: 15px;
  line-height: 15px;
  font-family: Poppins-Bold;
`;

export const CartProductPriceUI = styled.p`
  font-size: 15px;
  line-height: 15px;
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
