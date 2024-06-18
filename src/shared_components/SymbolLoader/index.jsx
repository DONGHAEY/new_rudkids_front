import { useEffect, useRef, useState } from "react";
import { LoaderUI } from "./styles";
import gsap from "gsap";
import PublicBizAssets from "../../global/public-biz-assets";
import { atom, useRecoilState } from "recoil";

const lastDurationAtom = atom({
  key: "symbol_loader_last_duration",
  default: 0,
});

let tl = null;
const SymbolLoader = ({ loading, position = "fixed" }) => {
  const [lastD, setLastD] = useRecoilState(lastDurationAtom);
  const loaderRef = useRef();
  const symbolRef = useRef();
  const [show, setShow] = useState(true);

  const tlCompleteHandler = () => {
    if (!loading) {
      tl.pause();
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        onComplete: () => {
          setShow(false);
        },
      });
    } else {
      tl.repeat(-1);
      tl.yoyo();
      tl.startTime(0);
    }
  };

  useEffect(() => {
    tl = gsap.timeline();
    tl.to(symbolRef.current, {
      scale: 1,
      duration: 0.5,
    })
      .to(symbolRef.current, {
        scale: 1.5,
        duration: 0.5,
        ease: "back.in",
      })
      .to(symbolRef.current, {
        scale: 1,
        duration: 0.5,
        onComplete: tlCompleteHandler,
      })
      .paused();
    if (loading) {
      tl.startTime(0);
    } else {
      tl.startTime(lastD);
    }
    return () => {
      setLastD(tl?.duration() ?? 0);
    };
  }, [loading]);

  if (!show) return null;

  return (
    <LoaderUI ref={loaderRef} position={position}>
      <img ref={symbolRef} src={PublicBizAssets.symbol} width="70%" />
    </LoaderUI>
  );
};

export default SymbolLoader;
