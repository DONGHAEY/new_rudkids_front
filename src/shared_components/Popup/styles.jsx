import { Modal } from "@mui/material";
import styled from "styled-components";

export const TitleUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 20px;
  line-height: -1px;
`;

export const CenterUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  padding: 0;
`;

export const HeaderUI = styled.div`
  display: flex;
  padding-inline: 25px;
  padding-block: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  max-height: 80px;
  font-size: 20px;
`;

export const TextWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-overflow: ellipsis;
  height: 100%;
`;

export const DescriptionUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 13px;
  color: #7e7e7e;
  letter-spacing: -5%;
  text-align: center;
  text-overflow: ellipsis;
`;
