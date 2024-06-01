import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import {
  CardBackUI,
  CardCameraUI,
  CardFrontUI,
  CardUI,
  NoInfoDimmedUI,
  NoInfoQuestionUI,
  RegisterBtnUI,
} from "./styles";
import cardDefaultImgSrc from "./assets/licenseCard_B.svg";

const FlipCard = ({ cardImgSrc, isMe }) => {
  const cardRef = useRef();

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

  return (
    <CardCameraUI
      onMouseDown={() => {
        if (!cardImgSrc) return;
        setIsCardFlip(!isCardFlip);
      }}
    >
      {!cardImgSrc && (
        <NoInfoDimmedUI>
          <NoInfoQuestionUI>?</NoInfoQuestionUI>
          {isMe && <RegisterBtnUI to="/create-rudcard">등록하기</RegisterBtnUI>}
        </NoInfoDimmedUI>
      )}
      <CardUI ref={cardRef}>
        <CardFrontUI>
          <img src={cardImgSrc || cardDefaultImgSrc} width={"100%"} />
        </CardFrontUI>
        <CardBackUI>
          <img src={cardDefaultImgSrc} />
        </CardBackUI>
        <img
          src={cardDefaultImgSrc}
          width={"100%"}
          style={{
            opacity: 0,
          }}
        />
      </CardUI>
    </CardCameraUI>
  );
};

export default FlipCard;
