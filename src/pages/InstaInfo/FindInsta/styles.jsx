import styled from "styled-components";
import backgroundImgUrl from "../assets/background.png";

export const TitleTxtUI = styled.div`
  color: black;
  font-family: Poppins-Bold;
  font-size: 34px;
  line-height: 110%;
  letter-spacing: 0%;
  margin-bottom: 37px;
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

export const LoadingSceneWrapperUI = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImgUrl});
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;
