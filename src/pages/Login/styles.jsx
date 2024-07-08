import styled from "styled-components";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginTxtUI = styled.p`
  font-family: boba;
  font-size: clamp(0rem, 8vw, 2rem);
  line-height: 100%;
`;

export const SpacerUI = styled.div`
  margin-top: 20%;
`;

export const LoginUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 7%;
  font-family: boba;
`;

export const LoginBtnUI = styled(WindowButtonUI)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-block: 3%;
  padding-inline: 4%;
  margin-top: 3%;
  gap: 10px;
  margin-bottom: 10%;
  text-decoration: none;
`;

export const FakeLoginFormUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: Pretendard-Bold;
  margin-top: 3%;
`;

export const LoginInputUI = styled.input`
  padding: 5%;
  margin-top: 1%;
  border: solid 1px black;
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 3vw, 0.8rem);
`;
