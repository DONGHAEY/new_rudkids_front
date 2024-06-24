import EatingKid from "../EatingKid";
import title from "./assets/title.webp";
import buttons from "./assets/buttons.webp";
import footer from "./assets/footer.webp";
import insta from "./assets/insta.webp";
import phone from "./assets/phone.webp";
import getIn from "../assets/get_in.webp";

import {
  BottomImgUI,
  ButtonsWrapperUI,
  FlipBackImgUI,
  FlipFrontImgUI,
  FlipWrapperUI,
  GetInButtonUI,
  InstaImgUI,
  PageUI,
  TitleImgUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Page3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".getin",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        duration: 0.7,
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  const flipRef = useRef();
  const [isFlip, setIsFlip] = useState(false);

  useEffect(() => {
    if (isFlip) {
      gsap.to(flipRef.current, {
        transform: `rotateY(${180}deg)`,
        transformStyle: "preserve-3d",
        duration: 0.5,
      });
    } else {
      gsap.to(flipRef.current, {
        transform: `rotateY(${0}deg)`,
        transformStyle: "preserve-3d",
        duration: 0.5,
      });
    }
  }, [isFlip]);

  return (
    <PageUI className="page3">
      <TitleImgUI src={title} />
      <EatingKid />
      <ButtonsWrapperUI>
        <InstaImgUI
          src={insta}
          onClick={() => {
            window.location.href = "https://www.instagram.com/rudkidss";
          }}
        />
        <FlipWrapperUI onClick={() => setIsFlip(!isFlip)}>
          <div ref={flipRef}>
            <FlipFrontImgUI src={buttons} />
            <FlipBackImgUI src={buttons} />
          </div>
        </FlipWrapperUI>
        <img src={phone} width="27%" />
      </ButtonsWrapperUI>
      <GetInButtonUI
        className="getin"
        src={getIn}
        onClick={() => {
          navigate("/login");
        }}
      />
      <BottomImgUI src={footer} />
    </PageUI>
  );
};

export default Page3;
