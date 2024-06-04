import styled from "styled-components";

export const TitleUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 20px;
  line-height: -1px;
`;

export const HeaderUI = styled.div`
  top: 0;
  z-index: 999;
  background-color: white;
  width: 100%;
  max-width: 430px;
  display: flex;
`;

export const BetweenUI = styled.div`
  padding-block: 10px;
  padding-inline: 15px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 50px;
  max-height: 90px;
  font-size: 20px;
`;

export const TextWrapperUI = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 13px;
  color: #7e7e7e;
  letter-spacing: -5%;
  text-align: center;
  text-overflow: ellipsis;
`;
