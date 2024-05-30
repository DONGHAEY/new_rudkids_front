import { useEffect, useState } from "react";
import { DynamicSpacerUI } from "./styles";
import { useWindowSize } from "../../hooks/useWindowSize";

const DynamicSpacer = ({ refCurrent }) => {
  const { height } = useWindowSize();
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    if (!refCurrent) return;
    setSpacerHeight(refCurrent.clientHeight);
  }, [height, refCurrent]);

  return (
    <DynamicSpacerUI
      style={{
        marginTop: spacerHeight,
      }}
    />
  );
};

export default DynamicSpacer;
