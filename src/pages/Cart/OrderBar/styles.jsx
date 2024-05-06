import styled from "styled-components";

export const SpacerUI = styled.div`
  margin-top: 244px;
`;

export const OrderBarWrapperUI = styled.div`
  position: fixed;
  max-width: 430px;
  bottom: 0;
  width: 100%;
  height: 244px;
  pointer-events: none;
  display: flex;
`;

export const OrderBarUI = styled.div`
  display: flex;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: rgba(244, 244, 244, 0.93);
  padding-bottom: 24px;
  padding-top: 30px;
  padding-inline: 30px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalTextUI = styled.p`
  color: #989898;
  font-size: 14px;
  font-family: Poppins-SemiBold;
  line-height: 14px;
`;

export const ColWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const PriceNameTextUI = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 13px;
  line-height: 13px;
  color: #818181;
`;

export const RowBeetwenUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TotalPriceTextUI = styled.p`
  color: black;
  font-size: 20px;
  font-family: Poppins-Bold;
`;

export const PriceTextUI = styled.p`
  color: #818181;
  font-size: 16px;
  line-height: 16px;
  font-family: Poppins-SemiBold;
`;

export const BuyButtonUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "#ec0000")};
  color: white;
  height: 60px;
  border: none;
  border-radius: 24px;
  pointer-events: all;
  font-family: Poppins-Bold;
  font-size: 20px;
  cursor: pointer;
`;
