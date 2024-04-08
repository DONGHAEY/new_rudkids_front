import {
  ItemBoxListUI,
  ItemBoxWrapperUI,
  PageUI,
  LogoWrapperUI,
} from "./styles";
import { createRef, useEffect, useState } from "react";
import Share from "../../components/Share";
import ItemBox from "./ItemBox";
import itemDataList from "./itemDataList";
import gsap from "gsap";

const ListPage = () => {
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [isRotate, setRotate] = useState(true);
  const pageRef = createRef(null);
  const itemBoxListRef = createRef(null);
  const itemBoxRefList = new Array(itemDataList.length)
    .fill(null)
    .map((_) => createRef(null));

  const itemBoxgap = 45;
  const moveSpeed = 200;
  const lastItemIdx = itemBoxRefList.length - 1;
  const currentItemRef = itemBoxRefList[currentItemIdx];

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
    const { minY, maxY } = getItemBoxBoundaryY(currentItemIdx);
    const currentTopValue = getItemBoxPosY(currentItemIdx);
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

  const focusItem = (targetItemBoxIdx) => {
    let currnetItemIdxTemp = currentItemIdx;
    if (targetItemBoxIdx <= currentItemIdx) {
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
    setCurrentItemIdx(currnetItemIdxTemp);
  };

  /** Drag Handler Logics */
  let prevTouchEvent = null;
  const touchStartHandler = (currentTouchEvent) => {
    prevTouchEvent = currentTouchEvent;
  };
  const touchMoveHandler = (currentTouchEvent) => {
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
    const isRotated = itemIdx !== currentItemIdx || isRotate;
    const clickHandler = () => {
      focusItem(itemIdx);
    };

    return (
      <ItemBoxWrapperUI onClick={clickHandler} key={itemIdx} ref={itemBoxRef}>
        <ItemBox
          name={itemData?.name}
          color={itemData?.color}
          imageSrc={itemData?.imageSrc}
          isRotated={isRotated}
        />
      </ItemBoxWrapperUI>
    );
  });

  useEffect(() => {
    itemBoxRefList.map((productBoxWrapperRef, itemBoxIdx) => {
      const { minY } = getItemBoxBoundaryY(itemBoxIdx);
      gsap.set(productBoxWrapperRef.current, {
        y: minY,
      });
    });
  }, []);

  useEffect(() => {
    const eventPreventHandler = (e) => {
      e.preventDefault();
    };
    pageRef.current.addEventListener("wheel", eventPreventHandler, {
      passive: false,
    });
    pageRef.current.addEventListener("touchmove", eventPreventHandler, {
      passive: false,
    });
  }, []);

  return (
    <>
      <PageUI ref={pageRef}>
        <LogoWrapperUI>
          <img height="100%" src={"/Images/rudkids_logo.webp"} />
        </LogoWrapperUI>
        <ItemBoxListUI
          ref={itemBoxListRef}
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
          children={itemBoxList}
        />
      </PageUI>
      <Share />
    </>
  );
};

export default ListPage;
