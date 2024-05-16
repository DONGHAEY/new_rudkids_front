import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";

export function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [5] }));

  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}
