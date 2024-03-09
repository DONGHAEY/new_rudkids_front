import { useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { ProductTag } from "./ProductTag";
import { motion } from "framer-motion-3d";

const productGltfUrl = {
  PetFly: "/models/MyPetFly.glb",
  Nothing: "/models/Nothing.glb",
  ABeautifulWorld: "/models/ABeautifulWorld.glb",
};

export const ProductModel = ({
  data,
  selectedProductId,
  setSelectedProductId,
  radius,
  cameraRadius,
  rotation,
}) => {
  const three = useThree();
  const [sign, setSign] = useState(false);
  const x = radius * Math.cos(rotation);
  const z = radius * Math.sin(rotation);

  const cameraX = cameraRadius * Math.cos(rotation);
  const cameraZ = cameraRadius * Math.sin(rotation);
  const productModelRef = useRef(null);

  const { scene, animations } = useGLTF(productGltfUrl[data.name]);

  const handGltf = useGLTF("/models/hand.glb");

  const handGltfScene = handGltf.scene.clone();
  const { actions } = useAnimations(animations, productModelRef);

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
      {selected && (
        <motion.primitive
          initial={{
            rotateY: 0,
            rotateZ: 0,
            rotateX: 0,
          }}
          animate={{
            rotateY: Math.PI,
            rotateZ: Math.PI * 0.3,
            rotateX: Math.PI * 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          scale={0.2}
          object={handGltfScene}
          position={[-1, -5, 1.5]}
        />
      )}
    </group>
  );
};
