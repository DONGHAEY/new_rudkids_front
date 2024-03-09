import { SpotLight, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const SunModel = ({ position }) => {
  const sunRef = useRef(null);
  const sunGltf = useGLTF("/models/the_sun.glb");
  // const animations = useAnimations(sunGltf.animations, sunRef);

  // useEffect(() => {
  //   const animationName = sunGltf.animations?.[0]?.name;
  //   if (animationName) {
  //     animations[animationName]?.reset().fadeIn(0.5).play();
  //   }
  // }, [animations]);
  return (
    <>
      <primitive scale={8} object={sunGltf.scene} position={position} />
      <SpotLight
        color={0xffeaaf}
        intensity={10}
        distance={0}
        angle={Math.PI / 2}
        decay={0.5}
        opacity={1}
        position={position}
        lookAt={[0, 0, 0]}
      />
    </>
  );
};
