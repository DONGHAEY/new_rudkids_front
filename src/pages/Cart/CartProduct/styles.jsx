import styled from "styled-components";

export const CartProductUI = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: rgba(247, 247, 247, 0.93);
  border-radius: 20px;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 20px;
  justify-content: space-around;
`;

export const QuantityGroupUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const QuantityTextUI = styled.p`
  font-family: Poppins-SemiBold;
  min-width: 15px;
  text-align: center;
`;

export const QuantityButtonUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #767676;
  color: white;
  width: 18px;
  height: 18px;
  font-size: 15px;
  border-radius: 100%;
  cursor: pointer;
`;

export const CartProductNameUI = styled.p`
  font-size: 14px;
  font-family: Poppins-Bold;
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
