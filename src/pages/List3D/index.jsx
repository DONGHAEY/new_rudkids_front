import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

import { Suspense } from "react";
import { PageUI } from "./styles";

const productList = [
  {
    id: 1,
    name: "Pet Fly",
    content: "Make your Fly",
    modelUrl:
      "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/sign/rudkids/Items/my_pet_fly/1.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJydWRraWRzL0l0ZW1zL215X3BldF9mbHkvMS5nbGIiLCJpYXQiOjE3MTQwMTk0NDEsImV4cCI6MTcyNjk3OTQ0MX0.FqPffqBOHAcMRQ7O8-gXMfjBA89zpgsu3kBkkQPLWRY&t=2024-04-25T04%3A30%3A42.051Z",
  },
  {
    id: 2,
    name: "Nothing",
    content: "Feel empty space",
    modelUrl:
      "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/sign/rudkids/Items/nothing/1.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJydWRraWRzL0l0ZW1zL25vdGhpbmcvMS5nbGIiLCJpYXQiOjE3MTQwMTUxMzcsImV4cCI6MjAyOTM3NTEzN30.LvzTUDsYfxnVt5cDH2mz5ZDemGSklsTdCLwqnvPBwSA",
  },
  {
    id: 3,
    name: "A Beautiful World",
    content: "It's Okay to have some rest",
    modelUrl:
      "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/sign/rudkids/Items/a_beautiful_world/1.glb?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJydWRraWRzL0l0ZW1zL2FfYmVhdXRpZnVsX3dvcmxkLzEuZ2xiIiwiaWF0IjoxNzE0MDE4OTY0LCJleHAiOjE3MjY5Nzg5NjR9.Yalrev1qHeNFhclJmYDt66Gcz1yFgqQFORxmJOw68DI&t=2024-04-25T04%3A22%3A44.860Z",
  },
];

const List3dPage = () => {
  /** 아이템리스트페이지(아이템GLB파일*애니메이션 포함) */

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
        <Scene productList={productList} />
      </Canvas>
    </PageUI>
  );
};

export default List3dPage;
