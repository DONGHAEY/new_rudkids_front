import { createRef, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { ProductBox } from "./ProductBox";
import gsap from "gsap";

export const ListTest = () => {
  const itemList = [
    {
      id: 1,
      color: "#FFE818",
      name: "My Pet Fly",
      image: "/assets/Images/List/my_pet_fly.png",
    },
    {
      id: 2,
      color: "#FF3BA5",
      name: "A beautiful World",
      image: "/assets/Images/List/a_beautiful_world.png",
    },
    {
      id: 3,
      color: "#26A4FF",
      name: "!! Nothing",
      image: "/assets/Images/List/nothing.png",
    },
    {
      id: 4,
      color: "green",
      name: "shirt",
      image: "/assets/Images/List/shirt.png",
    },
  ].reverse();

  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [isRotate, setRotate] = useState(true);

  const itemListRef = useRef(null);
  const itemWrapperRefList = useMemo(() => {
    if (!itemList.length) return [];
    return new Array(itemList.length).fill(null).map((_) => createRef(null));
  }, [itemList]);

  const gap = 45;
  const getBoundaryY = (index) => {
    return {
      minY: gap * (lastItemIdx - index),
      maxY: itemListRef.current.clientHeight - gap * index - gap,
    };
  };

  const lastItemIdx = itemWrapperRefList.length - 1;
  const currentItemRef = itemWrapperRefList[currentItemIdx];

  const moveCurrentItem = (topValue) => {
    const { minY, maxY } = getBoundaryY(currentItemIdx);
    const currentTopValue = gsap.getProperty(currentItemRef.current, "y");
    let targetYValue = topValue + currentTopValue;
    setRotate(true);
    if (targetYValue <= minY) {
      if (currentItemIdx - 1 >= 0) {
        setCurrentItemIdx(currentItemIdx - 1);
      }
      targetYValue = minY;
    } else if (targetYValue >= maxY) {
      if (currentItemIdx + 1 <= lastItemIdx) {
        setCurrentItemIdx(currentItemIdx + 1);
      }
      targetYValue = maxY;
    } else {
      setRotate(false);
    }
    gsap.to(currentItemRef.current, {
      y: targetYValue,
    });
  };

  const focusItem = (targetItemIdx) => {
    let currnetItemIdxTemp = currentItemIdx;
    if (targetItemIdx <= currentItemIdx) {
      currnetItemIdxTemp++;
    }
    while (targetItemIdx > currnetItemIdxTemp) {
      let selectedRef = itemWrapperRefList[currnetItemIdxTemp];
      let { maxY } = getBoundaryY(currnetItemIdxTemp);
      gsap.to(selectedRef.current, {
        y: maxY,
      });
      currnetItemIdxTemp++;
    }
    while (targetItemIdx < currnetItemIdxTemp) {
      let selectedRef = itemWrapperRefList[currnetItemIdxTemp - 1];
      let { minY } = getBoundaryY(currnetItemIdxTemp - 1);
      gsap.to(selectedRef.current, {
        y: minY,
      });
      currnetItemIdxTemp--;
    }
    setRotate(false);
    setCurrentItemIdx(currnetItemIdxTemp);
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
        moveCurrentItem(100);
      } else {
        moveCurrentItem(-100);
      }
    }
    prevTouchEvent = currentTouchEvent;
  };
  const touchEndHandler = () => {
    prevTouchEvent = null;
  };

  const itemWrapperList = itemList?.map((productData, idx) => {
    const itemIdx = lastItemIdx - idx;
    const itemRef = itemWrapperRefList[itemIdx];
    const isRotated = itemIdx !== currentItemIdx || isRotate;
    const clickHandler = () => {
      focusItem(itemIdx);
    };
    return (
      <ItemWrapperUI
        onClick={clickHandler}
        key={itemIdx}
        ref={itemRef}
        children={
          <ProductBox
            name={productData?.name}
            color={productData?.color}
            image={productData?.image}
            isRotated={isRotated}
          />
        }
      />
    );
  });

  useEffect(() => {
    itemWrapperRefList.map((productBoxWrapperRef, itemIdx) => {
      gsap.to(productBoxWrapperRef.current, {
        y: getBoundaryY(itemIdx).minY,
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

  return (
    <TestWrapperUI>
      <LogoSectionUI>Rudkids</LogoSectionUI>
      <ItemListUI
        ref={itemListRef}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
        children={itemWrapperList}
      />
    </TestWrapperUI>
  );
};

/***********************         ****/

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
