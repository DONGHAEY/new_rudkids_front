import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Scene = () => {
  const gltf = useGLTF("/Models/chain_box.glb");
  const boxRef = useRef();

  const rotateBox = () => {
    gsap.to(boxRef.current.rotation, {
      y: Math.PI * 2,
      repeat: -1,
      repeatDelay: 0,
      delay: 0,
      duration: 3,
      ease: "none",
    });
  };

  useEffect(() => {
    rotateBox();
  }, []);

  return (
    <>
      <primitive
        ref={boxRef}
        castShadow
        recieveShadow
        object={gltf.scene}
        scale={1}
        position-y={1.5}
      />
      <directionalLight
        intensity={5}
        lookAt={[0, 0, 0]}
        position={[0, 10, 0]}
        color="white"
      />
      <directionalLight
        intensity={5}
        lookAt={[0, 0, 0]}
        position={[0, 10, 10]}
        color="white"
      />
      <OrbitControls
        minDistance={19}
        maxDistance={19}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
    </>
  );
};

export default Scene;
