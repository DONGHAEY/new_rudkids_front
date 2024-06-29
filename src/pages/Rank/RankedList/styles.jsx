import { Link } from "react-router-dom";
import styled from "styled-components";

export const RankListUI = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background: white;
  padding-block: 47px;
  z-index: 3;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  gap: 21px;
`;

export const RankUI = styled(Link)`
  text-decoration: none;
  height: 63px;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserViewCntUI = styled.p`
  padding-block: 7px;
  padding-inline: 8px;
  width: 84px;
  background-color: #c3e6ff;
  border-radius: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Poppins-Bold;
  letter-spacing: -0.61px;
  line-height: 100%;
  gap: 6px;
  color: black;
`;

export const RankNumUI = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RankNumTxtUI = styled.p`
  position: absolute;
  font-family: Poppins-Bold;
  font-size: 16px;
  color: black;
`;

export const UserImgWrapperUI = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  background-color: white;
  margin-left: 16px;
  border-radius: 100%;
`;

export const UserImgUI = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
  border: solid 5px ${({ borderColor }) => borderColor ?? "none"};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const UserNmTxtUI = styled.div`
  font-family: Pretendard-Bold;
  font-size: 16px;
  text-align: start;
  width: 100%;
  margin-left: 16px;
  padding: 5px;
  border-radius: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  color: black;
`;
