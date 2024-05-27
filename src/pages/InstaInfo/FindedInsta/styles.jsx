import styled from "styled-components";
import backgroundImgUrl from "./assets/background.png";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  min-height: 100%;
  background-image: url(${backgroundImgUrl});
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleTxtUI = styled.div`
  color: black;
  font-family: Poppins-Bold;
  font-size: 34px;
  line-height: 110%;
  letter-spacing: 0%;
  margin-bottom: 20px;
`;

export const LoginWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: whitesmoke;
  border-radius: 23px;
  min-width: 80%;
  padding-top: 50px;
  padding-bottom: 30px;
  margin-bottom: 21px;
`;

export const AskTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const InstagramImgWrapperUI = styled.div`
  position: relative;
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
  width: 80%;
  margin-bottom: 16px;
`;

export const CompleteBtnUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "gray" : "black")};
  color: white;
  padding-inline: 59px;
  padding-block: 22px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-family: Pretendard-Bold;
`;

export const ButtonListUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 7px;
  width: 80%;
  margin-top: 40px;
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
