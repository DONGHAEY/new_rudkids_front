import styled from "styled-components";

export const SetInstaUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: white;
  border-radius: 23px;
  width: 85%;
  padding-bottom: 51px;
`;

export const ImageUI = styled.img`
  border-radius: 100%;
  width: 37%;
`;

export const InstaIdTxtUI = styled.p`
  font-family: boba;
  font-size: clamp(1.1rem, 6vw, 1.5rem);
  border-radius: 52px;
  line-height: 100%;
  margin-top: 5%;
  margin-bottom: 8%;
`;

export const CompleteBtnUI = styled.div`
  text-align: center;
  padding-block: 5%;
  font-size: 16px;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 23%;
  margin-bottom: 15%;
  animation: fadeIn 1s;
`;
