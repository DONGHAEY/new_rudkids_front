import { useRef, useState } from "react";
import { PagesScrollUI } from "./styles";

const ScrollScene2D = ({ offset, setOffset }) => {
  const scrollRef = useRef();

  const scrollHandler = (e) => {
    const { clientHeight, scrollTop, scrollHeight } = scrollRef.current;
    console.log(scrollTop, scrollHeight - clientHeight);
    setOffset(scrollTop / (scrollHeight - clientHeight));
  };

  return (
    <PagesScrollUI onScroll={scrollHandler} ref={scrollRef}>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
            backgroundColor: "yellow",
          }}
        ></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        >
          <h1
            style={{
              position: "absolute",
              zIndex: 3,
            }}
          >
            이러너너너너너너넌너너너너넌
          </h1>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "green",
              position: "absolute",
              zIndex: -1,
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
            backgroundColor: "yellow",
          }}
        ></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </PagesScrollUI>
  );
};

export default ScrollScene2D;
