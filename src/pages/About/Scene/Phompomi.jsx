import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

export const Phompomi = ({ count, gltf, color }) => {
  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1.2],
  }));

  return (
    <instancedMesh
      ref={ref}
      args={[null, null, count]}
      geometry={gltf?.nodes["pompom4"].geometry}
      material={gltf?.materials[""]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color ?? "black"} />
    </instancedMesh>
  );

  return {
    /* <instancedMesh
        ref={ref}
        castShadow
        receiveShadow
        args={[null, null, count]}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color="black" roughness={0} />
      </instancedMesh> */
  };
};
