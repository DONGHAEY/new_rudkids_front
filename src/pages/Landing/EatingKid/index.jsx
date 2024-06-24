import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { EatingKidWrapperUI, KidUI } from "./styles";
import earth from "./assets/earth.webp";
import openKid from "./assets/open_kid.webp";
import closeKid from "./assets/close_kid.webp";

const 지구개수 = 3;
const EatingKid = () => {
  const kidWrapperRef = useRef();
  const kidRef = useRef();

  const [mopen, setMopen] = useState(true);
  const [curridx, setCurridx] = useState(0);

  const a = 100 / (지구개수 + 1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: kidWrapperRef.current,
      scrub: 0.3,
      start: "-200% center",
      end: "+200% center",
      onUpdate: (e) => {
        let sectionSize = Math.floor(100 / (지구개수 * 2));
        const t = Math.floor((e.progress * 100) / sectionSize);
        if (t % 2 !== 0) {
          setMopen(true);
        } else {
          setMopen(false);
          setCurridx(Math.floor(t / 2));
        }
        const left = (a * t) / 2;
        gsap.set(kidRef.current, {
          left: `${left - 2}%`,
        });
      },
    });
  }, []);

  return (
    <EatingKidWrapperUI ref={kidWrapperRef}>
      {/*  */}
      <KidUI ref={kidRef} src={mopen ? openKid : closeKid} />
      {new Array(지구개수).fill(null).map((_, idx) => {
        return (
          <img
            src={earth}
            width={"8%"}
            style={{
              left: `${a * (idx + 1)}%`,
              position: "absolute",
              opacity: idx < curridx ? 0 : 1,
            }}
          />
        );
      })}
    </EatingKidWrapperUI>
  );
};

export default EatingKid;
