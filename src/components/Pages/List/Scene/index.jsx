import { useState } from "react";
import { RandomClouds } from "./RandomClouds";
import { WatchButton } from "./WatchButton";
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
  const [isWatching, setIsWatching] = useState(false);
  const three = useThree();

  // const portalGltf = useGLTF("/models/portal.glb");

  useEffect(() => {
    if (!three.camera) return;
    gsap.fromTo(
      three.camera.position,
      {
        z: 100,
      },
      {
        z: 15,
        duration: 1.5,
        onComplete: () => {
          setControlMaxDistance(20);
        },
      }
    );
  }, [three.camera]);

  return (
    <>
      <motion.group
        initial={{
          rotateY: 0,
        }}
        animate={{ rotateY: Math.PI * 4 }}
        transition={{
          duration: 1,
        }}
      >
        {productList.map((data, idx) => {
          return (
            <ProductModel
              key={idx}
              setSelectedProductId={setSelectedProductId}
              selectedProductId={selectedProductId}
              isWatching={isWatching}
              data={data}
              rotation={((Math.PI * 2) / productList.length) * idx}
              distance={4.5}
              cameraDistance={20}
            />
          );
        })}
      </motion.group>
      <RandomClouds />
      <SunModel position={[-25, 20, 30]} />
      <GrassModel position={[0, -41, 0]} />
      <ambientLight intensity={1} position={[-25, 20, 30]} color={0xffffff} />
      <WatchButton
        isWatching={isWatching}
        setIsWatching={setIsWatching}
        productId={selectedProductId}
        setProductId={setSelectedProductId}
      />
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minDistance={15}
        maxDistance={controlMaxDistance}
        enableZoom={!isWatching}
        enableRotate={!isWatching}
        enableDamping={!isWatching}
        enablePan={false}
      />
    </>
  );
};
