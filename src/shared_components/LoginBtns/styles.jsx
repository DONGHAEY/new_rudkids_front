import styled from "styled-components";
import { WindowButtonUI } from "../RudWindow/shared_styles";

export const LoginBtnsUI = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageUI = styled.p`
  font-size: clamp(0rem, 3.5vw, 0.9rem);
  font-family: Pretendard-Bold;
`;

export const BtnListUI = styled.div`
  width: 100%;
  display: flex;
  gap: 6%;
  margin-top: 5%;
  /* background-color: gray; */
  padding-bottom: 18%;
`;

export const KakaoBtnUI = styled(WindowButtonUI)`
  background-color: rgba(245, 235, 15, 1);
  display: flex;
  gap: 8%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: clamp(0rem, 8vw, 2rem);
  font-size: clamp(0rem, 4vw, 1rem);
  color: rgba(35, 31, 32, 1);
  line-height: 100%;
  position: relative;
`;

export const NaverBtnUI = styled(WindowButtonUI)`
  width: 30%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  aspect-ratio: 1/1;
`;

export const SignupBtnUI = styled.a`
  width: 100%;
  text-align: right;
  font-size: clamp(0rem, 2.5vw, 0.7rem);
  color: blue;
  text-decoration: underline;
`;
