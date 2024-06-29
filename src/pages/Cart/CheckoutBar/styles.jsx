import styled from "styled-components";

export const OrderBarWrapperUI = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  max-width: 430px;
  display: flex;
`;

export const PaymentsImgUI = styled.img`
  width: 65%;
  object-fit: cover;
  margin-bottom: 5%;
`;

export const PoorManUI = styled.img`
  position: absolute;
  top: -48%;
  width: 30%;
  left: 0;
  animation: bounceFadeIn 1s;
`;

export const OrderBarUI = styled.div`
  display: flex;
  width: 100%;
  border-top-left-radius: clamp(0rem, 10vw, 2rem);
  border-top-right-radius: clamp(0rem, 10vw, 2rem);
  background-color: rgba(244, 244, 244, 0.93);
  padding-bottom: 7.5%;
  padding-top: 9.5%;
  padding-inline: 10%;
  flex-direction: column;
  justify-content: space-between;
`;

export const BuyButtonUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "#ec0000")};
  color: white;
  border: none;
  border-radius: 24px;
  pointer-events: all;
  font-family: Poppins-Bold;
  font-size: clamp(0.8rem, 6vw, 1.3rem);
  padding-block: 5%;
  cursor: pointer;
`;
