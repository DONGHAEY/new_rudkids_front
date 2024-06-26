import styled from "styled-components";

export const LinkIconWrapUI = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  width: 85%;
  overflow: hidden;
  align-items: center;
  padding-left: 20px;
`;

export const UrlTxtUI = styled.p`
  font-family: Pretendard-Medium;
  font-size: 14px;
  letter-spacing: 0;
`;

export const UrlUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 46px;
  background-color: ${({ $locked }) => ($locked ? "none" : "#f2f2f2")};
  padding-block: 16px;
  text-overflow: ellipsis;
`;
