import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexWrapperUI = styled.div`
  padding-top: 67px;
  padding-bottom: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 40px;
`;

export const ListWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

export const ColUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? "0px"};
`;

export const RowUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap ?? "0px"};
  align-items: center;
`;

export const SectionDscrptTxtUI = styled.h2`
  font-family: Pretendard-SemiBold;
  font-size: 20px;
  line-height: 120%;
  text-align: left;
`;

export const DateTxtUI = styled.div`
  font-family: Poppins-SemiBold;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #6f6f6f;
`;

export const CntTxtUI = styled.div`
  font-family: Pretendard-Bold;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #6f6f6f;
`;
