import { useEffect, useRef } from "react";
import letter1 from "./assets/letter1.webp";
import letter2 from "./assets/letter2.webp";
import {
  FromImgUI,
  FromNmTxtUI,
  LetterBackImgUI,
  LetterContentUI,
  LetterFrontImgUI,
  LetterUI,
} from "./styles";
import gsap from "gsap";
import RudImage from "../../../shared_components/RudImage";

const Letter = ({ fromImageUrl, fromName }) => {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      transform: "rotateZ(-6deg)",
      bottom: "40px",
      duration: 0.5,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <LetterUI>
      <LetterBackImgUI src={letter1} />
      <LetterContentUI ref={ref}>
        <RudImage ImgUI={FromImgUI} src={fromImageUrl} />
        <FromNmTxtUI>@{fromName}</FromNmTxtUI>
      </LetterContentUI>
      <LetterFrontImgUI src={letter2} />
    </LetterUI>
  );
};

export default Letter;
