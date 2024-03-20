import { createRef, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { ProductBox } from "./ProductBox";
import { useWindowSize } from "../../../hooks/useWindowSize";
import gsap from "gsap";

export const ListTest = () => {
  const itemList = [
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
  const [stackedCount, setStackedCount] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const itemListRef = useRef(null);
  const itemWrapperRefList = useMemo(() => {
    if (!itemList.length) return [];
    return new Array(itemList.length).fill(null).map((_) => createRef(null));
  }, [itemList]);

  useEffect(() => {
    itemWrapperRefList.map((productBoxWrapperRef, idx) => {
      gsap.to(productBoxWrapperRef.current, {
        y: gap * idx,
        duration: 0,
      });
    });
  }, [itemWrapperRefList.length]);

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
    const movingDomRef = itemWrapperRefList[itemList.length - stackedCount - 1];
    console.log(itemListRef.current.clientHeight, "clientHeight");
    console.log(itemListRef.current.offsetHeight, "offsetHeight");
    if (movingDomRef) {
      const minYValue = gap * (itemList.length - stackedCount - 1);
      let maxYValue = itemListRef.current.clientHeight - gap;
      maxYValue -= gap * stackedCount;
      const currentTopValue = gsap.getProperty(movingDomRef.current, "y");
      let targetYValue = topValue + currentTopValue;
      setIsMoving(false);
      if (targetYValue <= minYValue) {
        if (stackedCount - 1 >= 0) {
          setStackedCount(stackedCount - 1);
        }
        targetYValue = minYValue;
      } else if (targetYValue >= maxYValue) {
        if (stackedCount + 1 < itemList.length) {
          setStackedCount(stackedCount + 1);
        }
        targetYValue = maxYValue;
      } else {
        setIsMoving(true);
      }
      gsap.to(movingDomRef.current, {
        y: targetYValue,
      });
    }
  };

  let prevTouchEvent = null;
  const touchStartHandler = (currentTouchEvent) => {
    prevTouchEvent = currentTouchEvent;
  };
  const touchMoveHandler = (currentTouchEvent) => {
    if (prevTouchEvent) {
      const prevTouchPos = prevTouchEvent?.touches[0].screenY;
      const currentTouchPos = currentTouchEvent?.touches[0].screenY;
      if (prevTouchPos > currentTouchPos) {
        moveCurrent(100);
      } else {
        moveCurrent(-100);
      }
    }
    prevTouchEvent = currentTouchEvent;
  };
  const touchEndHandler = () => {
    prevTouchEvent = null;
  };

  return (
    <TestWrapperUI>
      <LogoSectionUI>Rudkids</LogoSectionUI>
      <ItemListUI
        ref={itemListRef}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
      >
        {/* 휴대폰만됨 지금 */}
        {itemList?.map((productData, idx) => {
          return (
            <ItemWrapperUI key={idx} ref={itemWrapperRefList[idx]}>
              <ProductBox
                name={productData?.name}
                color={productData?.color}
                image={productData?.image}
                isRotated={
                  idx !== itemList.length - 1 - stackedCount || !isMoving
                }
              />
            </ItemWrapperUI>
          );
        })}
      </ItemListUI>
    </TestWrapperUI>
  );
};

const TestWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
`;

const ItemListUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-bottom: hidden;
  display: flex;
  justify-content: center;
`;

const LogoSectionUI = styled.div`
  background-color: none;
  padding-block: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const ItemWrapperUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
