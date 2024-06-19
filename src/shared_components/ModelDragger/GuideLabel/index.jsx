import { useRef } from "react";
import { RiDragMoveFill } from "react-icons/ri";
import { GuideLabelUI, HandImgUI } from "./styles";
import handPicSrc from "./assets/hand.webp";

const GuideLabel = () => {
  const guideLabelRef = useRef(null);

  const guidLabelOff = () => {
    guideLabelRef.current.style.display = "none";
  };

  return (
    <GuideLabelUI
      ref={guideLabelRef}
      onTouchStart={guidLabelOff}
      onMouseDown={guidLabelOff}
    >
      <RiDragMoveFill fontSize={"50px"} />
      <p>You Can Drag Here!</p>
      <HandImgUI src={handPicSrc} />
    </GuideLabelUI>
  );
};

export default GuideLabel;
