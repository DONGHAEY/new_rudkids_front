import { Link } from "react-router-dom";
import styled from "styled-components";

export const RankListUI = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background: white;
  padding-block: 16%;
  z-index: 3;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const RankUI = styled(Link)`
  text-decoration: none;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3.8%;
`;

export const UserViewCntUI = styled.p`
  padding-block: 2%;
  padding-inline: 3%;
  background-color: #c3e6ff;
  border-radius: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Poppins-Bold;
  letter-spacing: -0.61px;
  line-height: 100%;
  gap: 10%;
  font-size: clamp(0.6rem, 4vw, 1rem);
  color: black;
`;

export const RankNumUI = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0rem, 5vw, 1rem);
`;

export const RankNumTxtUI = styled.p`
  position: absolute;
  font-family: Poppins-Bold;
  color: black;
`;

export const UserImgWrapperUI = styled.div`
  width: 40%;
  aspect-ratio: 1/1;
  background-color: white;
  margin-left: 3%;
  border-radius: 100%;
  max-width: 70px;
`;

export const UserImgUI = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
  border: solid clamp(0rem, 1vw, 0.3rem)
    ${({ borderColor }) => borderColor ?? "none"};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const UserNmTxtUI = styled.div`
  font-family: Pretendard-Bold;
  font-size: 18px;
  text-align: start;
  width: 100%;
  margin-left: 6%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  color: black;
`;
