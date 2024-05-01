import styled from "styled-components";

export const SpacerUI = styled.div`
  margin-top: 180px;
`;

export const OrderBarWrapperUI = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 181px;
  display: flex;
`;

export const OrderBarUI = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  background-color: rgba(244, 244, 244, 0.84);
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalTextUI = styled.p`
  color: #989898;
  font-size: 14px;
  font-family: Poppins-SemiBold;
  line-height: 14px;
`;
export const TotalPriceTextUI = styled.p`
  color: black;
  font-size: 20px;
  font-family: Poppins-Bold;
`;

export const BuyButtonUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "#ec0000")};
  color: white;
  height: 60px;
  border: none;
  border-radius: 24px;
  font-family: Poppins-Bold;
  font-size: 20px;
  cursor: pointer;
`;
