import { useEffect } from "react";

let startTouchEvent = undefined;
let endTouchEvent = undefined;
let scrolling = undefined;

const ScrollDetector = ({ moveDuration = 2, onScrollComplete, page }) => {
  // const wheelHandler = (e) => {
  //   if (!scrolling) {
  //     if (e.deltaY > 0) {
  //       onScrollDown();
  //     } else if (e.deltaY < 0) {
  //       onScrollUp();
  //     }
  //     scrolling = setTimeout(() => {
  //       scrolling = undefined;
  //     }, moveDuration * 1000);
  //   }
  // };

  const touchStartHandler = (e) => {
    if (!scrolling) {
      startTouchEvent = e;
    }
  };

  const touchMoveHandler = (e) => {
    if (!scrolling) {
      endTouchEvent = e;
    }
  };

  const touchEndHandler = (e) => {
    // console.log(e.target);
    // const st = startTouchEvent?.touches?.[0]?.screenY;
    // const ed = endTouchEvent?.touches[0]?.screenY;

    onScrollComplete();
    startTouchEvent = undefined;
    endTouchEvent = undefined;
  };

  useEffect(() => {
    const options = {
      passive: false,
    };
    window.addEventListener("touchstart", touchStartHandler, options);
    window.addEventListener("touchmove", touchMoveHandler, options);
    window.addEventListener("touchend", touchEndHandler, options);

    return () => {
      window.removeEventListener("touchstart", touchStartHandler);
      window.removeEventListener("touchmove", touchMoveHandler);
      window.removeEventListener("touchend", touchEndHandler);
    };
  }, [page]);

  return null;
};

export default ScrollDetector;
