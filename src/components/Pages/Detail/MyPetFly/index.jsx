import { Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "../../../Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import { Scene } from "./Scene";
import { Pages } from "./Pages";
import styled from "styled-components";

const maxPage = 4;

export const MyPetFly = () => {
  const [page, setPage] = useState(0);

  return (
    <DetailPageUI>
      <Canvas
        style={{
          position: "absolute",
        }}
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.5,
          far: 100,
        }}
      >
        <Scene maxPage={maxPage} page={page} />
      </Canvas>
      <PagesScrollWrapperUI
        onScroll={(e) => {
          console.log("스크롤중..");
          console.log(e);
        }}
      >
        <Pages page={page} maxPage={maxPage} />
      </PagesScrollWrapperUI>
    </DetailPageUI>
  );
};

const DetailPageUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const PagesScrollWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
