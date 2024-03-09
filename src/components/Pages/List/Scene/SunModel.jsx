import { useGLTF } from "@react-three/drei";

export const SunModel = ({ position }) => {
  const sunGltf = useGLTF("/models/the_sun.glb");
  return (
    <>
      <primitive scale={9} object={sunGltf.scenes[0]} position={[position]} />
      <directionalLight
        // ref={lightRef}
        castShadow={true}
        args={[0xf30000, 1.3]}
        lookAt={[0, 0, 0]}
        position={[position]}
      />
    </>
  );
};
