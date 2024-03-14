import * as THREE from "three";
import { Circle, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Scene = () => {
  let timeline;
  const scroll = useScroll();
  const gltf = useGLTF("/models/cloud_test.glb");
  const productRef = useRef();

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    console.log(timeline.duration(), scroll.offset);
    timeline.seek(scroll.offset * timeline.duration());
  });

  useEffect(() => {
    timeline = gsap.timeline();
    timeline
      .to(
        productRef.current.rotation,
        {
          duration: 200,
          y: Math.PI * 2,
        },
        20
      )
      .to(
        productRef.current.rotation,
        {
          duration: 50,
          z: Math.PI / 8,
        },
        "<"
      )
      .to(
        productRef.current.position,
        {
          x: 1.8,
          duration: 50,
        },
        "<"
      )
      .to(
        productRef.current.rotation,
        {
          duration: 100,
          z: -1 * (Math.PI / 8),
        },
        ">"
      )
      .to(
        productRef.current.position,
        {
          x: -1,
          duration: 100,
        },
        "<"
      )
      .to(
        productRef.current.rotation,
        {
          duration: 50,
          z: 0,
        },
        ">"
      )
      .to(
        productRef.current.position,
        {
          x: 0,
          duration: 50,
        },
        "<"
      );
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <primitive
        ref={productRef}
        object={gltf.scene}
        scale={0.5}
        position={[0, 0, 0]}
      />
      <Circle args={[8, 32]} rotation-x={-Math.PI / 2} position-y={-2}>
        <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide} />
      </Circle>
    </>
  );
};
