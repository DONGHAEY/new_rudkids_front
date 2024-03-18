import { createRef, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { Page0 } from "./Page0";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import gsap from "gsap";

const componentSrcList = [Page0, Page1, Page2, Page3, Page4];

export const Pages = ({ page, maxPage }) => {
  const pageRefList = new Array(maxPage + 1).fill(null).map(() => createRef());

  // useEffect(() => {
  //   gsap.to(pageListWrapperRef.current, {
  //     scrollTop:
  //       (pageListWrapperRef.current.scrollHeight / componentSrcList.length) *
  //       page,
  //     duration: 0.5,
  //     ease: "power3.inOut",
  //   });
  // }, [page, pageRefList]);

  return componentSrcList.map((Component, idx) => {
    // return <Component key={idx} />;
    return (
      <ComponentWrapper
        key={idx}
        ref={pageRefList[idx]}
        children={<Component />}
      />
    );
  });
};

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
