import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(rgba(255, 242, 164, 1), rgba(255, 212, 0, 1));
`;

export const BackImgUI = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  max-width: 430px;
  margin: 0 auto;
  object-fit: cover;
`;
export const TopSectionUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  touch-action: none;
  pointer-events: none;
  position: absolute;
`;

export const MiddleSectionUI = styled.div`
  position: absolute;
  display: flex;
  top: 15%;
  /* background-color: rgba(255, 255, 255, 0.1); */
  width: 100%;
  height: 85%;
`;

export const BotomSectionUI = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  touch-action: none;
  pointer-events: none;
`;

export const LogoImgUI = styled.img`
  width: 50%;
  margin-top: 10%;
`;

export const RudkidsOnlyImgUI = styled.img`
  width: 70%;
  margin-top: 5%;
`;

export const FooterImgUI = styled.img`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
`;

export const GetInUI = styled.button`
  position: sticky;
  bottom: 10%;
  top: 4%;
  border: none;
  background: none;
  margin-bottom: 20px;
`;

export const RollingMessagesUI = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 4%;
  background-color: blue;
  z-index: 3;
  overflow: scroll;
  display: flex;
  align-items: center;
  font-size: 2vh;
  color: white;
`;
