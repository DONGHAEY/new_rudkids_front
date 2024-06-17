import { useEffect, useRef, useState } from "react";
import LoadCircle from "./assets/loading_circle.png";
import { LoaderUI } from "./styles";
import gsap from "gsap";

const DefaultTimeLoader = ({
  message,
  color,
  loading,
  position = "fixed",
  minLoadSecond = 1,
}) => {
  const loaderRef = useRef();
  const loadCircle = useRef();
  const [timeS, setTimeS] = useState(0);
  const [show, setShow] = useState(true);

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

  useEffect(() => {
    gsap.set(loaderRef.current, {
      opacity: 1,
    });
    gsap.to(loadCircle.current, {
      rotateZ: "360deg",
      duration: 1,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeS(timeS + 1);
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, [timeS]);

  useEffect(() => {
    if (timeS >= minLoadSecond && !loading) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setShow(false);
        },
      });
    }
  }, [timeS, loading]);

  if (!show) return null;

  return (
    <LoaderUI ref={loaderRef} position={position}>
      <img ref={loadCircle} src={LoadCircle} height="150px" />
      <p style={{ color: color ?? "gray" }}>
        {message ?? messages[timeS % messages.length]}
      </p>
    </LoaderUI>
  );
};

export default DefaultTimeLoader;
