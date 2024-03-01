import { useState } from "react";
import { RandomClouds } from "./RandomClouds";
import { ViewButton } from "./ViewButton";
import { ProductModel } from "./ProductModel";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export const Scene = ({ productList }) => {
  const zoomStartZ = 100;

  const [isFirstAnimated, setIsFirstAnimated] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const three = useThree();

  useEffect(() => {
    if (!three.camera) return;
    gsap.fromTo(
      three.camera.position,
      {
        z: zoomStartZ,
      },
      {
        z: 30,
        duration: 1.3,
        onComplete: () => {
          setIsFirstAnimated(true);
        },
      },
      "<"
    );
  }, [three.camera.position]);

  return (
    <>
      {productList.map((data, idx) => {
        return (
          <ProductModel
            key={idx}
            setSelectedProductId={setSelectedProductId}
            selectedProductId={selectedProductId}
            data={data}
            rotation={((Math.PI * 2) / productList.length) * idx}
            cameraRadius={20}
            radius={7}
          />
        );
      })}
      <RandomClouds />
      <ViewButton productId={selectedProductId} />
      {/*  */}
      <ambientLight intensity={5} position={[0, 10, 0]} />
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        minDistance={15}
        maxDistance={isFirstAnimated ? 40 : zoomStartZ}
        enablePan={false}
      />
    </>
  );
};
