import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

import { Suspense } from "react";
import { PageUI } from "./styles";

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

const List3dPage = () => {
  /** 아이템리스트페이지(아이템GLB파일*애니메이션 포함) */

  return (
    <PageUI>
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
        <Scene productList={productList} />
      </Canvas>
    </PageUI>
  );
};

export default List3dPage;
