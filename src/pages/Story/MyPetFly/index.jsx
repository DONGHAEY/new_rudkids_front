import { useState, Suspense, useEffect, useRef } from "react";
import Scroller from "../Scroller";
import ScrollDetector from "../Scroller/ScrollDetector";
import componentSrcList from "./Pages";
import Scene3D from "./Scene3D";
import { CanvasWrapperUI } from "./Scene3D/styles";
import { PagesScrollerUI } from "../Scroller/ScrollDetector/styles";

export const MyPetFly = () => {
  const moveDuration = 1.8;
  const maxPage = componentSrcList.length - 1; //페이지가 0부터 시작하기 때문에 1을 빼주자...
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);

  return (
    <>
      <ScrollDetector
        page={page}
        maxPage={maxPage}
        setPage={setPage}
        moveDuration={moveDuration}
      />
      <Scroller
        componentSrcList={componentSrcList}
        moveDuration={moveDuration}
        setOffset={setOffset}
        page={page}
      >
        <CanvasWrapperUI>
          <Scene3D page={page} maxPage={maxPage} moveDuration={moveDuration} />
        </CanvasWrapperUI>
      </Scroller>
    </>
  );
};
