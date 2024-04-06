import { useGLTF } from "@react-three/drei";

export const GrassModel = ({ position }) => {
  const grassGltf = useGLTF("/assets/models/hand_painted_grasses.glb");
  return (
    <>
      <primitive scale={40} object={grassGltf.scene} position={position} />
    </>
  );
};
