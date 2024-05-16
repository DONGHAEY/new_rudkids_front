import { useSphere } from "@react-three/cannon";
import { DragControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function PointerDrag() {
  const { viewport } = useThree();

  const [, api] = useSphere(() => ({ type: "Kinematic", args: [5] }));

  useFrame((e) => {
    api.position.set(
      (e.pointer.x * viewport.width) / 2,
      (e.pointer.y * viewport.height) / 2,
      7
    );
  });

  return <DragControls enabled={true} />;
}
