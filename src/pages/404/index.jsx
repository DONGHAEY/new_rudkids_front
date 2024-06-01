import {
  AskLinkUI,
  ButtonFixedUI,
  FuckImgUI,
  GetInButtonUI,
  PageUI,
  TopTxtSectionUI,
  Txt1UI,
  Txt2UI,
  WainterWrapperUI,
  머핀ImgUI,
} from "./styles";
import cakeImgSrc from "./assets/cake.svg";
import fuckSrc from "./assets/fuck.svg";
import waiterImgSrc from "./assets/waiter.svg";
import { useRef, useState } from "react";
import gsap from "gsap";

const _404Page = () => {
  const [getinClicked, setGetinClicked] = useState(false);
  const 머핀Ref = useRef();
  const fuckRef = useRef();

  const getInClickHandler = () => {
    const tl = gsap.timeline();
    tl.to(머핀Ref.current, {
      transformOrigin: "center bottom",
      transform: "rotateZ(80deg)",
      duration: 0.5,
    }).to(
      fuckRef.current,
      {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          setGetinClicked(true);
        },
      },
      "<"
    );
  };

  return (
    <PageUI>
      <TopTxtSectionUI>
        <Txt1UI>Welcome to Rudkids! 🥳</Txt1UI>
        <Txt2UI>
          루키즈에 오신 것을
          <br />
          환영합니다!
        </Txt2UI>
      </TopTxtSectionUI>
      {/*  */}
      <ButtonFixedUI>
        <WainterWrapperUI>
          <img src={waiterImgSrc} width="100%" />
          <머핀ImgUI ref={머핀Ref} src={cakeImgSrc} />
          <FuckImgUI ref={fuckRef} src={fuckSrc} />
        </WainterWrapperUI>
        <GetInButtonUI onClick={getInClickHandler}>Get in</GetInButtonUI>
        <AskLinkUI
          style={{
            opacity: getinClicked ? 1 : 0,
          }}
          to={"/login"}
        >
          이미 회원가입을 했나요?
        </AskLinkUI>
      </ButtonFixedUI>
      {/*  */}
    </PageUI>
  );
};

export default _404Page;
