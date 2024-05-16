import { useState, Suspense, useEffect, useRef } from "react";
import Scroller from "../Scroller";
import ScrollerDetector from "../Scroller/ScrollDetector";
import componentSrcList from "./Pages";
import Scene3D from "./Scene3D";
import { CanvasWrapperUI } from "../MyPetFly/Scene3D/styles";

export const Nothing = () => {
  const maxPage = componentSrcList.length - 1; //페이지가 0부터 시작하기 때문에 1을 빼주자...
  const [page, setPage] = useState(0);
  const moveDuration = 1.2;

  const pagesScrollerRef = useRef();

  return (
    <Scroller
      page={page}
      componentSrcList={componentSrcList}
      moveDuration={moveDuration}
      pagesScrollerRef={pagesScrollerRef}
    >
      <CanvasWrapperUI>
        <Scene3D offset={page / maxPage} moveDuration={moveDuration} />
      </CanvasWrapperUI>
      <ScrollerDetector
        pagesScrollerRef={pagesScrollerRef}
        page={page}
        maxPage={maxPage}
        setPage={setPage}
        moveDuration={moveDuration}
      />
    </Scroller>
  );
};
