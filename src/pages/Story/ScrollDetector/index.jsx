import { useEffect, useRef, useState } from "react";

let startTouchEvent = undefined;
let endTouchEvent = undefined;
let scrolling = undefined;

const ScrollDetector = ({
  moveDuration = 2,
  setPage,
  page,
  maxPage,
  sensitivity = 100,
}) => {
  const checkIsIgnoreElementEvent = (eTarget) => {
    if (!eTarget) return false;
    if (eTarget.className.includes("scroll-detector-ignore")) {
      return true;
    }
    return checkIsIgnoreElementEvent(eTarget.parentElement);
  };

  const wheelHandler = (e) => {
    if (checkIsIgnoreElementEvent(e.target)) {
      console.log("해당 요소 휠은 무시합니다");
      return;
    }
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
    if (checkIsIgnoreElementEvent(e.target)) {
      console.log("해당 요소클릭은 무시합니다");
      return;
    }
    if (e.touches?.[0]?.screenX < 10) return;
    if (!scrolling) {
      e.preventDefault();
      startTouchEvent = e;
    }
  };

  const touchMoveHandler = (e) => {
    if (checkIsIgnoreElementEvent(e.target)) {
      console.log("해당 요소클릭은 무시합니다");
      return;
    }
    if (!startTouchEvent) return;
    if (!scrolling) {
      e.preventDefault();
      endTouchEvent = e;
    }
  };

  const touchEndHandler = (e) => {
    if (checkIsIgnoreElementEvent(e.target)) {
      console.log("해당 요소클릭은 무시합니다");
      return;
    }
    if (!startTouchEvent || !endTouchEvent) return;
    if (!scrolling) {
      e.preventDefault();
      const st = startTouchEvent.touches?.[0]?.screenY;
      const ed = endTouchEvent.touches[0]?.screenY;
      const scrollP = (st - ed).toFixed(0);
      if (scrollP < -sensitivity) {
        if (page - 1 >= 0) {
          setPage((page) => page - 1);
        }
      } else if (scrollP > sensitivity) {
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

  return null;
};

export default ScrollDetector;
