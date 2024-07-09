import { useEffect, useMemo, useRef, useState } from "react";
import man from "./assets/man.webp";
import woman from "./assets/woman.webp";
import normal from "./assets/normal.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ScrollerUI } from "./styles";
import { NormalBarcordUI, StudentImgUI, WrapperUI } from "../styles";

const Students = () => {
  const scrollerRef = useRef();

  const d = 10;
  const [studentsLength, setStudentsLength] = useState(d);

  const scrollToEnd = () => {
    gsap.fromTo(
      scrollerRef.current,
      {
        scrollLeft: gsap.getProperty(scrollerRef.current, "scrollLeft"),
      },
      {
        scrollLeft:
          scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth,
        duration: d,
        ease: "none",
        onComplete: () => {
          console.log(scrollerRef.current.scrollWidth);
          console.log(scrollerRef.current.clientWidth);
          setStudentsLength(studentsLength + d);
        },
      }
    );
  };

  useEffect(() => {
    scrollToEnd();
  }, [studentsLength]);

  return (
    <ScrollerUI className="hidden_scrollbar" ref={scrollerRef}>
      {new Array(studentsLength).fill(null).map((_, idx) => {
        return <Student index={idx} scrollerRef={scrollerRef} />;
      })}
    </ScrollerUI>
  );
};

const Student = ({ index, scrollerRef }) => {
  const studentRef = useRef();
  const [barcord, setBarcord] = useState(false);
  const studentSrc = index % 2 === 0 ? man : woman;

  useEffect(() => {
    ScrollTrigger.create({
      scroller: scrollerRef.current,
      trigger: studentRef.current,
      start: "left left",
      end: "center left",
      horizontal: true,
      onEnter: () => {
        setBarcord(true);
      },
      onLeaveBack: () => {
        setBarcord(false);
      },
      onEnterBack: () => {
        setBarcord(true);
      },
    });
  }, []);

  return (
    <WrapperUI ref={studentRef}>
      {barcord && (
        <NormalBarcordUI
          src={normal}
          initial={{
            scale: 1.6,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "backInOut",
            },
          }}
        />
      )}
      <StudentImgUI src={studentSrc} />
    </WrapperUI>
  );
};

export default Students;
