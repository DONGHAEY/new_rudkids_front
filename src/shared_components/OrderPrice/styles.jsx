import styled from "styled-components";

export const OrderPriceUI = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-block: 30px;
  padding-inline: 23px;
  gap: 26px;
  border-radius: 16px;
`;

export const PriceRowUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-family: Pretendard-Bold;
  color: ${({ color }) => color ?? "black"};
  line-height: 120%;
  font-size: 22px;
  letter-spacing: 0;
`;

export const ColUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? "0px"};
`;

export const FreeShippingPriceUI = styled.div`
  background-color: #c3deff;
  padding-block: 4px;
  padding-inline: 8px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const FreeTxt1UI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #383838;
`;

export const FreeTxt2UI = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #0075ff;
`;
