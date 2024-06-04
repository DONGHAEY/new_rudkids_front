import { useEffect, useRef, useState } from "react";
import LoadCircle from "./assets/Load.png";
import { LoaderUI } from "./styles";
import gsap from "gsap";

const Loader = ({ message, color, position = "fixed", delayMs = 0 }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  const messages = [
    "루키즈는 굴러가는중...",
    "다시한번 생각해봐",
    "그러므로 내일 일을 걱정하지 말아라.",
    "내일 일은 내일 걱정할 것이고,",
    "한 날의 괴로움은 그 날의 것으로 족할거야",
    "불의를 기뻐하지 않고 진리와 함께 기뻐하고",
    "모든것을 참으며",
    "모든것을 믿으며",
    "모든것을 바라며",
    "모든것을 견디느니라",
  ];

  const [messageIdx, setMessageIdx] = useState(0);

  useEffect(() => {
    if (!show) return;
    gsap.to(ref.current, {
      rotateZ: "360deg",
      repeat: -1,
      duration: 1,
    });
  }, [ref.current, show]);

  useEffect(() => {
    if (!show) return;
    const timeout = setTimeout(() => {
      setMessageIdx((messageIdx + 1) % messages.length);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [messageIdx, show]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delayMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [delayMs]);

  if (!show) return null;

  return (
    <LoaderUI position={position}>
      <img ref={ref} src={LoadCircle} height="150px" />
      <p style={{ color: color ?? "gray" }}>
        {message ?? messages[messageIdx]}
      </p>
    </LoaderUI>
  );
};

export default Loader;
