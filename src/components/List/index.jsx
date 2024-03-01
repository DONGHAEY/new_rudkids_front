import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "./Scene";
//
import { css } from "styled-components";
import styled from "styled-components";
//

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
        <Suspense>
          <Scene productList={productList} />
        </Suspense>
      </Canvas>
    </ListWrapperUI>
  );
};

const fonts = css`
  @font-face {
    font-family: "Archivo_SemiExpanded-Bold";
    src: url("/fonts/Archivo/Archivo_SemiExpanded-Bold.ttf");
  }

  @font-face {
    font-family: "Archivo_Condensed-Light";
    src: url("/fonts/Archivo/Archivo_SemiExpanded-Light.ttf");
  }
`;

const ListWrapperUI = styled.div`
  // ${fonts}
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
  font-family: "Archivo_SemiExpanded-Bold";
`;
