import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, createRef } from "react";
import gsap from "gsap";

let timeline = gsap.timeline();
let timelineOption = {
  offset: 0,
};

const Scene = ({ offset, moveDuration = 2 }) => {
  const gltf = useGLTF("/Models/Nothing.glb");
  const itemModelRef = createRef();

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    timeline.seek(timelineOption.offset * timeline.duration());
  });

  useEffect(() => {
    if (!itemModelRef.current) return;
    timeline
      .to(itemModelRef.current.rotation, {
        x: Math.PI * 3,
        y: Math.PI / 2,
        duration: 2,
      })
      .to(itemModelRef.current.rotation, {
        x: Math.PI * 6,
        y: Math.PI / 4,
        duration: 3,
      });
  }, [itemModelRef.current]);

  useEffect(() => {
    gsap.to(timelineOption, {
      offset,
      duration: moveDuration,
    });
  }, [offset]);

  useEffect(() => {
    gsap.set(timelineOption, {
      offset: 0,
    });
  }, [itemModelRef.current]);

  return (
    <>
      <ambientLight intensity={2} />
      <primitive
        ref={itemModelRef}
        object={gltf.scene}
        scale={0.8}
        position={[0, 0, 0]}
      />
    </>
  );
};

export default Scene;
