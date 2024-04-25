import { useEffect, useRef, useState } from "react";
import { RiDragMoveFill } from "react-icons/ri";
import { GuideLabelUI } from "./styles";
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
          "-webkit-backdrop-filter": "blur(6px)",
          "backdrop-filter": "blur(6px)",
        },
        {
          "-webkit-backdrop-filter": "blur(1px)",
          "backdrop-filter": "blur(1px)",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
        }
      );
    } else {
      gsap.to(guideLabelRef.current, {
        opacity: 0,
        duration: 1.5,
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
      onClick={() => setOpen(false)}
    >
      <RiDragMoveFill fontSize={"50px"} />
      <p>You can drag here</p>
    </GuideLabelUI>
  );
};

export default GuideLabel;
