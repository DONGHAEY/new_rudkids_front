import "../fonts.css";
import { useScreenshot } from "use-react-screenshot";
import {
  ArrowWrapperUI,
  ClothSectionUI,
  Page2UI,
  FaceImgUI,
  ForMakersImgUI,
  LeftArrowImgUI,
  NameBoxUI,
  RightArrowImgUI,
  WearingSignUI,
  SectionUI,
  ClothImgUI,
} from "./styles";

import face1Img from "./assets/faces/1.webp";
import face2Img from "./assets/faces/2.webp";
import face3Img from "./assets/faces/3.webp";
import face4Img from "./assets/faces/4.webp";

import t1Img from "./assets/t-shirts/t1.webp";
import t2Img from "./assets/t-shirts/t2.webp";
import t3Img from "./assets/t-shirts/t3.webp";
import t4Img from "./assets/t-shirts/t4.webp";
import left from "./assets/buttons/left.webp";
import right from "./assets/buttons/right.webp";
import forMakers from "./assets/for_makers.webp";
import { useEffect, useRef, useState } from "react";
import { GameBar } from "./GameBar";
import { useWindowSize } from "../../../hooks/useWindowSize";
import ImgShareModal from "../../../shared_components/ImgShareModal";
import clickSnd from "./assets/click.mp3";
import * as htmlToImg from "html-to-image";

const Page2 = () => {
  //
  const windowSize = useWindowSize();
  const pageRef = useRef();

  const faces = [
    { img: face1Img, name: "Jim Morisson" },
    { img: face2Img, name: "curt cobain" },
    { img: face3Img, name: "avril lavigne" },
    { img: face4Img, name: "bjork" },
  ];

  const clothes = [t1Img, t2Img, t3Img, t4Img];
  const [currClothesIdx, setCurrClothesIdx] = useState(0);
  const [screenshot, takeScreenshot] = useScreenshot();
  const [dataUri, setDataUri] = useState("");
  const [currIdx, setCurrIdx] = useState(0);

  const clickAdo = new Audio(clickSnd);

  const leftClkHandler = () => {
    clickAdo.play();
    setCurrClothesIdx(
      currClothesIdx - 1 < 0 ? clothes.length - 1 : currClothesIdx - 1
    );
  };

  const rightClkHandler = () => {
    clickAdo.play();
    setCurrClothesIdx((currClothesIdx + 1) % clothes.length);
  };

  const takePageScreenShot = async () => {
    const dataUri = await htmlToImg.toPng(pageRef.current);
    setDataUri(dataUri);
  };

  return (
    <Page2UI
      ref={pageRef}
      style={{
        minHeight: "100vh",
        paddingTop: "20%",
      }}
    >
      <SectionUI>
        <ClothSectionUI>
          <ClothImgUI src={clothes[currClothesIdx]} />
          <FaceImgUI src={faces[currIdx].img} />
          <ForMakersImgUI src={forMakers} />
          <ArrowWrapperUI>
            <LeftArrowImgUI src={left} onClick={leftClkHandler} />
            <RightArrowImgUI src={right} onClick={rightClkHandler} />
          </ArrowWrapperUI>
        </ClothSectionUI>
      </SectionUI>
      <SectionUI>
        <NameBoxUI>{faces[currIdx].name}</NameBoxUI>
        <WearingSignUI>Is now Wearing...</WearingSignUI>
        <GameBar
          onChange={() => {
            setCurrIdx((currIdx + 1) % faces.length);
          }}
          onTake={takePageScreenShot}
        />
      </SectionUI>
      <ImgShareModal
        dataUri={dataUri}
        setDataUri={setDataUri}
        fileName="rud-clothes.png"
      />
    </Page2UI>
  );
};

export default Page2;
