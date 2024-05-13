import styled from "styled-components";

export const OrderProductListUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

export const SpreadBtnWrapperUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SpreadButtonUI = styled.button`
  display: flex;
  align-items: row;
  justify-content: center;
  align-items: center;
  gap: 9px;
  padding-inline: 51px;
  padding-block: 14px;
  background-color: ${({ $isSpread }) => ($isSpread ? "white" : "black")};
  color: ${({ $isSpread }) => ($isSpread ? "black" : "white")};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 0 3px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 55px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: ${({ fontSize }) => fontSize ?? "14px"};
`;
export const ButtonTxt2UI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 13px;
`;
