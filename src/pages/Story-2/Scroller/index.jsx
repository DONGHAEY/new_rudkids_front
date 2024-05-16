import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ComponentWrapperUI, PagesScrollerUI } from "./styles";
import gsap from "gsap";

let timeout = null;

const Scroller = ({
  componentSrcList,
  setOffset,
  moveDuration = 2,
  children,
}) => {
  const maxPage = componentSrcList.length; //페이지가 0부터 시작하기 때문에 1을 빼주자...
  const pagesScrollerRef = useRef();
  const pageRefList = useMemo(() => {
    return new Array(maxPage).fill(null).map((_) => createRef(_));
  }, [maxPage]);

  const [scrolling, setScrolling] = useState(false);
  const [page, setPage] = useState(0);

  const scrollHandler = (e) => {
    if (scrolling) {
      e.preventDefault();
    }
    const { clientHeight, scrollTop, scrollHeight } = pagesScrollerRef.current;
    if (typeof setOffset === "function") {
      const currentOffset = scrollTop / (scrollHeight - clientHeight);
      setOffset(currentOffset);
    }
    const scrollMiddle = clientHeight / 2 + scrollTop;
    let scrollTopCnt = 0;
    pageRefList.forEach((pageRef, idx) => {
      const pageTop = scrollTopCnt;
      const pageBottom = scrollTopCnt + pageRef?.current?.clientHeight;
      if (scrollMiddle >= pageTop && scrollMiddle <= pageBottom) {
        if (idx !== page) {
          setPage(idx);
        }
      }
      scrollTopCnt += pageRef?.current?.clientHeight;
    });
  };
  const scrollEndHandler = (e) => {
    e.preventDefault();
    const { clientHeight, scrollTop, scrollHeight } = pagesScrollerRef.current;
  };

  useEffect(() => {
    if (scrolling) return;
    let targetScrollTop = 0;
    for (let i = 0; i < page; i++) {
      targetScrollTop += pageRefList?.[i]?.current?.clientHeight;
    }
    gsap.to(pagesScrollerRef.current, {
      scrollTop: targetScrollTop,
      duration: 0.5,
      onStart: () => setScrolling(true),
      onComplete: () => setScrolling(false),
    });
  }, [page]);

  useEffect(() => {
    pagesScrollerRef.current.addEventListener("scroll", scrollHandler, {
      passive: false,
    });
    pagesScrollerRef.current.addEventListener("scrollend", scrollEndHandler, {
      passive: false,
    });
    return () => {
      pagesScrollerRef.current.removeEventListener("scroll", scrollHandler);
      pagesScrollerRef.current.removeEventListener(
        "scrollend",
        scrollEndHandler
      );
    };
  }, [page]);

  return (
    <PagesScrollerUI ref={pagesScrollerRef}>
      {children}
      {componentSrcList.map((Component, idx) => (
        <ComponentWrapperUI
          key={idx}
          ref={pageRefList[idx]}
          children={<Component isRender={true} />}
        />
      ))}
    </PagesScrollerUI>
  );
};

export default Scroller;
