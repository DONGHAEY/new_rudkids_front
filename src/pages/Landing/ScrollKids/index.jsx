import { ScrollUI } from "./styles";
import kid1 from "./assets/1.svg";
import kid2 from "./assets/2.svg";
import kid3 from "./assets/3.svg";
import kid4 from "./assets/4.svg";
import kid5 from "./assets/5.svg";
import kid6 from "./assets/6.svg";
import { createRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ScrollKids = () => {
  const kidsSrc = [kid1, kid2, kid3, kid4, kid5, kid6];

  const scrollRef = useRef();
  const kidRefList = new Array(kidsSrc?.length)
    .fill(null)
    .map((_, idx) => createRef());

  const [animatingIdxs, setAnimatingIdxs] = useState([]);

  const scrollHandler = (e) => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const offsetWidth = scrollRef.current.offsetWidth;
    const scrollStart = scrollLeft;
    const scrollEdge = scrollLeft + offsetWidth;
    let animateIdxs = [];
    kidRefList?.map((kidRef, idx) => {
      const kidMiddle =
        (kidRef?.current?.offsetLeft + kidRef?.current?.offsetWidth) / 2;
      if (kidMiddle >= scrollStart && kidMiddle <= scrollEdge) {
        animateIdxs.push(idx);
      }
    });
    setAnimatingIdxs(animateIdxs);
  };

  useEffect(() => {
    scrollHandler();
  }, []);

  useEffect(() => {
    animatingIdxs?.map((idx) => {
      const refCurrent = kidRefList[idx]?.current;
      gsap.fromTo(
        refCurrent,
        {
          transform: "rotateZ(-30deg)",
        },
        {
          transform: "rotateZ(30deg)",
          duration: 1,
          yoyo: true,
          repeat: -1,
        }
      );
    });
  }, [animatingIdxs]);

  return (
    <ScrollUI ref={scrollRef} onScroll={scrollHandler}>
      {kidsSrc?.map((kidSrc, idx) => {
        return (
          <img key={idx} src={kidSrc} height="80%" ref={kidRefList[idx]} />
        );
      })}
    </ScrollUI>
  );
};

export default ScrollKids;
