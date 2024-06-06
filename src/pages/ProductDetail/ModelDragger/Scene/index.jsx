import { OrbitControls, Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { createRef, useEffect } from "react";

const Scene = ({ autoRotate = false, gltf }) => {
  //
  const distance = 5.5;
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
      <ambientLight intensity={2.0} />
      <directionalLight
        position={[0, 5, 3]}
        lookAt={[0, 0, 0]}
        intensity={1.2}
        color="white"
      />
      <directionalLight
        position={[0, 5, -3]}
        lookAt={[0, 0, 0]}
        intensity={1.2}
        color="white"
      />
      <primitive
        ref={itemModelRef}
        object={gltf.scene}
        scale={1}
        position={[0, 0.1, 0]}
      />
      <Plane
        receiveShadow
        castShadow
        args={[50, 50]}
        rotation-x={-Math.PI / 2}
        position-y={-3}
      >
        <circleGeometry />
        <meshStandardMaterial color="white" />
      </Plane>
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
