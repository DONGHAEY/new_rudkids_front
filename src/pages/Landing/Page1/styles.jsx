import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const Page1UI = styled.div`
  height: ${({ height }) => height ?? "100vh"};
  width: 100%;
  position: relative;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(rgba(255, 242, 164, 1), rgba(255, 212, 0, 1));
`;

export const TopSectionUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 18%;
  touch-action: none;
  pointer-events: none;
  position: absolute;
`;

export const MiddleSectionUI = styled.div`
  position: absolute;
  display: flex;
  top: 10%;
  width: 100%;
  height: 85%;
`;

export const CanvasUI = styled(Canvas)`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const CanvasDragBlocker = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 2;
`;

export const BotomSectionUI = styled.div`
  position: absolute;
  bottom: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  touch-action: none;
  pointer-events: none;
  z-index: 3;
`;

export const TopFixedUI = styled.div`
  position: fixed;
  width: 100%;
  height: 15%;
  max-width: 430px;
  margin-inline: 0 auto;
  top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const LogoImgUI = styled.img`
  position: absolute;
  max-width: 200px;
  z-index: 9;
`;

export const RudkidsOnlyImgUI = styled.img`
  width: 65%;
  position: absolute;
  top: 21%;
  z-index: 1;
`;

export const TopStickyUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 430px;
  margin: 0 auto;
  z-index: 9;
`;

export const ScrollDownUI = styled.div`
  position: fixed;
  max-width: 430px;
  width: 100%;
  bottom: 7%;
  z-index: 7;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
`;

export const FaceImgUI = styled.img`
  position: absolute;
  width: 50%;
  top: -30%;
`;

export const GetInUI = styled.div`
  position: fixed;
  width: 100%;
  max-width: 300px;
  height: 10%;
  margin-inline: auto;
  top: 78%;
  background-color: black;
  z-index: 9;
`;

export const RollingMessagesUI = styled.div`
  font-family: digital;
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

export const BackImgUI = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  max-width: 430px;
  margin: 0 auto;
  z-index: 0;
  object-fit: cover;
`;
