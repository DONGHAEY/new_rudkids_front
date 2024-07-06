import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const FixedCanvas = ({ children }) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <Canvas
      style={{
        top: 0,
        position: "fixed",
        zIndex: 0,
        pointerEvents: "none",
        touchAction: "none",
        maxWidth: "430px",
        margin: "0 auto",
        width: "100%",
        height: "100%",
      }}
      gl={{ antialias: true }}
      camera={{
        fov: 60,
        aspect: windowWidth / windowHeight,
        near: 0.5,
        far: 100,
      }}
    >
      {children}
    </Canvas>
  );
};

export default FixedCanvas;
