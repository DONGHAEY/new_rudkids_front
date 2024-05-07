import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

import { Suspense, useMemo } from "react";
import { PageUI } from "./styles";
import { useProductListQuery } from "../../queries/product";

// const productList = [
//   {
//     id: 1,
//     name: "Pet Fly",
//     description: "Make your Fly",
//     modelUrl:
//       "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/nothing/package.glb?t=2024-05-07T04%3A56%3A32.798Z",
//   },
//   {
//     id: 2,
//     name: "Nothing",
//     description: "Feel empty space",
//     modelUrl:
//       "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/my_pet_fly/1.glb?t=2024-05-07T04%3A59%3A03.563Z",
//   },
//   {
//     id: 3,
//     name: "A Beautiful World",
//     description: "It's Okay to have some rest",
//     modelUrl:
//       "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/Items/a_beautiful_world/1.glb?t=2024-05-07T05%3A32%3A29.387Z",
//   },
// ];

const List3dPage = () => {
  /** 아이템리스트페이지(아이템GLB파일*애니메이션 포함) */

  const { data: productList } = useProductListQuery();

  const toyProductList = useMemo(() => {
    return productList?.map((product) => {
      const toy = product?.components?.find(
        (component) => component.name === "toy"
      );
      if (toy) {
        toy.name = product.name;
      }
      return toy;
    });
  }, [productList]);

  return (
    <PageUI>
      <Canvas
        id="canvas"
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.5,
          far: 100,
        }}
      >
        <Scene productList={toyProductList} />
      </Canvas>
    </PageUI>
  );
};

export default List3dPage;
