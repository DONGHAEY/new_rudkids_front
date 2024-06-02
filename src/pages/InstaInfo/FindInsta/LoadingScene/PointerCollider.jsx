import { useSphere } from "@react-three/cannon";
import { DragControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function PointerCollider({ zPos = 4 }) {
  const { viewport, pointer } = useThree();

  const [shpereRef, api] = useSphere(() => ({
    type: "Kinematic",
    args: [8],
  }));

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
      zPos
    );
  });

  return (
    <>
      <DragControls enabled>
        {/* <mesh ref={shpereRef}>
          <sphereGeometry args={[8]} />
          <meshStandardMaterial color="yellow" />
        </mesh> */}
      </DragControls>
    </>
  );
}
