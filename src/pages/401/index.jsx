import {
  AskLinkUI,
  ButtonFixedUI,
  FuckImgUI,
  GetInButtonUI,
  LottieWrapperUI,
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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lottie from "react-lottie";
import congraturation from "./assets/congraturation.json";

let tl = null;
const _401Page = () => {
  const [getinClicked, setGetinClicked] = useState(false);
  const 머핀Ref = useRef();
  const fuckRef = useRef();

  useEffect(() => {
    tl = gsap.timeline();
    tl.to(머핀Ref.current, {
      transformOrigin: "center bottom",
      transform: "rotateZ(80deg)",
      duration: 0.5,
    }).to(
      fuckRef.current,
      {
        opacity: 1,
        duration: 0.5,
      },
      "<"
    );
    tl.pause();
  }, []);

  const getInClickHandler = () => {
    if (getinClicked) {
      setGetinClicked(false);
      tl.reverse();
    } else {
      setGetinClicked(true);
      tl.play();
    }
  };

  return (
    <PageUI>
      <TopTxtSectionUI>
        <Txt1UI>{!getinClicked ? "For You 🥳" : "Fuck You 🖕"}</Txt1UI>
        {!getinClicked ? (
          <Txt2UI>
            루키즈에 오신 것을
            <br />
            환영합니다!
          </Txt2UI>
        ) : (
          <Txt2UI>
            초대 받은 사람만
            <br />
            들어올 수 있어요
          </Txt2UI>
        )}
      </TopTxtSectionUI>
      {/*  */}
      <ButtonFixedUI>
        <WainterWrapperUI>
          <img src={waiterImgSrc} />
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
      <LottieWrapperUI>
        {!getinClicked && (
          <Lottie
            options={{
              animationData: congraturation,
              autoplay: true,
              loop: true,
            }}
          />
        )}
      </LottieWrapperUI>
    </PageUI>
  );
};

export default _401Page;
