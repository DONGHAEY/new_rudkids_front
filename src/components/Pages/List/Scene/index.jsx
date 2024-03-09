import { useState } from "react";
import { RandomClouds } from "./RandomClouds";
import { ViewButton } from "./ViewButton";
import { ProductModel } from "./ProductModel";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion-3d";
import { SunModel } from "./SunModel";
import { GrassModel } from "./GrassModel";

export const Scene = ({ productList }) => {
  const [controlMaxDistance, setControlMaxDistance] = useState(100);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const three = useThree();

  const portalGltf = useGLTF("/models/portal.glb");

  useEffect(() => {
    if (!three.camera.position) return;
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
      }
    );
  }, [three.camera.position]);

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
              setSelectedProductId={setSelectedProductId}
              selectedProductId={selectedProductId}
              data={data}
              rotation={((Math.PI * 2) / productList.length) * idx}
              cameraRadius={23}
              radius={5}
            />
          );
        })}
      </motion.group>
      <RandomClouds />
      <SunModel position={[-25, 20, 30]} />
      <GrassModel position={[0, -23, 0]} />
      <ambientLight intensity={1} position={[-25, 20, 30]} color={0xffffff} />
      <ViewButton productId={selectedProductId} />
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
