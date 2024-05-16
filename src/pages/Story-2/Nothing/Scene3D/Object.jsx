import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, createRef } from "react";
import gsap from "gsap";

let timeline = gsap.timeline();

const Object = ({ offset }) => {
  const gltf = useGLTF(
    "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/nothing/2.glb"
  );
  const itemModelRef = createRef();

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    timeline.seek(offset * timeline.duration());
  });

  useEffect(() => {
    if (!itemModelRef.current) return;
    if (timeline.duration() !== 0) return;
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

export default Object;
