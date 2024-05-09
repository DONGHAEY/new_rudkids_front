import { useEffect, useRef, useState } from "react";
import { RiDragMoveFill } from "react-icons/ri";
import { GuideLabelUI, HandImgUI } from "./styles";
import handPicSrc from "./assets/hand.png";
import gsap from "gsap";

const GuideLabel = () => {
  const guideLabelRef = useRef(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!guideLabelRef.current) return null;
    if (open) {
      guideLabelRef.current.style.display = "flex";
      gsap.fromTo(
        guideLabelRef.current.style,
        {
          opacity: 1,
          "-webkit-backdrop-filter": "blur(3px)",
          "backdrop-filter": "blur(3px)",
        },
        {
          "-webkit-backdrop-filter": "blur(0.5px)",
          "backdrop-filter": "blur(0.5px)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        }
      );
    } else {
      gsap.to(guideLabelRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          guideLabelRef.current.style.display = "none";
        },
      });
    }
  }, [open, guideLabelRef.current]);

  return (
    <GuideLabelUI
      ref={guideLabelRef}
      onTouchStart={() => setOpen(false)}
      onMouseDown={() => setOpen(false)}
    >
      <RiDragMoveFill fontSize={"50px"} />
      <p>You Can Drag Here!</p>
      <HandImgUI src={handPicSrc} />
    </GuideLabelUI>
  );
};

export default GuideLabel;
