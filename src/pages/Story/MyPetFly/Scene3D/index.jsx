import { Html } from "@react-three/drei";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import Object from "./Object";
import { CanvasUI } from "./styles";

const Scene3D = ({ moveDuration = 2, offset, scroller }) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <CanvasUI
      gl={{ antialias: true }}
      camera={{
        fov: 60,
        aspect: windowWidth / windowHeight,
        near: 0.5,
        far: 100,
      }}
    >
      <Html fullscreen={true}>{scroller}</Html>
      <Object moveDuration={moveDuration} offset={offset} />
    </CanvasUI>
  );
};

export default Scene3D;
