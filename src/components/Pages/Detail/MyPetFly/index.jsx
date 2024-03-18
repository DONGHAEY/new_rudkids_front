import { Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "../../../Loader";
import {
  Suspense,
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Scene } from "./Scene";
import styled from "styled-components";
import gsap from "gsap";
import { Page0 } from "./Pages/Page0";
import { Page1 } from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";
import { Page3 } from "./Pages/Page3";
import { Page4 } from "./Pages/Page4";

const componentSrcList = [Page0, Page1, Page2, Page3, Page4];
const maxPage = componentSrcList.length - 1; //페이지가 0부터 시작하기 때문에 1을 빼주자...
let scrolling;

export const MyPetFly = () => {
  const [page, setPage] = useState(0);
  const scrollWrapperRef = useRef(null);
  const pageRefList = new Array(maxPage + 1).fill(null).map(() => createRef());

  useEffect(() => {
    if (!scrollWrapperRef.current) return;
    gsap.to(scrollWrapperRef.current, {
      scrollTop:
        (scrollWrapperRef.current.scrollHeight / componentSrcList.length) *
        page,
      duration: 2,
      ease: "power3.inOut",
    });
  }, [page, scrollWrapperRef.current]);

  const wheelHandler = (e) => {
    e.preventDefault();
    if (!scrolling) {
      //scrolling
      if (e.deltaY > 0) {
        if (page + 1 <= maxPage) {
          setPage((page) => page + 1);
        }
      } else {
        if (page - 1 >= 0) {
          setPage((page) => page - 1);
        }
      }
    }
    clearTimeout(scrolling);
    scrolling = setTimeout(() => {
      // stop Scrolling
      scrolling = undefined;
    }, 100);
  };

  let startTouchEvent = undefined;
  const touchStartHandler = (e) => {
    e.preventDefault();
    startTouchEvent = e;
  };

  const tocuhMoveHandler = (e) => {
    e.preventDefault();
    if (!scrolling) {
      if (startTouchEvent) {
        const st = startTouchEvent.touches?.[0]?.screenY;
        const ed = e.touches[0]?.screenY;
        if (st < ed) {
          if (page - 1 >= 0) {
            setPage((page) => page - 1);
          }
        } else {
          if (page + 1 <= maxPage) {
            setPage((page) => page + 1);
          }
        }
        console.log(startTouchEvent.screenY, e.touches[0]?.screenY);
      }
    }
    clearTimeout(scrolling);
    scrolling = setTimeout(() => {
      startTouchEvent = undefined;
      scrolling = undefined;
    }, 100);
  };

  return (
    <DetailPageUI>
      <Canvas
        style={{
          position: "absolute",
        }}
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.5,
          far: 100,
        }}
      >
        <Scene offset={page / maxPage} />
      </Canvas>
      <PagesScrollWrapperUI
        ref={scrollWrapperRef}
        onTouchStart={touchStartHandler}
        onTouchMove={tocuhMoveHandler}
        onWheel={wheelHandler}
        onScroll={(e) => alert("test")}
      >
        {componentSrcList.map((Component, idx) => (
          <ComponentWrapper
            key={idx}
            ref={pageRefList[idx]}
            children={<Component isRender={idx === page} />}
          />
        ))}
      </PagesScrollWrapperUI>
    </DetailPageUI>
  );
};

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DetailPageUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const PagesScrollWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
