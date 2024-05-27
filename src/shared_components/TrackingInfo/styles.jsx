import styled from "styled-components";

export const ColUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? "0px"};
`;

export const FindButtonUI = styled.button`
  padding-block: 18px;
  background-color: #0075ff;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 19px;
  font-family: Pretendard-Bold;
`;

export const TrackingInfoUI = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-inline: 34px;
  background-color: white;
  border-radius: 16px;
  gap: 12px;
`;

export const NameTxtUI = styled.div`
  font-family: Pretendard-Bold;
  font-size: 14.24px;
  color: #a9a9a9;
  line-height: 120%;
  letter-spacing: 0%;
`;

export const ValueTxtUI = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  color: black;
  line-height: 120%;
  letter-spacing: 0%;
`;

export const RowUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => gap ?? "0px"};
`;
