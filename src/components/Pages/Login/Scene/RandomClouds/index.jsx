import { BakeShadows, useGLTF } from "@react-three/drei";
import { CloudDetailed } from "./CloudDetailed";

const positions = [...Array(50)].map(() => ({
  position: [
    50 - Math.random() * 80,
    75 - Math.random() * 80,
    50 - Math.random() * 80,
  ],
  // rotation: [
  //   Math.random() * Math.PI *,
  //   Math.random() * Math.PI * 10,
  //   Math.random() * Math.PI * 10,
  // ],
}));

export function RandomClouds() {
  const cloudGlbs = useGLTF(["/models/cloud_test.glb"]);
  return (
    <>
      {positions.map((props, i) => (
        <CloudDetailed key={i} {...props} cloudGlbs={cloudGlbs} />
      ))}
      <BakeShadows />
    </>
  );
}
