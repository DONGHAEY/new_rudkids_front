import styled from "styled-components";

export const CartProductUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block: 24px;
  padding-inline: 5%;
  gap: 30px;
  /* min-height: 80px; */
  background-color: rgba(255, 255, 255, 0.9);
  border: solid 2px;
  border-color: #e7e7e7;
  border-radius: 20px;
`;

export const FlexColUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? 0};
  width: 100%;
`;

export const QuantityTextUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Pretendard-Bold;
  min-width: 15px;
  text-align: center;
  color: #6f6f6f;
  font-size: 12px;
  line-height: 120%;
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
  line-height: 20px;
  font-family: Poppins-Bold;
  letter-spacing: -0.3px;
  word-spacing: 0px;
  line-height: 120%;
`;

export const CartProductPriceUI = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-family: Poppins-Bold;
  letter-spacing: -0.3px;
  word-spacing: 0px;
  line-height: 120%;
`;

export const OptionsSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  line-height: 120%;
  font-family: Pretendard-Bold;
  font-size: 12px;
  color: #6f6f6f;
`;

export const CloseIconWrapperUI = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 22px;
  cursor: pointer;
`;
