import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 248, 96, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const TitleTxtUI = styled.p`
  margin-top: 30px;
  font-size: 36px;
  font-family: Pretendard-Bold;
`;

export const SubTitleTxtUI = styled.p`
  font-size: 24px;
  font-family: Pretendard-Bold;
  margin-top: 14px;
`;
