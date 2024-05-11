import styled from "styled-components";

export const OrderBarUI = styled.div`
  display: flex;
  width: 100%;
  pointer-events: none;
  bottom: 0;
`;

export const SubmitUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px;
  padding-bottom: 24px;
  width: 100%;
`;

export const BuyNowButtonUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "#ec0000")};
  color: white;
  height: 60px;
  border: none;
  border-radius: 24px;
  gap: 15px;
  pointer-events: all;
  font-family: Poppins-Bold;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
