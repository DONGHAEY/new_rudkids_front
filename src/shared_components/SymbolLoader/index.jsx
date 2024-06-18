import { useEffect, useRef, useState } from "react";
import symbolSrc from "./assets/symbol.webp";
import { LoaderUI } from "./styles";
import gsap from "gsap";

const SymbolLoader = ({ loading, position = "fixed", minDelaySec = 1 }) => {
  const loaderRef = useRef();
  const [timeS, setTimeS] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    gsap.set(loaderRef.current, {
      opacity: 1,
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
    if (timeS >= minDelaySec && !loading) {
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
      <img src={symbolSrc} width="70%" />
    </LoaderUI>
  );
};

export default SymbolLoader;
