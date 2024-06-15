import { OrbitControls, Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

let tl = null;
const Scene = ({ gltf, isPlaying }) => {
  const distance = 8;
  const itemModelRef = useRef();
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

  useEffect(() => {
    gsap.set(itemModelRef.current.rotation, {
      x: -Math.PI * 2,
      y: -Math.PI * 2,
    });
    tl = gsap.timeline();
    tl.fromTo(
      itemModelRef.current.rotation,
      {
        x: -Math.PI * 2,
        y: -Math.PI * 1,
      },
      {
        x: -(Math.PI * 1.7),
        y: -(Math.PI * 2.3),
        duration: 1,
        yoyo: true,
        repeat: -1,
      }
    );
    tl.pause();
  }, [gltf]);

  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying) {
      tl.time(0);
      tl.play();
    } else {
      tl.pause();
    }
  }, [isPlaying]);

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
        scale={1.3}
        position={[0, 0.1, 0]}
      />
      <OrbitControls
        minDistance={distance}
        maxDistance={distance}
        enableZoom={false}
        enableRotate={true}
        enableDamping={true}
        enablePan={false}
      />
    </>
  );
};

export default Scene;
