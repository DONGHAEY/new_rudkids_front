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
  padding-inline: 7%;
  padding-bottom: 5.5%;
  width: 100%;
`;

export const BuyNowButtonUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "#ec0000")};
  color: white;
  border: none;
  border-radius: 24px;
  width: 100%;
  pointer-events: all;
  font-family: Poppins-Bold;
  font-size: clamp(0.8rem, 6vw, 1.3rem);
  padding-block: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
