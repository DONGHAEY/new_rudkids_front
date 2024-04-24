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
    const options = {
      passive: false,
    };
    window.addEventListener("touchstart", touchStartHandler, options);
    window.addEventListener("touchmove", touchMoveHandler, options);
    window.addEventListener("touchend", touchEndHandler, options);
    window.addEventListener("wheel", wheelHandler, options);
    return () => {
      window.removeEventListener("touchstart", touchStartHandler);
      window.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("touchend", touchEndHandler);
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [page]);

  return <PagesScrollerUI>{children}</PagesScrollerUI>;
};

export default PagesScroller;
