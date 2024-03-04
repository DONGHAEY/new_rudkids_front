import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

import styled from "styled-components";
import { Loader } from "../../Loader";
import { Suspense } from "react";

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

export const List = () => {
  return (
    <ListWrapperUI>
      <Canvas
        id="canvas"
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
          <Scene productList={productList} />
        </Suspense>
      </Canvas>
    </ListWrapperUI>
  );
};

const ListWrapperUI = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  weight: 100vw;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
`;
