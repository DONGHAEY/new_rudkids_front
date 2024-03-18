import * as THREE from "three";
import { Circle, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const timeline = gsap.timeline();

export const Scene = ({ maxPage, page, setPage }) => {
  const scroll = useScroll();
  const gltf = useGLTF("/models/cloud_test.glb");
  const productRef = useRef();

  const divided = 1 / maxPage;
  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    const currentPage = Math.round(scroll.offset / divided);
    if (currentPage >= 0 && currentPage <= maxPage) {
      if (page != currentPage) {
        setPage(currentPage);
      }
    }
    timeline.seek(scroll.offset * timeline.duration());
  });

  useEffect(() => {
    timeline
      .to(productRef.current.rotation, {
        duration: 200,
        y: Math.PI * 2,
      })
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
  }, [productRef.current]);

  useEffect(() => {
    console.log(page, " page - from scene comp");
  }, [page]);

  return (
    <>
      <ambientLight intensity={2} />
      <primitive
        ref={productRef}
        object={gltf.scene}
        scale={0.5}
        position={[0, 0, 0]}
      />
      {/* <Circle args={[8, 32]} rotation-x={-Math.PI / 2} position-y={-2}>
        <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide} />
      </Circle> */}
    </>
  );
};
