import { useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { ProductTag } from "./ProductTag";

export const ProductModel = ({
  data,
  selectedProductId,
  setSelectedProductId,
  radius,
  cameraRadius,
  rotation,
}) => {
  const three = useThree();
  const x = radius * Math.cos(rotation);
  const z = radius * Math.sin(rotation);
  const cameraX = cameraRadius * Math.cos(rotation);
  const cameraZ = cameraRadius * Math.sin(rotation);
  const productModelRef = useRef(null);

  const productGltfUrl = {
    PetFly: "/models/MyPetFly.glb",
    Nothing: "/models/Nothing.glb",
    ABeautifulWorld: "/models/ABeautifulWorld.glb",
  };

  const { scene, animations } = useGLTF(productGltfUrl[data.name]);

  const handGltf = useGLTF("/models/hand.glb");
  const handGltfScene = handGltf.scene.clone();
  const { actions } = useAnimations(animations, productModelRef);

  const [sign, setSign] = useState(false);
  const selected = selectedProductId === data.id;

  useEffect(() => {
    setSign(false);
    if (selected) {
      gsap.fromTo(
        three.camera.position,
        {
          x: three.camera.position.x,
          z: three.camera.position.z,
        },
        {
          x: cameraX,
          z: cameraZ,
          duration: 2,
          onComplete: () => {
            setSign(true);
          },
        }
      );
    }
  }, [selected, cameraX, cameraZ, three.camera.position]);

  // useEffect(() => {
  //   if (selected) {
  //     actions?.["wave"]?.reset().fadeIn(0.5).play();
  //   } else {
  //     actions?.["wave"]?.stop();
  //   }
  // }, [selected, actions, animations]);

  return (
    <group
      position-x={x}
      position-z={z}
      onClick={() => setSelectedProductId(data.id)}
      onPointerMissed={() => setSelectedProductId(null)}
      rotation-y={Math.PI / 2 - rotation}
    >
      {sign && selected && (
        <ProductTag name={data.name} content={data.content} />
      )}
      <primitive ref={productModelRef} scale={2.7} object={scene} />
      {selected && sign && (
        <primitive
          scale={0.25}
          object={handGltfScene}
          rotation-y={Math.PI}
          rotation-z={Math.PI * 0.3}
          rotation-x={Math.PI * 0.3}
          position={[-1, -5, 1.5]}
        />
      )}
    </group>
  );
};
