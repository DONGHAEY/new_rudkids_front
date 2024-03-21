import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

import styled from "styled-components";
import { Loader } from "../../Loader";
import { Suspense } from "react";
import { Share } from "../../Share";

const productList = [
  {
    id: 1,
    name: "PetFly",
    content: "Make your Fly",
  },
  {
    id: 2,
    name: "Nothing",
    content: "Feel empty space",
  },
  {
    id: 3,
    name: "ABeautifulWorld",
    content: "It's Okay to have some rest",
  },
];

export const List_3D = () => {
  /** 아이템리스트페이지(아이템GLB파일*애니메이션 포함) */

  return (
    <List3DWrapperUI>
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
          <Scene productList={productList} />
        </Suspense>
      </Canvas>
      <Share />
    </List3DWrapperUI>
  );
};

const List3DWrapperUI = styled.div`
  height: 100%;
  weight: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
`;
