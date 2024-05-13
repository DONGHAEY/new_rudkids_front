import styled from "styled-components";

export const OrderPriceUI = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-block: 30px;
  width: 100%;
  gap: 26px;
  border-radius: 16px;
`;

export const PriceRowUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 20px;
  justify-content: space-between;
`;

export const PriceNameTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: ${({ fontSize }) => fontSize ?? "15px"};
  color: ${({ color }) => color ?? "black"};
  line-height: 120%;
  letter-spacing: 0;
`;

export const PriceTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: 120%;
  letter-spacing: 0;
`;

export const TotalPriceTxtUI = styled.p`
  font-family: Poppins-Bold;
  color: #0075ff;
  line-height: 120%;
  font-size: 22px;
  letter-spacing: 0;
`;

export const ColUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? "0px"};
`;
