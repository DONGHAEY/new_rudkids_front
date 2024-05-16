import { useEffect, useState } from "react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import Object from "./Object";
import { CanvasUI } from "./styles";
import gsap from "gsap";

const obj = {
  filteredOffset: 0,
};

const Scene3D = ({ moveDuration = 2, page, maxPage }) => {
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
      <Object page={page} maxPage={maxPage} moveDuration={moveDuration} />
    </CanvasUI>
  );
};

export default Scene3D;
