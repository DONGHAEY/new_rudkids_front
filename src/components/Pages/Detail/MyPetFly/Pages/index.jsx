import { createRef, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { Page0 } from "./Page0";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import gsap from "gsap";

const componentSrcList = [Page0, Page1, Page2, Page3, Page4];

export const Pages = ({ page, maxPage, wrapperRef }) => {
  const pageRefList = new Array(maxPage + 1).fill(null).map(() => createRef());
  useEffect(() => {
    if (!wrapperRef.current) return;
    gsap.to(wrapperRef.current, {
      scrollTop:
        (wrapperRef.current.scrollHeight / componentSrcList.length) * page,
      duration: 2,
      ease: "power3.inOut",
    });
  }, [page, wrapperRef.current]);

  return componentSrcList.map((Component, idx) => {
    return (
      <ComponentWrapper
        key={idx}
        ref={pageRefList[idx]}
        children={<Component isRender={idx === page} />}
      />
    );
  });
};

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
