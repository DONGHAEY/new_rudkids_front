import { useState } from "react";
import Scroller from "../Scroller";
import ScrollDetector from "../ScrollDetector";
import componentSrcList from "./Pages";
import Scene3D from "./Scene3D";
import FixedCanvas from "../FixedCanvas";

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
        sensitivity={10}
      />
      <Scroller
        componentSrcList={componentSrcList}
        moveDuration={moveDuration}
        setOffset={setOffset}
        page={page}
      />
      <FixedCanvas>
        <Scene3D page={page} maxPage={maxPage} moveDuration={moveDuration} />
      </FixedCanvas>
    </>
  );
};
