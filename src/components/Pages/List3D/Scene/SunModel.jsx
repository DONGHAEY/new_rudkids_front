import { SpotLight, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { PointLight } from "three";

export const SunModel = ({ position }) => {
  const sunRef = useRef(null);
  const sunGltf = useGLTF("/models/the_sun.glb");
  const animations = useAnimations(sunGltf.animations, sunRef);

  useEffect(() => {
    const animationName = sunGltf.animations?.[0]?.name;
    if (animationName) {
      animations[animationName]?.reset().play();
    }
  }, [animations]);

  return (
    <>
      <primitive
        scale={2.5}
        object={sunGltf.scene}
        position={position}
        castShadow={true}
        receiveShadow={true}
      />
      <SpotLight
        color={0xffea9f}
        intensity={20}
        distance={0}
        angle={Math.PI / 5}
        decay={0.95}
        opacity={1.5}
        position={position}
        lookAt={[0, 0, 0]}
        castShadow={true}
        receiveShadow={true}
        isLight={true}
      />
    </>
  );
};
