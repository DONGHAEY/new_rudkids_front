import { createRef, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { ProductBox } from "./ProductBox";
import { useWindowSize } from "../../../hooks/useWindowSize";
import gsap from "gsap";

export const ListTest = () => {
  const productList = [
    {
      color: "#FFE818",
      name: "My Pet Fly",
      image: "/assets/Images/List/my_pet_fly.png",
    },
    {
      color: "#FF3BA5",
      name: "A beautiful World",
      image: "/assets/Images/List/a_beautiful_world.png",
    },
    {
      color: "#26A4FF",
      name: "!! Nothing",
      image: "/assets/Images/List/nothing.png",
    },
    {
      color: "green",
      name: "shirt",
      image: "/assets/Images/List/shirt.png",
    },
  ];

  const gap = 45;
  const { height: windowHeight } = useWindowSize();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const productBoxWrapperRefList = new Array(productList.length)
    .fill(null)
    .map((_) => createRef(null));

  useEffect(() => {
    productBoxWrapperRefList.map((productBoxWrapperRef, idx) => {
      gsap.to(productBoxWrapperRef.current, {
        y: gap * idx,
        duration: 0,
      });
    });
  }, [productBoxWrapperRefList.length]);

  useEffect(() => {
    const eventPreventHandler = (e) => {
      e.preventDefault();
    };
    window.addEventListener("wheel", eventPreventHandler, {
      passive: false,
    });
    window.addEventListener("touchmove", eventPreventHandler, {
      passive: false,
    });
  }, []);

  const moveCurrent = (topValue) => {
    // if (selectedIdx > productList.length - 1) return;
    const movingDomRef =
      productBoxWrapperRefList[productList.length - selectedIdx - 1];
    if (movingDomRef) {
      const minYValue = gap * (productList.length - selectedIdx - 1);
      let maxYValue = windowHeight - 140;
      maxYValue -= gap * selectedIdx;
      const currentTopValue = gsap.getProperty(movingDomRef.current, "y");
      let targetYValue = topValue + currentTopValue;

      if (targetYValue <= minYValue) {
        if (selectedIdx - 1 >= 0) {
          setSelectedIdx(selectedIdx - 1);
        }
        targetYValue = minYValue;
      }
      if (targetYValue >= maxYValue) {
        if (selectedIdx + 1 < productList.length) {
          setSelectedIdx(selectedIdx + 1);
        }
        targetYValue = maxYValue;
      }
      gsap.to(movingDomRef.current, {
        y: targetYValue,
      });
    }
  };

  let prevTouchEvent = null;
  return (
    <TestWrapperUI>
      <div
        style={{
          backgroundColor: "none",
          paddingBlock: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        LOGO
      </div>
      <ProductBoxListUI
        onTouchStart={(currentTouchEvent) => {
          prevTouchEvent = currentTouchEvent;
        }}
        onTouchMove={(currentTouchEvent) => {
          if (prevTouchEvent) {
            const prevTouchPos = prevTouchEvent?.touches[0].screenY;
            const currentTouchPos = currentTouchEvent?.touches[0].screenY;
            if (prevTouchPos > currentTouchPos) {
              moveCurrent(250);
            } else {
              moveCurrent(-250);
            }
          }
          prevTouchEvent = currentTouchEvent;
        }}
        onTouchEnd={() => {
          prevTouchEvent = null;
        }}
      >
        {/* 휴대폰만됨 지금 */}
        {productList?.map((productData, idx) => {
          return (
            <ProductBoxWrapper key={idx} ref={productBoxWrapperRefList[idx]}>
              <ProductBox
                name={productData?.name}
                color={productData?.color}
                image={productData?.image}
                isRotated
              />
            </ProductBoxWrapper>
          );
        })}
      </ProductBoxListUI>
    </TestWrapperUI>
  );
};

const TestWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
`;

const ProductBoxListUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-bottom: hidden;
  display: flex;
  justify-content: center;
`;

const ProductBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
