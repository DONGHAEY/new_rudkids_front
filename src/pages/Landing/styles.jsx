import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterUI = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-inline: 0 auto;
  margin: 0;
  z-index: 3;
`;

export const FooterImgUI = styled.img`
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

export const FucChildUI = styled.img`
  position: absolute;
  right: 3%;
  bottom: 90%;
  width: 57%;
  @keyframes motion2 {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    50% {
      transform: translate3d(0, 100%, 0);
    }
    75% {
      transform: translateZ(0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }
  animation: motion2 5s infinite;
`;
