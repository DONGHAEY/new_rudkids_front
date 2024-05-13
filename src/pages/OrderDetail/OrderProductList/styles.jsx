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
  background: white;
  color: black;
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
