import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Environment } from "@react-three/drei";

const Scene = () => {
  const three = useThree();
  const gltf = useGLTF("/Models/chain_box.glb");
  const boxRef = useRef();

  // const rotateBox = () => {
  //   gsap.to(boxRef.current.rotation, {
  //     y: Math.PI * 2,
  //     repeat: -1,
  //     repeatDelay: 0,
  //     delay: 0,
  //     duration: 4,
  //     ease: "none",
  //   });
  // };

  useEffect(() => {
    // rotateBox();
    three.camera.position.y = 4;
  }, []);

  // useEffect(() => {
  //   gltf.scene.traverse((node) => {
  //     if (node.isMesh) {
  //       node.castShadow = true;
  //       node.receiveShadow = true;
  //     }
  //   });
  // }, [gltf.scene]);

  return (
    <>
      <primitive
        ref={boxRef}
        object={gltf.scene}
        scale={1.1}
        position-y={0.3}
      />
      <Environment backgroundIntensity={1} preset="forest" />
      <directionalLight
        intensity={1.3}
        lookAt={[0, 0, 0]}
        position={[10, 10, 10]}
        castShadow
        receiveShadow
        color="white"
      />

      <OrbitControls
        minDistance={10}
        maxDistance={10}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
        autoRotate={true}
        autoRotateSpeed={8}
      />
    </>
  );
};

export default Scene;
