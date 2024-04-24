import { lazy, useState, Suspense, useEffect } from "react";

import PagesRenderer from "../PagesRenderer";
import PagesScroller from "../PagesScroller";

import componentSrcList from "./Pages";
import { CanvasUI } from "./styles";
import { useWindowSize } from "../../../hooks/useWindowSize";
const Scene = lazy(() => import("./Scene"));

export const Nothing = () => {
  const maxPage = componentSrcList.length - 1; //페이지가 0부터 시작하기 때문에 1을 빼주자...
  const [page, setPage] = useState(0);
  const moveDuration = 2;
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <PagesScroller page={page} maxPage={maxPage} setPage={setPage}>
      <CanvasUI
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: windowWidth / windowHeight,
          near: 0.5,
          far: 100,
        }}
      >
        <Scene offset={page / maxPage} moveDuration={moveDuration} />
      </CanvasUI>
      <PagesRenderer
        page={page}
        componentSrcList={componentSrcList}
        moveDuration={moveDuration}
      />
    </PagesScroller>
  );
};
