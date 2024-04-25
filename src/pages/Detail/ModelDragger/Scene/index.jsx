import { OrbitControls } from "@react-three/drei";
import React, { createRef } from "react";

const Scene = ({ autoRotate = false, gltf }) => {
  const itemModelRef = createRef();
  if (!gltf?.scene) return;

  return (
    <>
      <ambientLight intensity={1.5} />
      <primitive
        ref={itemModelRef}
        object={gltf.scene}
        scale={1}
        position={[0, 0, 0]}
      />
      <OrbitControls
        minDistance={3.5}
        maxDistance={3.5}
        enableZoom={false}
        enableRotate={true}
        enableDamping={true}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={2}
      />
    </>
  );
};

export default Scene;
