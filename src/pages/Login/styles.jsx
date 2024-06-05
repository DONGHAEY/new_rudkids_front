import styled from "styled-components";
import backgroundImgUrl from "./assets/background.svg";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-image: url(${backgroundImgUrl});
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: 23px;
  min-width: 80%;
  gap: 33px;
  max-height: 419.12px;
  padding-bottom: 51px;
  margin-bottom: 18px;
  background-color: rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const LoginUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const LoginBtnListUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 269px;
`;

export const LoginBtnUI = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 11px;
  background: ${({ background }) => background ?? "black"};
  padding-block: 16px;
  width: 100%;
  border: none;
  border-radius: 64.78px;
`;

export const LoginBtnTxtUI = styled.p`
  font-size: 17.21px;
  font-family: Pretendard-SemiBold;
  letter-spacing: -5%;
  text-align: center;
  color: ${({ color }) => color ?? "black"};
`;

export const LoginBtnImgUI = styled.img`
  height: 100%;
`;

export const LoginCommentUI = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginCommentTxtUI = styled.div`
  padding: 10px;
  padding-inline: 30px;
  z-index: 1;
  border-radius: 62px;
  background-color: #f0f0f0;
  font-family: Pretendard-Bold;
  font-size: 13px;
  color: black;
`;

export const LoginCommentArrowUI = styled.div`
  width: 0px;
  height: 0px;
  border-top: 16px solid #f0f0f0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

export const JoinUsIconUI = styled.img`
  height: 10%;
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 0;
`;

export const TossTesterLoginUI = styled.p`
  font-size: 20px;
  color: #0064ff;
  cursor: pointer;
`;
