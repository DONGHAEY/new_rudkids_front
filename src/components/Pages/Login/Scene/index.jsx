import { RandomClouds } from "./RandomClouds";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
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
