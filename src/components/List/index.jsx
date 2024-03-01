import { useThree, Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useGLTF, OrbitControls, useBounds } from "@react-three/drei";
import { Suspense } from "react";
import { Scene } from "./Scene";
import "./css/index.css";

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
        <ambientLight intensity={5} position={[0, 10, 0]} />
        <Scene productList={productList} />
        <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
          minDistance={15}
          maxDistance={30}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
};
