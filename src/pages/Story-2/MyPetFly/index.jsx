import { useState, Suspense, useEffect, useRef } from "react";
import Scroller from "../Scroller";
import componentSrcList from "./Pages";
import Scene3D from "./Scene3D";
import { CanvasWrapperUI } from "./Scene3D/styles";

export const MyPetFly = () => {
  const moveDuration = 1.8;
  const [offset, setOffset] = useState(0);

  return (
    <Scroller
      componentSrcList={componentSrcList}
      moveDuration={moveDuration}
      setOffset={setOffset}
    >
      <CanvasWrapperUI>
        <Scene3D offset={offset} />
      </CanvasWrapperUI>
    </Scroller>
  );
};
