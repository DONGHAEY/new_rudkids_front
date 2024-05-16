import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { Phompomi } from "./Phompomi";
import { Mouse } from "./Mouse";
import { BoundaryPlanes } from "./BoundaryPlanes";
import { CanvasUI } from "./styles";

const colors = ["#FFE639", "#ED2424", "#2F70B7"];

const Scene = () => {
  const gltf = useGLTF("./Models/pompom4.glb");

  return (
    <CanvasUI
      shadows
      gl={{ stencil: false, antialias: false }}
      camera={{
        position: [0, 0, 20],
        fov: 50,
        near: 17,
        far: 40,
      }}
    >
      {/* <fog attach="fog" args={["#EC0000", 25, 35]} /> */}
      {/* <color attach="background" args={["t"]} /> */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={6}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <Physics
          gravity={[0, -100.8, 0]}
          defaultContactMaterial={{ restitution: 0.5 }}
        >
          <group position={[0, 0, -10]}>
            {colors.map((color) => (
              <Phompomi gltf={gltf} color={color} count={15} />
            ))}
            <BoundaryPlanes />
            <Mouse />
          </group>
        </Physics>
      </Suspense>
    </CanvasUI>
  );
};

export default Scene;
