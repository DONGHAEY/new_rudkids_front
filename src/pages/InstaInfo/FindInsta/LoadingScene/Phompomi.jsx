import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

export const Phompomi = ({ scene }) => {
  //
  const { viewport } = useThree();

  const [ref] = useSphere((index) => ({
    mass: 0.5,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1],
  }));

  return (
    <group ref={ref}>
      <primitive castShadow receiveShadow object={scene} scale={0.8} />
    </group>
  );
};
