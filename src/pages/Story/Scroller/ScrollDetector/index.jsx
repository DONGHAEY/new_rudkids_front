import { useEffect, useRef } from "react";

let startTouchEvent = undefined;
let endTouchEvent = undefined;
let scrolling = undefined;

const ScrollDetector = ({ moveDuration = 2, setPage, page, maxPage }) => {
  const touchDetectorRef = useRef();

  const wheelHandler = (e) => {
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
    if (!touchDetectorRef.current) return;
    const options = {
      passive: false,
    };
    touchDetectorRef.current.addEventListener(
      "touchstart",
      touchStartHandler,
      options
    );
    touchDetectorRef.current.addEventListener(
      "touchmove",
      touchMoveHandler,
      options
    );
    touchDetectorRef.current.addEventListener(
      "touchend",
      touchEndHandler,
      options
    );
    touchDetectorRef.current.addEventListener("wheel", wheelHandler, options);
    return () => {
      if (!touchDetectorRef.current) return;
      touchDetectorRef.current.removeEventListener(
        "touchstart",
        touchStartHandler
      );
      touchDetectorRef.current.removeEventListener(
        "touchmove",
        touchMoveHandler
      );
      touchDetectorRef.current.removeEventListener("touchend", touchEndHandler);
      touchDetectorRef.current.removeEventListener("wheel", wheelHandler);
    };
  }, [touchDetectorRef.current, page]);

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
      ref={touchDetectorRef}
    />
  );
};

export default ScrollDetector;
