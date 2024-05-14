import React from "react";
import { CanvasUI } from "./styles";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import Object from "./Object";

const Scene3D = ({ offset = 0, moveDuration = 2 }) => {
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
      <Object offset={offset} />
    </CanvasUI>
  );
};

export default Scene3D;
