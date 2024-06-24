import styled from "styled-components";

export const TitleTxtUI = styled.div`
  color: black;
  font-family: boba;
  font-size: clamp(1.53rem, 8vw, 2rem);
  line-height: 50%;
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const AskTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: clamp(0.6rem, 3vw, 0.8rem);
  margin-bottom: 20px;
`;

export const InstagramImgWrapperUI = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImgUI = styled.img`
  width: 29.5%;
  top: 5%;
  right: 26.7%;
  border-radius: 100%;
  position: absolute;
`;

export const InstagramNmTxtUI = styled.p`
  font-family: boba;
  font-size: 22px;
  margin-top: 10px;
  font-size: clamp(1.1rem, 6vw, 1.5rem);
`;

export const ButtonListUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 7px;
  width: 70%;
  margin-top: 30px;
`;

export const ButtonUI = styled.button`
  width: 100%;
  padding-block: 13%;
  background: ${({ background }) => background ?? "black"};
  color: ${({ color }) => color ?? "white"};
  border: none;
  font-family: Pretendard-Bold;
  font-size: clamp(0.7rem, 4.5vw, 1rem);
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 10%;
  margin-bottom: 10%;
  animation: fadeIn 1s;
`;
