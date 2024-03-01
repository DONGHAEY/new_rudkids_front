import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Scene } from "./Scene";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

import "./css/index.css";
import { useEffect } from "react";

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
  );
};
