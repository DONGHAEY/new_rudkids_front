import styled from "styled-components";
import backgroundImgUrl from "./assets/background.png";

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

export const TitleTxtUI = styled.div`
  font-size: 14px;
  color: black;
  font-family: Poppins-Bold;
  font-size: 44px;
  line-height: 110%;
  letter-spacing: 0%;
`;

export const LoginWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: white;
  border-radius: 23px;
  padding-top: 48px;
  min-width: 80%;
  gap: 39px;
  padding-bottom: 51px;
  margin-bottom: 48px;
`;

export const LoginUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 10px;
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
  background-color: ${({ backgroundColor }) => backgroundColor ?? "black"};
  padding-block: 16px;
  width: 100%;
  border: none;
  border-radius: 18px;
`;

export const LoginBtnTxtUI = styled.p`
  font-size: 13px;
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
  background-color: rgba(207, 207, 207, 0.3);
  font-family: Pretendard-Bold;
  font-size: 13px;
  color: black;
`;

export const LoginCommentArrowUI = styled.div`
  width: 0px;
  height: 0px;
  border-top: 16px solid rgba(207, 207, 207, 0.3);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;
