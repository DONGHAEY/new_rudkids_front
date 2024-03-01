import { useThree, Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useGLTF, OrbitControls, useBounds } from "@react-three/drei";
import { Suspense } from "react";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import { RandomClouds } from "./RandomClouds";
import { ViewButton } from "./ViewButton";
import { ProductModel } from "./ProductModel";

export const Scene = ({ productList }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <>
      {selectedProductId != null && (
        <ViewButton productId={selectedProductId} />
      )}
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
    </>
  );
};
