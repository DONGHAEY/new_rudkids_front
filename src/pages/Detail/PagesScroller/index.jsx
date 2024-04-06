import { useEffect, useRef } from "react";
import { DetailScrollerUI } from "./styles";

let scrolling = false;
const PagesScroller = ({ children, setPage, page, maxPage }) => {
  const scrollerRef = useRef(null);
  const wheelHandler = (e) => {
    e.preventDefault();
    if (!scrolling) {
      //scrolling
      if (e.deltaY > 0) {
        if (page + 1 <= maxPage) {
          setPage((page) => page + 1);
        }
      } else {
        if (page - 1 >= 0) {
          setPage((page) => page - 1);
        }
      }
    }
    clearTimeout(scrolling);
    scrolling = setTimeout(() => {
      // stop Scrolling
      scrolling = undefined;
    }, 100);
  };

  let startTouchEvent = undefined;
  const touchStartHandler = (e) => {
    startTouchEvent = e;
  };

  const tocuhMoveHandler = (e) => {
    if (!scrolling) {
      if (startTouchEvent) {
        const st = startTouchEvent.touches?.[0]?.screenY;
        const ed = e.touches[0]?.screenY;
        if (st < ed) {
          if (page - 1 >= 0) {
            setPage((page) => page - 1);
          }
        } else {
          if (page + 1 <= maxPage) {
            setPage((page) => page + 1);
          }
        }
      }
    }
    clearTimeout(scrolling);
    scrolling = setTimeout(() => {
      startTouchEvent = undefined;
      scrolling = undefined;
    }, 100);
    return false;
  };

  const eventPreventHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    scrollerRef.current.addEventListener("wheel", eventPreventHandler, {
      passive: false,
    });
    scrollerRef.current.addEventListener("touchmove", eventPreventHandler, {
      passive: false,
    });
  }, []);

  return (
    <DetailScrollerUI
      ref={scrollerRef}
      onWheel={wheelHandler}
      onTouchStart={touchStartHandler}
      onTouchMove={tocuhMoveHandler}
    >
      {children}
    </DetailScrollerUI>
  );
};

export default PagesScroller;
