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
  color: black;
  font-family: Poppins-Bold;
  font-size: 34px;
  line-height: 110%;
  letter-spacing: 0%;
  margin-top: 36px;
  margin-bottom: 39px;
`;

export const LoginWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: white;
  border-radius: 23px;
  padding-top: 48px;
  margin-top: 20px;
  min-width: 90%;
  padding-bottom: 51px;
  margin-bottom: 48px;
`;

export const InstagramIdInputWrapperUI = styled.div`
  width: 100%;
  display: flex;
`;

export const InstagramIdFormUI = styled.div`
  width: 80%;
  max-width: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const InstagramIdInputUI = styled.input`
  display: flex;
  width: 100%;
  background-color: #eeeeee;
  height: 59px;
  border-radius: 46px;
  color: #737373;
  border: none;
  font-family: Pretendard-Bold;
  padding-inline: 30px;
  ::placeholder {
    /* margin-inline: 30px; */
  }
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
