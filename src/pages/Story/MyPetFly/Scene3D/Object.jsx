import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, createRef } from "react";
import gsap from "gsap";

let timeline = gsap.timeline();
let timelineOption = {
  offset: 0,
};

const Object = ({ offset, moveDuration = 2 }) => {
  const gltf = useGLTF(
    "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/my_pet_fly/2.glb?t=2024-05-07T05%3A00%3A25.793Z"
  );
  const itemModelRef = createRef();

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    timeline.seek(timelineOption.offset * timeline.duration());
  });

  useEffect(() => {
    if (!itemModelRef.current) return;
    if (timeline.duration() !== 0) return;
    timeline
      .from(itemModelRef.current.rotation, {
        z: -(Math.PI / 24),
      })
      .from(
        itemModelRef.current.position,
        {
          x: -0.15,
        },
        "<"
      )
      .to(itemModelRef.current.rotation, {
        z: -(Math.PI / 52),
        duration: 1,
      })
      .to(
        itemModelRef.current.position,
        {
          x: -0.8,
          y: -1.5,
        },
        "<"
      )
      .to(
        itemModelRef.current.scale,
        {
          x: 0.5,
          y: 0.5,
          z: 0.5,
        },
        "<"
      )
      .to(itemModelRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
      })
      .to(
        itemModelRef.current.rotation,
        {
          z: Math.PI / 32,
        },
        "<"
      )
      .to(itemModelRef.current.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
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

export default Object;
