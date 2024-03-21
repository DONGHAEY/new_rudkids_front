import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { ProductTag } from "./ProductTag";

const productGltfUrl = {
  PetFly: "/models/MyPetFly.glb",
  Nothing: "/models/Nothing.glb",
  ABeautifulWorld: "/models/ABeautifulWorld.glb",
};

export const ProductModel = ({ data, isWatching, selected }) => {
  const { scene, animations } = useGLTF(productGltfUrl[data.name]);
  const productBounceRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(productBounceRef.current.position, {
      y: 1,
      duration: 1,
    }).to(productBounceRef.current.position, {
      y: 0,
      duration: 2,
      onComplete: () => tl.restart(),
    });
    tl.startTime();
  }, []);

  return (
    <>
      <primitive scale={2.8} object={scene.clone()} visible={selected} />
      <group
        ref={productBounceRef}
        visible={!selected}
        children={<primitive scale={2.8} object={scene.clone()} />}
      />
      {!isWatching && selected && (
        <ProductTag name={data.name} content={data.content} position-y={5} />
      )}
    </>
  );
};
