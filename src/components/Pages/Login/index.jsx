import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import { Scene } from "./Scene";
import { Loader } from "../../Loader";

export const Login = () => {
  /** 로그인페이지(구글,인스타그램) */
  return (
    <LoginWrapperUI>
      <Canvas
        id="canvas"
        style={{
          position: "absolute",
          zIndex: 0,
        }}
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.5,
          far: 100,
          position: [5, 5, 50],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
        <Html
          center
          style={{
            position: "absolute",
          }}
        >
          <LoginCenterUI>
            <LogoImageUI src={"/images/Rudkids_Logo.png"} />
            <EngagingMentUI>Let's Laugh More!!</EngagingMentUI>
            <LoginButtonWrapperUI>
              <LoginButtonUI>Instagram</LoginButtonUI>
              <LoginButtonUI>Google</LoginButtonUI>
            </LoginButtonWrapperUI>
          </LoginCenterUI>
        </Html>
      </Canvas>
    </LoginWrapperUI>
  );
};

const LoginWrapperUI = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const LoginCenterUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  position: abolute;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border-radius: 100px;
`;

const LogoImageUI = styled.img`
  min-width: 240px;
`;

const EngagingMentUI = styled.p`
  font-size: 18px;
  color: whitesmoke;
  font-weight: bold;
`;

const LoginButtonWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding-inline: 30px;
`;

const LoginButtonUI = styled.button`
  max-width: 130px;
  min-width: 90px;
  background-color: black;
  color: white;
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
`;
