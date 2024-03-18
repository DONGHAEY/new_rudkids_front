import { Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "../../../Loader";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Scene } from "./Scene";
import { Pages } from "./Pages";
import styled from "styled-components";
import gsap from "gsap";

const maxPage = 4;
let scrolling;

export const MyPetFly = () => {
  const [page, setPage] = useState(0);
  const PagesScrollWrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("wheel", handler);
    return () => window.removeEventListener("wheel", handler);
  }, [window, page]);

  const handler = (e) => {
    e.preventDefault();
    if (!scrolling) {
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
      console.log("stop Scrolling");
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
        <Scene maxPage={maxPage} page={page} />
      </Canvas>
      <PagesScrollWrapperUI ref={PagesScrollWrapperRef}>
        <Pages
          page={page}
          maxPage={maxPage}
          wrapperRef={PagesScrollWrapperRef}
        />
      </PagesScrollWrapperUI>
    </DetailPageUI>
  );
};

const DetailPageUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const PagesScrollWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
