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
  distance,
  isWatching,
  cameraDistance,
  rotation,
}) => {
  const three = useThree();
  const x = distance * Math.cos(rotation);
  const z = distance * Math.sin(rotation);
  const rotationY = Math.PI / 2 - rotation;

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
      const { x: cameraX, z: cameraZ } = getLookAtPos(cameraDistance, rotation);
      gsap.to(three.camera.position, {
        x: cameraX,
        z: cameraZ,
        duration: 1.8,
        onComplete: () => {
          setCameraMovingFinished(true);
        },
      });
    } else {
      setCameraMovingFinished(false);
    }
  }, [selected, cameraDistance, rotation, three.camera]);

  useEffect(() => {
    if (!selected || !isWatching) return;

    const { x: cameraX, z: cameraZ } = getLookAtPos(cameraDistance, rotation);

    gsap.to(three.camera.position, {
      x: cameraX,
      z: cameraZ,
    });

    const timeline = gsap.timeline();

    const { x: collidePointX, z: collidePointZ } = getLookAtPos(
      cameraDistance - 1.5,
      rotation
    );

    timeline
      .to(productGroupRef.current.rotation, {
        y: rotationY - Math.PI,
        duration: 0.35,
      })
      .to(handRef.current.rotation, {
        x: Math.PI / 1.3,
        duration: 0.3,
      })
      .to(handRef.current.rotation, {
        x: Math.PI / 3.5,
        duration: 0.3,
      })
      .to(productGroupRef.current.position, {
        x: collidePointX,
        z: collidePointZ,
        y: three.camera.position.y,
        duration: 0.28,
      })
      .to(productRef.current.position, {
        y: -20,
        duration: 2,
        delay: 4,
      });
    timeline.play();
  }, [isWatching, selected]);

  return (
    <group
      position-x={x}
      position-z={z}
      rotation-y={rotationY}
      ref={productGroupRef}
      onClick={() => {
        if (!selectedProductId) {
          setSelectedProductId(data.id);
        } else {
          setSelectedProductId(null);
        }
      }}
    >
      {!selected && (
        <motion.primitive
          ref={productRef}
          initial={{
            y: 0,
          }}
          animate={{
            y: 1,
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          scale={2.8}
          object={scene}
        />
      )}
      {selected && (
        <>
          <primitive ref={productRef} scale={2.8} object={scene} />
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
            position={[-1, -5, 1.5]}
          />
          {isCameraMovingFinished && !isWatching && (
            <ProductTag
              name={data.name}
              content={data.content}
              position-y={5.5}
            />
          )}
        </>
      )}
    </group>
  );
};
