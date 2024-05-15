import { useEffect, useRef } from "react";
import { PagesScrollerUI } from "./styles";

let startTouchEvent = undefined;
let endTouchEvent = undefined;
let scrolling = undefined;

const PagesScroller = ({
  moveDuration = 2,
  setPage,
  page,
  maxPage,
  children,
}) => {
  //
  const pagesScrollerRef = useRef();

  const wheelHandler = (e) => {
    e.preventDefault();
    if (!scrolling) {
      if (e.deltaY > 0) {
        if (page + 1 <= maxPage) {
          setPage((page) => page + 1);
        }
      } else if (e.deltaY < 0) {
        if (page - 1 >= 0) {
          setPage((page) => page - 1);
        }
      }
      scrolling = setTimeout(() => {
        scrolling = undefined;
      }, moveDuration * 1000);
    }
  };

  const touchStartHandler = (e) => {
    console.log(e);
    e.preventDefault();
    if (!scrolling) {
      startTouchEvent = e;
    }
  };

  const touchMoveHandler = (e) => {
    e.preventDefault();
    if (!scrolling) {
      endTouchEvent = e;
    }
  };

  const touchEndHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (!scrolling) {
      if (!startTouchEvent || !endTouchEvent) return;
      const st = startTouchEvent.touches?.[0]?.screenY;
      const ed = endTouchEvent.touches[0]?.screenY;

      if (st - ed < 50) {
        if (page - 1 >= 0) {
          setPage((page) => page - 1);
        }
      } else if (st - ed > 50) {
        if (page + 1 <= maxPage) {
          setPage((page) => page + 1);
        }
      }
      startTouchEvent = undefined;
      endTouchEvent = undefined;
      scrolling = setTimeout(() => {
        scrolling = undefined;
      }, moveDuration * 1000);
    }
  };

  useEffect(() => {
    if (!pagesScrollerRef.current) return;
    const options = {
      passive: false,
    };
    pagesScrollerRef.current.addEventListener(
      "touchstart",
      touchStartHandler,
      options
    );
    pagesScrollerRef.current.addEventListener(
      "touchmove",
      touchMoveHandler,
      options
    );
    pagesScrollerRef.current.addEventListener(
      "touchend",
      touchEndHandler,
      options
    );
    pagesScrollerRef.current.addEventListener("wheel", wheelHandler, options);
    return () => {
      if (!pagesScrollerRef.current) return;
      pagesScrollerRef.current.removeEventListener(
        "touchstart",
        touchStartHandler
      );
      pagesScrollerRef.current.removeEventListener(
        "touchmove",
        touchMoveHandler
      );
      pagesScrollerRef.current.removeEventListener("touchend", touchEndHandler);
      pagesScrollerRef.current.removeEventListener("wheel", wheelHandler);
    };
  }, [pagesScrollerRef.current, page]);

  return <PagesScrollerUI ref={pagesScrollerRef}>{children}</PagesScrollerUI>;
};

export default PagesScroller;
