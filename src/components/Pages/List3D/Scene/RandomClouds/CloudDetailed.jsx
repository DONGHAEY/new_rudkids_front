import { Detailed } from "@react-three/drei";

export function CloudDetailed({ cloudGlbs, ...props }) {
  return (
    <Detailed distances={[0, 65, 125, 185]} {...props}>
      <group>
        {cloudGlbs?.map(({ nodes, materials }, index) => {
          return (
            <mesh
              receiveShadow
              castShadow
              key={index}
              geometry={nodes["Plane001_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
              scale={1.9}
            />
          );
        })}
      </group>
    </Detailed>
  );
}
