import { useGLTF } from "@react-three/drei";

export const GrassModel = ({ position }) => {
  const grassGltf = useGLTF("/models/hand_painted_grasses.glb");
  return (
    <>
      <primitive scale={20} object={grassGltf.scene} position={position} />
    </>
  );
};
