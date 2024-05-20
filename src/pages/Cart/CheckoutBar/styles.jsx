import styled from "styled-components";

export const SpacerUI = styled.div`
  margin-top: 133px;
`;

export const OrderBarWrapperUI = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  max-width: 430px;
  display: flex;
`;

export const PaymentsImgUI = styled.img`
  height: 24px;
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
  gap: 16px;
  justify-content: space-between;
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
