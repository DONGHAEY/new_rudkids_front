import { Html, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/cannon";
import { Phompomi } from "./Phompomi";
import { PointerCollider } from "./PointerCollider";
import { BoundaryPlanes } from "./BoundaryPlanes";
import { CanvasUI } from "./styles";
import { Blackhole } from "./Blackhole";
import loadingLottie from "./assets/loading.json";
import Lottie from "react-lottie";

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
  const pompomGltf = useGLTF("./Models/pompom4.glb");
  const [gravity, setGravity] = useState([0, -100.8, 0]);

  return (
    <Canvas>
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
            {colors.map((color, idx) => {
              return (
                <Phompomi
                  key={color + idx}
                  gltf={pompomGltf}
                  color={color}
                  count={35}
                />
              );
            })}
          </group>
          <BoundaryPlanes />
          {!blackholeActive && (
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
              <Lottie
                style={{
                  height: "80px",
                }}
                options={{
                  animationData: loadingLottie,
                }}
              />
              <p
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                내 프로필 찾는 중...
              </p>
            </Html>
          )}
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default LoadingScene;
