import { createRef, useEffect, useRef, useState } from "react";
import { ComponentWrapperUI, PagesRendererUI } from "./styles";
import gsap from "gsap";
import { PagesScrollerUI } from "./ScrollDetector/styles";

const Scroller = ({
  componentSrcList,
  moveDuration = 2,
  setOffset,
  page,
  children,
}) => {
  const pagesScrollerRef = useRef();
  const pageRefList = new Array(componentSrcList.length + 1)
    .fill(null)
    .map(() => createRef());

  useEffect(() => {
    if (!pagesScrollerRef.current) return;
    const currentScrollTop = gsap.getProperty(
      pagesScrollerRef.current,
      "scrollTop"
    );
    let targetSceneScrollTop = 0;
    pageRefList.forEach((pageRef, idx) => {
      if (idx >= page) return;
      targetSceneScrollTop += pageRef.current?.scrollHeight;
    });
    gsap.fromTo(
      pagesScrollerRef.current,
      {
        scrollTop: currentScrollTop,
      },
      {
        scrollTop: targetSceneScrollTop,
        duration: moveDuration,
        // ease: "power3.inOut",
      }
    );
  }, [page, pagesScrollerRef.current]);

  const scrollHandler = (e) => {
    const { clientHeight, scrollTop, scrollHeight } = pagesScrollerRef.current;
    if (typeof setOffset === "function") {
      setOffset(scrollTop / (scrollHeight - clientHeight));
    }
  };

  return (
    <PagesScrollerUI ref={pagesScrollerRef} onScroll={scrollHandler}>
      <PagesRendererUI>
        {componentSrcList.map((Component, idx) => (
          <ComponentWrapperUI
            key={idx}
            ref={pageRefList[idx]}
            children={<Component isRender={idx === page} />}
          />
        ))}
      </PagesRendererUI>
      {children}
    </PagesScrollerUI>
  );
};

export default Scroller;
