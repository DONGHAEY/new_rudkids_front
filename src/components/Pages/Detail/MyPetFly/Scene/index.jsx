import * as THREE from "three";
import { Circle, Loader, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

let timeline;
const timelineOption = {
  offset: 0,
};

export const Scene = ({ offset }) => {
  // const scroll = useScroll();
  const gltf = useGLTF("/models/Nothing.glb");
  const productRef = useRef();

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    timeline.seek(timelineOption.offset * timeline.duration());
  });

  useEffect(() => {
    timeline = gsap.timeline();
    timeline
      .to(productRef.current.rotation, {
        x: Math.PI * 3,
        y: Math.PI / 2,
        duration: 2,
      })
      .to(productRef.current.rotation, {
        x: Math.PI * 6,
        y: Math.PI / 4,
        duration: 3,
      });
  }, [productRef.current]);

  useEffect(() => {
    gsap.to(timelineOption, {
      offset,
      duration: 2,
    });
  }, [offset]);

  return (
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={2} />
      <primitive
        ref={productRef}
        object={gltf.scene}
        scale={0.8}
        position={[0, 0, 0]}
      />
      {/* <Circle args={[8, 32]} rotation-x={-Math.PI / 2} position-y={-2}>
        <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide} />
      </Circle> */}
    </Suspense>
  );
};
