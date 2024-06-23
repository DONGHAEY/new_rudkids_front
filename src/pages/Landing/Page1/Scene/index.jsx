import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Environment } from "@react-three/drei";

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
      duration: 4,
      ease: "none",
    });
  };

  useEffect(() => {
    rotateBox();
    three.camera.position.y = 4;
  }, []);

  useEffect(() => {
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    // console.log(gltf.scene);
    // gltf.scene.environment = THREE.NeutralToneMapping;
  }, [gltf.scene]);

  return (
    <>
      <primitive ref={boxRef} object={gltf.scene} scale={1} position-y={1} />
      <Environment preset="forest" />
      <directionalLight
        intensity={1.3}
        lookAt={[0, 0, 0]}
        position={[10, 10, 10]}
        castShadow
        receiveShadow
        color="white"
      />
      <directionalLight
        intensity={3}
        lookAt={[0, 3, 0]}
        position={[-5, -3, 3]}
        castShadow
        receiveShadow
        raycast={3}
        color="white"
      />
      <directionalLight
        intensity={3}
        lookAt={[0, 0, 0]}
        position={[3, 2, 10]}
        castShadow
        receiveShadow
        color="white"
      />
      {/* <hemisphereLight
        args={[0xaaaaaa, 0xffffff, 0.5]}
        position={[0, 10, 10]}
      /> */}
      <OrbitControls
        minDistance={10}
        maxDistance={10}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
    </>
  );
};

export default Scene;
