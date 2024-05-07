import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { createRef, useEffect } from "react";

const Scene = ({ autoRotate = false, gltf }) => {
  const distance = 3.8;
  const itemModelRef = createRef();

  const three = useThree();

  const getPositionForXZAngle = (distance, angleRad) => {
    return {
      x: distance * Math.cos(angleRad),
      z: distance * Math.sinh(angleRad),
    };
  };

  useEffect(() => {
    const { x, z } = getPositionForXZAngle(distance, Math.PI * 2);
    three.camera.position.set(x, 0, z);
  }, [gltf, three.camera]);

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
        minDistance={distance}
        maxDistance={distance}
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
