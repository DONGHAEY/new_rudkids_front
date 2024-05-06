import { createRef, useEffect, useState } from "react";
import { ListUI, BoxWrapperUI, NavigateButtonUI } from "./styles";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Box from "./Box";

const BoxList = ({ listData = [] }) => {
  const [currentMoveBoxIdx, setCurrentMoveBoxIdx] = useState(0);
  const [selectedBoxIdx, setSelectedBoxIdx] = useState(null);
  const [isRotate, setRotate] = useState(true);

  const navigate = useNavigate();

  const listRef = createRef(null);
  const boxRefList = new Array(listData?.length)
    .fill(null)
    .map((_) => createRef(null));

  const boxGap = 45;
  const moveSpeed = 100;
  const lastBoxIdx = boxRefList.length - 1;
  const currentBoxRef = boxRefList[currentMoveBoxIdx];

  useEffect(() => {
    boxRefList?.map((productBoxWrapperRef, boxIdx) => {
      const { minY } = getBoxBoundaryPosY(boxIdx);
      gsap.set(productBoxWrapperRef.current, {
        y: minY,
      });
    });
  }, [lastBoxIdx]);

  const getBoxPosY = (boxIdx) => {
    if (!boxList[boxIdx]) return undefined;
    return gsap.getProperty(boxRefList[boxIdx].current, "y");
  };

  const getBoxBoundaryPosY = (boxIdx) => {
    return {
      minY: boxGap * (lastBoxIdx - boxIdx),
      maxY: listRef.current.clientHeight - boxGap * boxIdx - boxGap,
    };
  };

  const moveCurrentBox = (topValue) => {
    const { minY, maxY } = getBoxBoundaryPosY(currentMoveBoxIdx);
    const currentTopValue = getBoxPosY(currentMoveBoxIdx);
    let targetYValue = topValue + currentTopValue;
    setRotate(true);
    if (targetYValue <= minY) {
      if (currentMoveBoxIdx - 1 >= 0) {
        setCurrentMoveBoxIdx(currentMoveBoxIdx - 1);
      }
      targetYValue = minY;
    } else if (targetYValue >= maxY) {
      if (currentMoveBoxIdx + 1 <= lastBoxIdx) {
        setCurrentMoveBoxIdx(currentMoveBoxIdx + 1);
      }
      targetYValue = maxY;
    } else {
      setRotate(false);
    }
    gsap.to(currentBoxRef.current, {
      y: targetYValue,
    });
  };

  const focusBox = (targetBoxIdx) => {
    let currentBoxIdxTemp = currentMoveBoxIdx;
    if (targetBoxIdx <= currentMoveBoxIdx) {
      currentBoxIdxTemp++;
    }
    while (targetBoxIdx > currentBoxIdxTemp) {
      let selectedRef = boxRefList[currentBoxIdxTemp];
      let { maxY } = getBoxBoundaryPosY(currentBoxIdxTemp);
      gsap.to(selectedRef.current, {
        y: maxY,
      });
      currentBoxIdxTemp++;
    }
    while (targetBoxIdx < currentBoxIdxTemp) {
      let selectedRef = boxRefList[currentBoxIdxTemp - 1];
      let { minY } = getBoxBoundaryPosY(currentBoxIdxTemp - 1);
      gsap.to(selectedRef.current, {
        y: minY,
      });
      currentBoxIdxTemp--;
    }
    setRotate(false);
    setCurrentMoveBoxIdx(currentBoxIdxTemp);
  };

  /** Drag Handler Logics */
  let prevTouchEvent = null;
  const touchStartHandler = (currentTouchEvent) => {
    prevTouchEvent = currentTouchEvent;
  };
  const touchMoveHandler = (currentTouchEvent) => {
    setSelectedBoxIdx(false);
    if (prevTouchEvent) {
      const prevTouchPos = prevTouchEvent?.touches[0].screenY;
      const currentTouchPos = currentTouchEvent?.touches[0].screenY;
      if (prevTouchPos > currentTouchPos) {
        moveCurrentBox(-1 * moveSpeed);
      } else {
        moveCurrentBox(moveSpeed);
      }
    }
    prevTouchEvent = currentTouchEvent;
  };
  const touchEndHandler = () => {
    prevTouchEvent = null;
  };
  /** Drag Handler Logics */

  const boxList = listData?.map((boxData, boxIdx) => {
    boxIdx = lastBoxIdx - boxIdx;

    const boxRef = boxRefList[boxIdx];
    const isRotated = boxIdx !== currentMoveBoxIdx || isRotate;
    const isButton = boxIdx === selectedBoxIdx;

    const clickHandler = () => {
      if (isButton) {
        navigateBtnClickHandler();
      } else {
        focusBox(boxIdx);
        setSelectedBoxIdx(boxIdx);
      }
    };

    const navigateBtnClickHandler = () => {
      navigate(`/product/${boxData.name}`);
    };

    return (
      <BoxWrapperUI onClick={clickHandler} key={boxIdx} ref={boxRef}>
        <Box
          name={boxData?.name}
          color={boxData?.color}
          imageSrc={boxData?.imageSrc}
          isRotated={isRotated}
        />
        {isButton && (
          <NavigateButtonUI>
            <span>{boxData.name}</span>
            <GoArrowRight />
          </NavigateButtonUI>
        )}
      </BoxWrapperUI>
    );
  });

  return (
    <ListUI
      ref={listRef}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      children={boxList}
    />
  );
};

export default BoxList;
