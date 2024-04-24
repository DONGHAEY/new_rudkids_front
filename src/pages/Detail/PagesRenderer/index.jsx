import { createRef, useEffect, useRef } from "react";
import { ComponentWrapperUI, PagesRendererUI } from "./styles";
import gsap from "gsap";

const PagesRenderer = ({ componentSrcList, page, moveDuration = 2 }) => {
  const pagesScrollerRef = useRef(null);

  const pageRefList = new Array(componentSrcList.length + 1)
    .fill(null)
    .map(() => createRef());

  useEffect(() => {
    if (!pagesScrollerRef.current) return;

    const currentScrollTop = gsap.getProperty(
      pagesScrollerRef.current,
      "scrollTop"
    );

    gsap.fromTo(
      pagesScrollerRef.current,
      {
        scrollTop: currentScrollTop,
      },
      {
        scrollTop:
          (pagesScrollerRef.current.scrollHeight / componentSrcList.length) *
          page,
        duration: moveDuration,
        ease: "power3.inOut",
      }
    );
  }, [page, pagesScrollerRef.current]);

  return (
    <PagesRendererUI ref={pagesScrollerRef}>
      {componentSrcList.map((Component, idx) => (
        <ComponentWrapperUI
          key={idx}
          ref={pageRefList[idx]}
          children={<Component isRender={idx === page} />}
        />
      ))}
    </PagesRendererUI>
  );
};

export default PagesRenderer;
