import { ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "../../../Loader";
import { Suspense } from "react";
import { Scene } from "./Scene";

export const MyPetFly = () => {
  return (
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
        <ScrollControls pages={5}>
          <Scene />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};
