import { useGLTF } from "@react-three/drei";
export const FirstSeasonModel = ({ data }) => {
  const gltfs = useGLTF([
    "/models/credit_card.glb",
    "/models/credit_card.glb",
    "/models/credit_card.glb",
  ]);

  const productGltf = {
    PetFly: gltfs[0],
    Nothing: gltfs[2],
    ABeautifulWorld: gltfs[1],
  };

  const { scene, animation } = productGltf[data?.name];

  return (
    <group>
      <primitive scale={0.06} object={scene} />
    </group>
  );
};
