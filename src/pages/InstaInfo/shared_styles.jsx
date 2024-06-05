import styled from "styled-components";
import backgroundImgUrl from "./assets/background.png";

export const PageUI = styled.div`
  position: relative;
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

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  width: 85%;
  /* max-height: 419.12px; */
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 18px;
  background-color: rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const CompleteBtnUI = styled.button`
  /* background-color: ${({ disabled }) => (disabled ? "gray" : "black")}; */
  background: ${({ disabled }) =>
    disabled ? "gray" : "linear-gradient(180deg, #14ff00 0%, #10ce00 100%)"};
  color: white;
  padding-inline: 59px;
  padding-block: 22px;
  border: ${({ disabled }) => (disabled ? "none" : "1px solid #00b01c")};
  border-radius: 64px;
  font-size: 18px;
  text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 2px;
  font-family: Pretendard-Bold;
`;
