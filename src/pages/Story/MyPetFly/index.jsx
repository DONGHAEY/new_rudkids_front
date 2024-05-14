import { useState, Suspense, useEffect } from "react";
import PagesRenderer from "../PagesRenderer";
import PagesScroller from "../PagesScroller";
import componentSrcList from "./Pages";
import Scene3D from "./Scene3D";

export const MyPetFly = () => {
  const maxPage = componentSrcList.length - 1; //페이지가 0부터 시작하기 때문에 1을 빼주자...
  const [page, setPage] = useState(0);
  const moveDuration = 1.2;

  return (
    <PagesScroller
      page={page}
      maxPage={maxPage}
      setPage={setPage}
      moveDuration={moveDuration}
    >
      <Scene3D offset={page / maxPage} moveDuration={moveDuration} />
      <PagesRenderer
        page={page}
        componentSrcList={componentSrcList}
        moveDuration={moveDuration}
      />
    </PagesScroller>
  );
};
