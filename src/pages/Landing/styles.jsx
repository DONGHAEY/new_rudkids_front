import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopFixedUI = styled.div`
  position: fixed;
  width: 100%;
  max-width: 430px;
  margin-inline: 0 auto;
  top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;
`;

export const GetInUI = styled.div`
  background: linear-gradient(180deg, #5f6062 0%, #afafaf 100%);
  position: absolute;
  width: 100%;
  max-width: 200px;
  left: 100%;
  margin-inline: auto;
  top: 2%;
  z-index: 9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
  overflow: hidden;
  border-radius: 100px;
`;

export const GetInProgressUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #a50f16 10%, #ff1f35 100%);
  left: 0;
  z-index: 0;
`;

export const GetInWrapperUI = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 100%;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  gap: 3%;
  font-size: 20px;
  font-family: Poppins-Bold;
  z-index: 1;
  margin-block: 10px;
  margin-inline: 10px;
`;

export const LogoImgUI = styled.img`
  position: absolute;
  margin-left: 0;
  z-index: 9;
`;
export const ScrollDownUI = styled.img`
  position: fixed;
  bottom: 6%;
  z-index: 7;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
  @keyframes motion {
    0% {
      margin-bottom: 0%;
    }
    50% {
      margin-bottom: 3%;
    }
    100% {
      margin-bottom: 0%;
    }
  }
  animation: motion 3s infinite;
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
