import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "../../../Loader";
import { Suspense, useRef, useState } from "react";
import { Scene } from "./Scene";
import { Pages } from "./Pages";
import styled from "styled-components";

export const MyPetFly = () => {
  const [page, setPage] = useState(0);
  const maxPage = 4;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Pages page={page} maxPage={maxPage} />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1001,
        }}
      >
        <Canvas
          id="canvas"
          gl={{ antialias: true }}
          camera={{
            fov: 60,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.5,
            far: 100,
          }}
        >
          <Suspense fallback={<Loader />}>
            <ScrollControls pages={maxPage} damping={0}>
              <Scene maxPage={maxPage} page={page} setPage={setPage} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
