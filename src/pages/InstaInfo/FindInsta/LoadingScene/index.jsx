import { Html, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/cannon";
import { Phompomi } from "./Phompomi";
import { PointerCollider } from "./PointerCollider";
import { BoundaryPlanes } from "./BoundaryPlanes";
import { CanvasUI } from "./styles";
import { Blackhole } from "./Blackhole";
import Loader from "./Loader";

const colors = [0xfee639, 0xed2424, 0x2f70b7];

const Canvas = ({ children }) => {
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
      {children}
    </CanvasUI>
  );
};

const LoadingScene = ({ blackholeActive, onComplete }) => {
  const pompomGltfs = useGLTF(
    new Array(colors.length).fill(null).map(() => "./Models/pompom5.glb")
  );
  const [gravity, setGravity] = useState([0, -100.8, 0]);

  return (
    <Canvas>
      <ambientLight intensity={10} />
      <directionalLight
        position={[-10, -10, -5]}
        lookAt={[0, 0, 0]}
        intensity={10}
      />
      <directionalLight
        position={[10, 10, -5]}
        lookAt={[0, 0, 0]}
        intensity={10}
        // shadow-mapSize={[256, 256]}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
      />
      <directionalLight
        position={[0, 20, 0]}
        lookAt={[0, 0, 0]}
        intensity={10}
      />
      <directionalLight castShadow intensity={10} position={[50, 50, 25]} />
      <Suspense fallback={null}>
        <Physics
          gravity={gravity}
          defaultContactMaterial={{ restitution: 0.5 }}
        >
          <Blackhole
            isActive={blackholeActive}
            setGravity={setGravity}
            onComplete={() => {
              setTimeout(() => {
                onComplete();
              }, 1000);
            }}
          />
          {!blackholeActive && <PointerCollider />}
          <group position={[0, 0, -10]}>
            {pompomGltfs.map((gltf, idx) => {
              const scene = gltf.scene;
              scene.traverse((node) => {
                if (node.isMesh) {
                  if (node.material.name === "") {
                    // 변경하고자 하는 material 이름
                    node.material.color.set(colors[idx]); // 빨간색으로 변경
                  }
                }
              });
              return new Array(30).fill(null).map((_, idx) => {
                return <Phompomi key={idx} scene={scene.clone()} />;
              });
            })}
          </group>
          <BoundaryPlanes />
          <Html
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            fullscreen
            position={[0, 0, 10]}
          >
            <div
              style={{
                marginTop: "-35%",
              }}
            ></div>
            <Loader isFinished={blackholeActive} />
          </Html>
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default LoadingScene;
