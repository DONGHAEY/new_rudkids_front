import styled from "styled-components";

export const RudkidsInstaUI = styled.img`
  width: 50%;
  margin-bottom: 5%;
  margin-top: 10%;
`;

export const TitleTxtUI = styled.div`
  color: black;
  font-family: boba;
  font-size: clamp(1.3rem, 7vw, 1.9rem);
  line-height: 110%;
  letter-spacing: 0%;
  margin-bottom: 5%;
`;

export const FormLabelUI = styled.p`
  font-family: boba;
  margin-top: 4%;
`;

export const InstagramIdFormUI = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  gap: 3%;
`;

export const InstagramIdInputUI = styled.input`
  display: flex;
  width: 100%;
  background-color: #eeeeee;
  padding-block: 5%;
  padding-inline: 2%;
  box-shadow: 2px 2px 0px 1px black;
  font-size: 16px;
  color: #737373;
  font-family: Pretendard-Bold;
`;

export const ButtonWrapperUI = styled.div`
  width: 70%;
  display: flex;
  text-align: center;
  margin-top: 10%;
`;

export const SubmitBtnUI = styled.div`
  padding-block: 10px;
  width: 100%;
  font-size: clamp(0.7rem, 3vw, 0.9rem);
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
