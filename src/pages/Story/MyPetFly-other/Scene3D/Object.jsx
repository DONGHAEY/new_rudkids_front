import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { createRef, useEffect } from "react";

let timeline = gsap.timeline();

const Scene = ({ offset }) => {
  const gltf = useGLTF(
    "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/my_pet_fly/2.glb?t=2024-05-07T05%3A00%3A25.793Z"
  );
  const itemModelRef = createRef();

  useEffect(() => {
    if (!itemModelRef.current) return;
    if (timeline.duration() !== 0) return;
    timeline
      .from(itemModelRef.current.rotation, {
        z: (Math.PI / 36) * -1,
      })
      .to(itemModelRef.current.rotation, {
        x: Math.PI * 1,
        y: Math.PI / 1,
        duration: 2,
      })
      .to(itemModelRef.current.rotation, {
        x: Math.PI * 6,
        y: Math.PI / 4,
        duration: 3,
      });
  }, [itemModelRef.current]);

  useFrame(() => {
    // scroll.offset// 페이지 전체중 0~1까지의 range로 표현됨.
    timeline.seek(offset * timeline.duration());
  });

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
