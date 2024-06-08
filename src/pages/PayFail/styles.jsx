import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;
export const ManImgUI = styled.img`
  position: absolute;
  top: -40%;
  height: 140%;
  z-index: -1;
  left: 0;
`;

export const TopInfoUI = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
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

export const ActionBtnUI = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0075ff;
  border: none;
  padding-block: 18px;
  border-radius: 24px;
  font-family: Pretendard-Bold;
  font-size: 20px;
  color: #ffffff;
`;

export const BackLinkUI = styled(Link)`
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  color: gray;
  text-decoration: none;
  text-align: center;
`;
