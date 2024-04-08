import { lazy, useState, Suspense } from "react";
import { CanvasUI } from "./styles";

import PagesRenderer from "../PagesRenderer";
import PagesScroller from "../PagesScroller";
import { useWindowSize } from "../../../hooks/useWindowSize";

import Scene from "./Scene";
import componentSrcList from "./Pages";

export const Nothing = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const maxPage = componentSrcList.length - 1; //페이지가 0부터 시작하기 때문에 1을 빼주자...
  const [page, setPage] = useState(0);
  const moveDuration = 2;

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
        children={<Scene offset={page / maxPage} moveDuration={moveDuration} />}
      />
      <PagesRenderer
        page={page}
        componentSrcList={componentSrcList}
        moveDuration={moveDuration}
      />
    </PagesScroller>
  );
};
