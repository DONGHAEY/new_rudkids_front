import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { createRef, useEffect } from "react";

const Scene2 = ({ autoRotate = false, gltfs = [], selectedIdx }) => {
  //

  const distance = 5.5;
  const componentsDistance = 10;
  const three = useThree();

  const modelRefs = gltfs.map((_) => {
    return createRef(null);
  });

  const getPositionForXZAngle = (distance, angleRad) => {
    return {
      x: distance * Math.cos(angleRad),
      z: distance * Math.sinh(angleRad),
    };
  };

  const initCamera = () => {
    const { x, z } = getPositionForXZAngle(distance, Math.PI * 2);
    three.camera.position.set(x, 0, z);
  };

  const initCopmonents = () => {
    modelRefs?.forEach((ref, idx) => {
      const pos = {
        x: idx * componentsDistance,
        y: 0,
        z: 0,
      };
      gsap.set(ref.current.position, pos);
    });
  };

  const shiftComponents = () => {
    modelRefs?.forEach((ref, idx) => {
      ref.current.visible = selectedIdx === idx ? true : false;
      gsap.to(ref.current.position, {
        x: (idx - selectedIdx) * componentsDistance,
        y: 0,
        z: 0,
        duration: 0.3,
      });
    });
  };

  useEffect(() => {
    initCopmonents();
  }, []);

  useEffect(() => {
    initCamera();
    shiftComponents();
  }, [selectedIdx]);

  return (
    <>
      <ambientLight intensity={2.0} />
      <directionalLight
        position={[0, 5, 3]}
        lookAt={[0, 0, 0]}
        intensity={1.6}
        color="white"
      />
      <directionalLight
        position={[0, 5, -3]}
        lookAt={[0, 0, 0]}
        intensity={1.2}
        color="white"
      />
      {gltfs?.map((gltf, idx) => {
        return (
          <primitive
            key={idx}
            object={gltf?.scene}
            ref={modelRefs[idx]}
            scale={1}
          />
        );
      })}
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

export default Scene2;
