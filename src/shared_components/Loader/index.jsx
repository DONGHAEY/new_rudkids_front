import { useEffect, useRef, useState } from "react";
import LoadCircle from "./assets/Load.png";
import { LoaderUI } from "./styles";
import gsap from "gsap";

const Loader = ({ message, color }) => {
  const ref = useRef();

  const messages = [
    "루키즈는 굴러가는중...",
    "일론머스크는 루키즈를 인정할까 말까 고민중...",
    "다시한번 생각해봐",
    "이것도 못기다리면 pussy",
    "내일까지 안기다린다",
    "조금만 기달려봐",
    "뭔 개소리얔ㅋㅋ",
  ];

  const [messageIdx, setMessageIdx] = useState(0);

  useEffect(() => {
    gsap.to(ref.current, {
      rotateZ: "360deg",
      repeat: -1,
      duration: 1,
    });
  }, [ref.current]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageIdx((messageIdx + 1) % messages.length);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [messageIdx]);

  return (
    <LoaderUI>
      <img ref={ref} src={LoadCircle} height="150px" />
      <p style={{ color: color ?? "gray" }}>
        {message ?? messages[messageIdx]}
      </p>
    </LoaderUI>
  );
};

export default Loader;
