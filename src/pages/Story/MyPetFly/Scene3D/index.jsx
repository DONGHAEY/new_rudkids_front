import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, createRef, useMemo } from "react";
import gsap from "gsap";

const timeline = gsap.timeline();
let timelineOption = {
  offset: 0,
};

const Object = ({ page, maxPage, moveDuration }) => {
  const gltf = useGLTF("/Models/my_pet_fly.glb");
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
          duration: 0.5,
        }
      )
      .to(
        itemModelRef.current.position,
        {
          x: -0.8,
          y: -1.5,
          duration: 1,
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
      .to(
        itemModelRef.current.rotation,
        {
          x: -Math.PI * 2,
          duration: 0.7,
          ease: "power1.in",
        },
        "+0.3"
      )
      .to(itemModelRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      })
      .to(
        itemModelRef.current.rotation,
        {
          z: Math.PI / 32,
          duration: 1,
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
      .to(
        itemModelRef.current.rotation,
        {
          y: Math.PI * 2,
          ease: "back.inOut",
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
      .to(
        itemModelRef.current.rotation,
        {
          y: Math.PI * 2,
          x: Math.PI * 1.5,
          duration: 0.7,
        },
        "<"
      )
      .to(itemModelRef.current.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 1,
      })
      .to(
        itemModelRef.current.rotation,
        {
          z: Math.PI / 18,
          duration: 1,
        },
        "<"
      )
      .to(
        itemModelRef.current.rotation,
        {
          y: -(Math.PI * 2),
          x: -(Math.PI * 2),
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
    // console.log(offset * timeline.totalDuration());
    timeline.seek(timelineOption.offset * timeline.totalDuration());
  });

  useEffect(() => {
    gsap.to(timelineOption, {
      offset: page / maxPage,
      duration: moveDuration,
    });
  }, [page]);

  return (
    <>
      <ambientLight intensity={2} />
      <primitive
        ref={itemModelRef}
        object={gltf.scene}
        scale={0.4}
        position={[0, 0, 0]}
      />
    </>
  );
};

export default Object;
