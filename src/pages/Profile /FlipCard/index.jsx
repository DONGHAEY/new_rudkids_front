import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CardBackUI, CardCameraUI, CardFrontUI, CardUI } from "./styles";

const FlipCard = ({ frontImgSrc, backImgSrc }) => {
  const cardRef = useRef();
  const frontRef = useRef();
  const backRef = useRef();

  const [isCardFlip, setIsCardFlip] = useState(false);

  useEffect(() => {
    if (isCardFlip) {
      gsap.to(cardRef.current, {
        transform: `rotateY(${180}deg)`,
        transformStyle: "preserve-3d",
        duration: 0.5,
      });
    } else {
      gsap.to(cardRef.current, {
        transform: `rotateY(${0}deg)`,
        transformStyle: "preserve-3d",
        duration: 0.5,
      });
    }
  }, [cardRef.current, isCardFlip]);

  useEffect(() => {
    const frontHeight = frontRef.current.clientHeight;
    const backHeight = backRef.current.clientHeight;
    gsap.set(cardRef.current, {
      height: frontHeight < backHeight ? backHeight : frontHeight,
    });
  }, [frontRef.current, backRef.current, cardRef.current]);

  return (
    <CardCameraUI
      onTouchStart={() => {
        setIsCardFlip(!isCardFlip);
      }}
      onMouseDown={() => {
        setIsCardFlip(!isCardFlip);
      }}
    >
      <CardUI ref={cardRef}>
        <CardFrontUI ref={frontRef} src={frontImgSrc} />
        <CardBackUI ref={backRef} src={backImgSrc} />
      </CardUI>
    </CardCameraUI>
  );
};

export default FlipCard;
