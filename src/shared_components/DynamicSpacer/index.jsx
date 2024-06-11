import { memo, useEffect, useLayoutEffect, useState } from "react";
import { DynamicSpacerUI } from "./styles";

const DynamicSpacer = ({ ref }) => {
  const [spacerHeight, setSpacerHeight] = useState(0);

  function handleResize() {
    alert(ref?.current?.clientHeight);
    setSpacerHeight(ref?.current?.clientHeight);
  }

  useLayoutEffect(() => {
    if (!ref?.current) return;
    ref?.current?.addEventListener("resize", handleResize);
    return () => ref?.current?.removeEventListener("resize", handleResize);
  }, [ref?.current]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleResize();
  //   }, 1000);
  // }, [refCurrent]);

  return (
    <DynamicSpacerUI
      style={{
        marginTop: spacerHeight,
      }}
    />
  );
};

export default memo(DynamicSpacer);
