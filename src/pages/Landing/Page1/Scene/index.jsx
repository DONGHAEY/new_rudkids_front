import { OrbitControls, useGLTF } from "@react-three/drei";

const Scene = () => {
  const gltf = useGLTF("/Models/chain_box.glb");

  return (
    <>
      <primitive object={gltf.scene} scale={1} position-y={1.5} />
      <ambientLight intensity={2} />
      <OrbitControls
        minDistance={17}
        maxDistance={17}
        autoRotate
        autoRotateSpeed={20}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
    </>
  );
};

export default Scene;
