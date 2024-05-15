import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, createRef, useMemo } from "react";
import gsap from "gsap";

let timelineOption = {
  offset: 0,
};
const timeline = gsap.timeline();

const Object = ({ offset, moveDuration = 2 }) => {
  const gltf = useGLTF(
    "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/my_pet_fly/2.glb?t=2024-05-07T05%3A00%3A25.793Z"
  );
  const itemModelRef = createRef();

  useEffect(() => {
    if (!itemModelRef.current) return;
    if (timeline && timeline?.duration() !== 0) return;

    timeline
      .fromTo(
        itemModelRef.current.rotation,
        {
          z: -(Math.PI / 24),
          duration: 0,
        },
        {
          z: -(Math.PI / 52),
        }
      )
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
          duration: 1,
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
      .to(
        itemModelRef.current.scale,
        {
          x: 0.8,
          y: 0.8,
          z: 0.8,
          duration: 1,
        },
        "<"
      )
      .to(itemModelRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      })
      .to(itemModelRef.current.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
      })
      .to(
        itemModelRef.current.rotation,
        {
          z: Math.PI / 18,
          duration: 1,
        },
        "<"
      )
      .to(itemModelRef.current.position, {
        y: -0.3,
        duration: 1,
      });
    timeline.seek(0);
    return () => {
      if (timeline) {
        // timeline?.remove();
      }
    };
  }, []);

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    console.log(timelineOption.offset * timeline.totalDuration());
    timeline.seek(timelineOption.offset * timeline.totalDuration());
  });

  useEffect(() => {
    gsap.to(timelineOption, {
      offset,
      duration: moveDuration,
    });
  }, [offset]);

  // useEffect(() => {
  //   gsap.set(timelineOption, {
  //     offset: 0,
  //   });
  // }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <primitive
        ref={itemModelRef}
        object={gltf.scene}
        scale={0.7}
        position={[0, 0, 0]}
      />
    </>
  );
};

export default Object;
