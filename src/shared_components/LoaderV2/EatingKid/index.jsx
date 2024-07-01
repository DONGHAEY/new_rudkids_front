import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { EatingKidWrapperUI, KidUI } from "./styles";
import earth from "./assets/earth.webp";
import openKid from "./assets/open_kid.webp";
import closeKid from "./assets/close_kid.webp";

const earthCnt = 3;
const EatingKid = () => {
  const kidWrapperRef = useRef();
  const kidRef = useRef();

  const [mopen, setMopen] = useState(true);
  const [kidIdx, setCurridx] = useState(0);

  const a = 100 / (earthCnt + 1);

  useEffect(() => {
    if (kidIdx % 2 === 0) {
      setMopen(true);
    } else {
      setMopen(false);
    }
    const left = a * kidIdx;
    gsap.set(kidRef.current, {
      left: `${left - 2}%`,
    });
  }, [kidIdx]);

  useEffect(() => {
    console.log(kidIdx, "kidIdx");
    const timeout = setTimeout(() => {
      setCurridx((kidIdx + 1) % (earthCnt * 2));
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [kidIdx]);

  return (
    <EatingKidWrapperUI ref={kidWrapperRef}>
      {/*  */}
      <KidUI ref={kidRef} src={mopen ? openKid : closeKid} />
      {new Array(earthCnt).fill(null).map((_, earthIdx) => {
        if (earthIdx < kidIdx && kidIdx <= earthIdx + 2) {
          return <></>;
        }
        return (
          <img
            src={earth}
            style={{
              width: "8%",
              left: `${a * (earthIdx + 1)}%`,
              position: "absolute",
            }}
          />
        );
      })}
    </EatingKidWrapperUI>
  );
};

export default EatingKid;
