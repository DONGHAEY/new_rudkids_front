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

const getLookAtPos = (distance, rotation) => {
  const lookAtPosX = distance * Math.cos(rotation);
  const lookAtPosZ = distance * Math.sin(rotation);
  return {
    x: lookAtPosX,
    z: lookAtPosZ,
  };
};

export const ProductModel = ({
  data,
  selectedProductId,
  setSelectedProductId,
  radius,
  isWatching,
  cameraRadius,
  rotation,
}) => {
  const three = useThree();
  const x = radius * Math.cos(rotation);
  const z = radius * Math.sin(rotation);
  const rotationY = Math.PI / 2 - rotation;

  const { x: cameraX, z: cameraZ } = getLookAtPos(cameraRadius, rotation);

  const [isCameraMovingFinished, setCameraMovingFinished] = useState(false);

  const productGroupRef = useRef(null);
  const productRef = useRef(null);
  const handRef = useRef(null);

  const { scene, animations } = useGLTF(productGltfUrl[data.name]);

  const handGltf = useGLTF("/models/hand.glb");

  const handGltfScene = handGltf.scene.clone();
  const { actions } = useAnimations(animations, productGroupRef);

  const selected = selectedProductId === data.id;

  useEffect(() => {
    if (selected) {
      gsap.to(three.camera.position, {
        x: cameraX,
        z: cameraZ,
        duration: 2,
        onComplete: () => {
          setCameraMovingFinished(true);
        },
      });
    } else {
      setCameraMovingFinished(false);
    }
  }, [selected, isWatching, cameraX, cameraZ, three.camera.position]);

  useEffect(() => {
    if (!handRef.current || !productGroupRef.current) return;
    if (selected && isWatching) {
      const timeline = gsap.timeline();

      const { x: hitPointX, z: hitPointZ } = getLookAtPos(
        cameraRadius - 5,
        rotation
      );

      timeline
        .to(three.camera.position, {
          x: cameraX,
          z: cameraZ,
          duration: 1,
        })
        .to(productGroupRef.current.rotation, {
          y: rotationY - Math.PI,
          duration: 0.5,
        })
        .to(handRef.current.rotation, {
          x: Math.PI / 2,
          duration: 0.5,
        })
        .to(handRef.current.rotation, {
          x: Math.PI / 5,
          duration: 0.5,
        })
        .to(productGroupRef.current.position, {
          x: hitPointX,
          z: hitPointZ,
          y: three.camera.position.y,
          duration: 0.5,
        })
        .to(productRef.current.position, {
          y: -30,
          duration: 2,
          delay: 2,
        });
      timeline.play();
    }
  }, [
    isWatching,
    selected,
    handRef.current,
    productRef.current,
    three.camera.position,
  ]);

  return (
    <group
      position-x={x}
      position-z={z}
      rotation-y={rotationY}
      ref={productGroupRef}
      onClick={() => setSelectedProductId(data.id)}
      // onPointerMissed={() => setSelectedProductId(null)}
    >
      {selected && isCameraMovingFinished && !isWatching && (
        <ProductTag
          rotation-y={Math.PI / 2 - rotation}
          name={data.name}
          content={data.content}
        />
      )}
      <primitive ref={productRef} scale={2.7} object={scene} />
      {selected && (
        <motion.primitive
          ref={handRef}
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
          position={[-1, -5, 2.5]}
        />
      )}
    </group>
  );
};
