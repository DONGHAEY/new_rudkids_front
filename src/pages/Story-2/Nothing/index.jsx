import { useState, useRef } from "react";
import Scroller from "../Scroller";
import componentSrcList from "./Pages";
import Scene3D from "./Scene3D";
import { CanvasWrapperUI } from "../MyPetFly/Scene3D/styles";

export const Nothing = () => {
  const [offset, setOffset] = useState(0);
  const moveDuration = 1.2;

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
