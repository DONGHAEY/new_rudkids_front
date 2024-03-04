import { useState } from "react";
import { RandomClouds } from "./RandomClouds";
import { ViewButton } from "./ViewButton";
import { ProductModel } from "./ProductModel";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion-3d";

export const Scene = ({ productList }) => {
  const [controlMaxDistance, setControlMaxDistance] = useState(100);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const three = useThree();

  useEffect(() => {
    if (!three.camera) return;
    gsap.fromTo(
      three.camera.position,
      {
        z: 100,
      },
      {
        z: 30,
        duration: 1.2,
        onComplete: () => {
          setControlMaxDistance(30);
        },
      },
      "<"
    );
  }, [three.camera]);

  const productGltf = {
    PetFly: useGLTF("/models/dancer.glb"),
    Nothing: useGLTF("/models/card.glb"),
    ABeautifulWorld: useGLTF("/models/credit_card.glb"),
  };

  return (
    <>
      <motion.group
        initial={{
          rotateY: 0,
        }}
        animate={{ rotateY: Math.PI * 2 }}
        transition={{
          duration: 0.7,
        }}
      >
        {productList.map((data, idx) => {
          return (
            <ProductModel
              key={idx}
              gltf={productGltf[data.name]}
              setSelectedProductId={setSelectedProductId}
              selectedProductId={selectedProductId}
              data={data}
              rotation={((Math.PI * 2) / productList.length) * idx}
              cameraRadius={20}
              radius={3.5}
            />
          );
        })}
      </motion.group>
      <RandomClouds />
      <ViewButton productId={selectedProductId} />
      {/*  */}
      <ambientLight intensity={5} position={[0, 10, 0]} />
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minDistance={15}
        maxDistance={controlMaxDistance}
        enablePan={false}
      />
    </>
  );
};
