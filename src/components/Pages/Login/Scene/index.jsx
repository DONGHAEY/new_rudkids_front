import { useState } from "react";
import { RandomClouds } from "./RandomClouds";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Scene = () => {
  const three = useThree();

  return (
    <>
      <RandomClouds />
      <ambientLight intensity={5} position={[0, 10, 0]} />
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minDistance={15}
        maxDistance={30}
        enablePan={false}
      />
    </>
  );
};
