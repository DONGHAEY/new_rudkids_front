import styled from "styled-components";

export const RankListUI = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  padding-block: 47px;
  z-index: 3;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  gap: 21px;
`;

export const RankUI = styled.div`
  height: 63px;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserInfoUI = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  height: 100%;
  align-items: center;
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
`;

export const UserImgUI = styled.img`
  height: 100%;
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
  width: 80%;
  padding: 5px;
  border-radius: 8px;
  /* background-color: rgba(255, 255, 255, 0.7); */
  overflow: hidden;
  /* text-align: center; */
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
