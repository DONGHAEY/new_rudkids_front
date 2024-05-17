import { useSphere } from "@react-three/cannon";
import { DragControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function PointerDrag() {
  const { viewport, pointer } = useThree();

  const [, api] = useSphere(() => ({ type: "Kinematic", args: [5] }));
  useEffect(() => {
    const leaveTouchBall = () => {
      pointer.setX(999);
      pointer.setY(999);
    };
    window.addEventListener("pointerout", leaveTouchBall);
    leaveTouchBall();
    return () => {
      window.removeEventListener("pointerout", leaveTouchBall);
    };
  }, []);

  useFrame((e) => {
    api.position.set(
      (e.pointer.x * viewport.width) / 2,
      (e.pointer.y * viewport.height) / 2,
      7
    );
  });

  return <DragControls enabled />;
}
