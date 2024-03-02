import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useRef } from "react";
export const FirstSeasonModel = ({ data, isSelected }) => {
  const gltfs = useGLTF([
    "/models/dancer.glb",
    "/models/dancer.glb",
    "/models/dancer.glb",
  ]);

  const productGltf = {
    PetFly: gltfs[0],
    Nothing: gltfs[2],
    ABeautifulWorld: gltfs[1],
  };

  const productModelRef = useRef(null);

  const { scene, animations } = productGltf[data.name];
  const { actions } = useAnimations(animations, productModelRef);

  useEffect(() => {
    console.log(actions, animations);
    if (isSelected) {
      actions?.["wave"]?.reset().fadeIn(0.5).play();
    } else {
      actions["wave"].stop();
    }
  }, [isSelected, actions, animations]);

  return (
    // <group>
    <primitive ref={productModelRef} scale={0.04} object={scene} />
    // </group>
  );
};
