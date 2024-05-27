import { useSphere } from "@react-three/cannon";
import { DragControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function PointerCollider() {
  const { viewport, pointer } = useThree();

  const [, api] = useSphere(() => ({ type: "Kinematic", args: [5] }));

  const leavePointer = () => {
    pointer.setX(999);
    pointer.setY(999);
  };

  useEffect(() => {
    window.addEventListener("pointerout", leavePointer);
    leavePointer();
    return () => {
      window.removeEventListener("pointerout", leavePointer);
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
