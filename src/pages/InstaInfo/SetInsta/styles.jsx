import styled from "styled-components";
import backgroundImgUrl from "./assets/background.png";
import Lottie from "react-lottie";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-image: url(${backgroundImgUrl});
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SetInstaUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: white;
  border-radius: 23px;
  min-width: 80%;
  padding-bottom: 51px;
`;

export const ImageUI = styled.img`
  border-radius: 100%;
  width: 114px;
`;

export const InstaIdTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 22px;
  padding-block: 14px;
  padding-inline: 20px;
  border-radius: 52px;
  line-height: 100%;
  border: solid 2.6px #ebebeb;
  margin-top: 13px;
`;

export const CompleteBtnUI = styled.button`
  margin-top: 35px;
  background-color: #00ce59;
  border: none;
  color: white;
  padding-block: 22px;
  width: 80%;
  border-radius: 20px;
  font-family: Pretendard-Bold;
  font-size: 20px;
`;

export const CheckWrapperUI = styled.div`
  height: 180px;
  /* transform: scale(1.3); */
  margin-bottom: -30px;
`;
