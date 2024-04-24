import { createRef, useEffect, useState } from "react";
import { BoxListUI, BoxWrapperUI, NavigateButtonUI } from "./styles";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Box from "./Box";

const BoxList = ({ itemDataList }) => {
  const [currentMoveItemBoxIdx, setCurrentMoveItemBoxIdx] = useState(0);
  const [selectedItemBoxIdx, setSelectedItemBoxIdx] = useState(null);
  const [isRotate, setRotate] = useState(true);

  const navigate = useNavigate();

  const itemBoxListRef = createRef(null);
  const itemBoxRefList = new Array(itemDataList.length)
    .fill(null)
    .map((_) => createRef(null));

  const itemBoxgap = 45;
  const moveSpeed = 100;
  const lastItemIdx = itemBoxRefList.length - 1;
  const currentItemRef = itemBoxRefList[currentMoveItemBoxIdx];

  useEffect(() => {
    itemBoxRefList.map((productBoxWrapperRef, itemBoxIdx) => {
      const { minY } = getItemBoxBoundaryY(itemBoxIdx);
      gsap.set(productBoxWrapperRef.current, {
        y: minY,
      });
    });
  }, []);

  const getItemBoxPosY = (itemBoxIdx) => {
    if (!itemBoxList[itemBoxIdx]) return undefined;
    return gsap.getProperty(itemBoxRefList[itemBoxIdx].current, "y");
  };

  const getItemBoxBoundaryY = (itemBoxIdx) => {
    return {
      minY: itemBoxgap * (lastItemIdx - itemBoxIdx),
      maxY:
        itemBoxListRef.current.clientHeight -
        itemBoxgap * itemBoxIdx -
        itemBoxgap,
    };
  };

  const moveCurrentItem = (topValue) => {
    const { minY, maxY } = getItemBoxBoundaryY(currentMoveItemBoxIdx);
    const currentTopValue = getItemBoxPosY(currentMoveItemBoxIdx);
    let targetYValue = topValue + currentTopValue;
    setRotate(true);
    if (targetYValue <= minY) {
      if (currentMoveItemBoxIdx - 1 >= 0) {
        setCurrentMoveItemBoxIdx(currentMoveItemBoxIdx - 1);
      }
      targetYValue = minY;
    } else if (targetYValue >= maxY) {
      if (currentMoveItemBoxIdx + 1 <= lastItemIdx) {
        setCurrentMoveItemBoxIdx(currentMoveItemBoxIdx + 1);
      }
      targetYValue = maxY;
    } else {
      setRotate(false);
    }
    gsap.to(currentItemRef.current, {
      y: targetYValue,
    });
  };

  const focusItem = (targetItemBoxIdx) => {
    let currnetItemIdxTemp = currentMoveItemBoxIdx;
    if (targetItemBoxIdx <= currentMoveItemBoxIdx) {
      currnetItemIdxTemp++;
    }
    while (targetItemBoxIdx > currnetItemIdxTemp) {
      let selectedRef = itemBoxRefList[currnetItemIdxTemp];
      let { maxY } = getItemBoxBoundaryY(currnetItemIdxTemp);
      gsap.to(selectedRef.current, {
        y: maxY,
      });
      currnetItemIdxTemp++;
    }
    while (targetItemBoxIdx < currnetItemIdxTemp) {
      let selectedRef = itemBoxRefList[currnetItemIdxTemp - 1];
      let { minY } = getItemBoxBoundaryY(currnetItemIdxTemp - 1);
      gsap.to(selectedRef.current, {
        y: minY,
      });
      currnetItemIdxTemp--;
    }
    setRotate(false);
    setCurrentMoveItemBoxIdx(currnetItemIdxTemp);
  };

  /** Drag Handler Logics */
  let prevTouchEvent = null;
  const touchStartHandler = (currentTouchEvent) => {
    prevTouchEvent = currentTouchEvent;
  };
  const touchMoveHandler = (currentTouchEvent) => {
    setSelectedItemBoxIdx(false);
    if (prevTouchEvent) {
      const prevTouchPos = prevTouchEvent?.touches[0].screenY;
      const currentTouchPos = currentTouchEvent?.touches[0].screenY;
      if (prevTouchPos > currentTouchPos) {
        moveCurrentItem(-1 * moveSpeed);
      } else {
        moveCurrentItem(moveSpeed);
      }
    }
    prevTouchEvent = currentTouchEvent;
  };
  const touchEndHandler = () => {
    prevTouchEvent = null;
  };
  /** Drag Handler Logics */

  const itemBoxList = itemDataList?.map((itemData, itemIdx) => {
    itemIdx = lastItemIdx - itemIdx;

    const itemBoxRef = itemBoxRefList[itemIdx];
    const isRotated = itemIdx !== currentMoveItemBoxIdx || isRotate;
    const isButton = itemIdx === selectedItemBoxIdx;

    const clickHandler = () => {
      if (isButton) {
        navigateBtnClickHandler();
      } else {
        focusItem(itemIdx);
        setSelectedItemBoxIdx(itemIdx);
      }
    };

    const navigateBtnClickHandler = () => {
      navigate(`/detail/${itemData.id}`);
    };

    return (
      <BoxWrapperUI onClick={clickHandler} key={itemIdx} ref={itemBoxRef}>
        <Box
          name={itemData?.name}
          color={itemData?.color}
          imageSrc={itemData?.imageSrc}
          isRotated={isRotated}
        />
        {isButton && (
          <NavigateButtonUI onClick={navigateBtnClickHandler}>
            <span>{itemData.name}</span>
            <GoArrowRight />
          </NavigateButtonUI>
        )}
      </BoxWrapperUI>
    );
  });

  return (
    <BoxListUI
      ref={itemBoxListRef}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      children={itemBoxList}
    />
  );
};

export default BoxList;
