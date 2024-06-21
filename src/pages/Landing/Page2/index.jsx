import "../fonts.css";

import {
  ArrowWrapperUI,
  ClothUI,
  Page2UI,
  FaceImgUI,
  ForMakersImgUI,
  LeftArrowImgUI,
  NameBoxUI,
  RightArrowImgUI,
  WearingSignUI,
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

import { useState } from "react";
import { GameBar } from "./GameBar";

const Page2 = () => {
  //
  const faces = [
    { img: face1Img, name: "Jim Morisson" },
    { img: face2Img, name: "curt cobain" },
    { img: face3Img, name: "avril lavigne" },
    { img: face4Img, name: "bjork" },
  ];

  const clothes = [t1Img, t2Img, t3Img, t4Img];
  const [currClothesIdx, setCurrClothesIdx] = useState(0);

  const [currIdx, setCurrIdx] = useState(0);

  const leftClkHandler = () => {
    if (currClothesIdx - 1 < 0) {
      setCurrIdx(clothes.length - 1);
      return;
    }
    setCurrClothesIdx((currClothesIdx - 1) % clothes.length);
  };
  const rightClkHandler = () => {
    setCurrClothesIdx((currClothesIdx + 1) % clothes.length);
  };

  return (
    <Page2UI>
      <ClothUI>
        <FaceImgUI src={faces[currIdx].img} />
        <img width="88%" src={clothes[currClothesIdx]} />
        <ForMakersImgUI src={forMakers} />
        <ArrowWrapperUI>
          <LeftArrowImgUI src={left} onClick={leftClkHandler} />
          <RightArrowImgUI src={right} onClick={rightClkHandler} />
        </ArrowWrapperUI>
      </ClothUI>
      <NameBoxUI>{faces[currIdx].name}</NameBoxUI>
      <WearingSignUI>Is now Wearing...</WearingSignUI>
      <GameBar
        onChange={() => {
          setCurrIdx((currIdx + 1) % faces.length);
        }}
      />
    </Page2UI>
  );
};

export default Page2;
