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

  const productGltf = {
    PetFly: useGLTF("/models/MyPetFly.glb"),
    Nothing: useGLTF("/models/Nothing.glb"),
    ABeautifulWorld: useGLTF("/models/ABeautifulWorld.glb"),
  };

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
              gltf={productGltf[data.name]}
              setSelectedProductId={setSelectedProductId}
              selectedProductId={selectedProductId}
              data={data}
              rotation={((Math.PI * 2) / productList.length) * idx}
              cameraRadius={20}
              radius={4}
            />
          );
        })}
      </motion.group>
      <RandomClouds />
      <SunModel position={[-25, 20, 30]} />
      {/*  */}
      <ambientLight intensity={1.3} position={[0, 0, 0]} color={0xffffff} />
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

const SunModel = ({ position }) => {
  const sunGltf = useGLTF("/models/the_sun.glb");
  return (
    <>
      <primitive scale={9} object={sunGltf.scene} position={position} />
      <directionalLight
        // ref={lightRef}
        castShadow={true}
        args={[0xffa400, 1.3]}
        lookAt={[0, 0, 0]}
        position={position}
      />
    </>
  );
};
