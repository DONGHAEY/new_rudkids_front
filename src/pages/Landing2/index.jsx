import Background from "../../shared_components/Background";
import Section1 from "./Section1";
import Section2 from "./Section2";
import GetInButton from "./GetInButton";
import { BottomFixed, BottomSpacerUI, PageUI } from "./styles";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Landing2Page = () => {
  const [progress, setProgress] = useState(0);
  const pageRef = useRef();
  const getInRef = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: pageRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (e) => {
        setProgress(e.progress);
      },
    });
  }, []);

  return (
    <PageUI ref={pageRef}>
      <Section1 />
      <Section2 />
      <Background position="fixed" isFooter={false} />
      <BottomSpacerUI />
      <BottomFixed>
        <GetInButton progress={progress * 100} ref={getInRef} />
      </BottomFixed>
    </PageUI>
  );
};

export default Landing2Page;
