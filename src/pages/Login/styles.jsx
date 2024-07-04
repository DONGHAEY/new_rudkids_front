import styled from "styled-components";

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
  font-size: clamp(1.7rem, 10.5vw, 2.5rem);
  line-height: 100%;
`;

export const SpacerUI = styled.div`
  margin-top: 30%;
`;

export const LoginUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-block: 60px;
  padding-top: 40px;
  font-family: boba;
`;

export const LoginBtnListUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 80%;
`;

export const LoginBtnUI = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-block: 10px;
  padding-inline: 4%;
  gap: 10px;
  text-decoration: none;
`;

export const LoginBtnTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  letter-spacing: -5%;
  font-size: clamp(0.7rem, 4vw, 1rem);
  text-align: center;
  color: ${({ color }) => color ?? "black"};
`;

export const LoginBtnImgUI = styled.img`
  height: 30px;
  padding: 5px;
`;
