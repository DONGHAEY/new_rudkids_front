import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Scene = () => {
  const three = useThree();
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
    three.camera.position.y = 5;
  }, []);

  return (
    <>
      <primitive
        ref={boxRef}
        castShadow
        recieveShadow
        object={gltf.scene}
        scale={1}
        position-y={2}
      />
      <directionalLight
        intensity={5}
        lookAt={[0, 0, 0]}
        position={[0, 10, 10]}
        color="gray"
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
