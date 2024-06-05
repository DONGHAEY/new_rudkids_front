import styled from "styled-components";

export const TitleTxtUI = styled.div`
  color: black;
  font-family: Poppins-Bold;
  font-size: 34px;
  line-height: 110%;
  letter-spacing: 0%;
  margin-bottom: 20px;
`;

export const AskTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const InstagramImgWrapperUI = styled.div`
  position: relative;
  max-height: 110px;
`;

export const InstagramImgUI = styled.img`
  width: 60%;
  top: 4.5px;
  right: 4.5px;
  border-radius: 100%;
  position: absolute;
`;

export const InstagramNmTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 22px;
  margin-top: 10px;
`;

export const CautionImgUI = styled.img`
  width: 85%;
`;

export const ButtonListUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 7px;
  width: 80%;
  margin-top: 20px;
`;

export const TopLockedSection = styled.div`
  display: flex;
  height: 10%;
  padding-block: 30px;
  padding-bottom: 54px;
`;

export const ButtonUI = styled.button`
  width: 100%;
  height: 62px;
  background: ${({ background }) => background ?? "black"};
  color: ${({ color }) => color ?? "white"};
  border: none;
  border-radius: 20px;
  font-family: Pretendard-Bold;
  font-size: 18px;
`;
