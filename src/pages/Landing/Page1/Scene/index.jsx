import { OrbitControls, useGLTF } from "@react-three/drei";

const Scene = () => {
  const gltf = useGLTF("/Models/my_pet_fly.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
      <ambientLight intensity={2} />
      <OrbitControls
        minDistance={5}
        maxDistance={8}
        autoRotate
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
      />
    </>
  );
};

export default Scene;
