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

  const [height, setHeight] = useState(false);

  useEffect(() => {
    gsap.set(cardRef.current, {
      height,
    });
  }, [cardRef.current, height]);

  const loadHandler = () => {
    const frontCardHeight = frontRef.current.clientHeight;
    const backCardHeight = backRef.current.clientHeight;
    setHeight(
      frontCardHeight < backCardHeight ? backCardHeight : frontCardHeight
    );
  };

  return (
    <CardCameraUI
      onMouseDown={() => {
        setIsCardFlip(!isCardFlip);
      }}
    >
      <CardUI ref={cardRef}>
        <CardFrontUI ref={frontRef} src={frontImgSrc} onLoad={loadHandler} />
        <CardBackUI ref={backRef} src={backImgSrc} onLoad={loadHandler} />
      </CardUI>
    </CardCameraUI>
  );
};

export default FlipCard;
