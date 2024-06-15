import { useCallback, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import {
  CanvasUI,
  CanvasWrapperUI,
  CommingSoonImgUI,
  LeftUI,
  RightUI,
  SliderWrapperUI,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ToyIntroUI } from "../styles";
import img1 from "./assets/1.svg";
import blankImgSrc from "./assets/2.svg";
import { useGLTF } from "@react-three/drei";
import Scene from "./Scene";
import commingSoonSrc from "./assets/comming_soon.svg";

const contents = [
  {
    img: img1,
    glb: "/Models/my_pet_fly.glb",
  },
  null,
  null,
];

export const ToyIntroduce = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  //

  const [animPlaying, setAnimPlaying] = useState(true);
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gltfs = useGLTF(
    contents?.map((content) => {
      if (content?.glb) {
        return content.glb;
      } else {
        return "/Models/question_card.glb";
      }
    })
  );

  const isCommingSoon = useMemo(() => {
    if (contents?.[currentIndex]) {
      return false;
    }
    return true;
  }, [currentIndex]);

  const canvasProps = {
    gl: {
      antialias: true,
    },
    camera: {
      fov: 60,
      aspect: 1,
      near: 0.5,
      far: 100,
    },
  };

  return (
    <ToyIntroUI>
      <SliderWrapperUI>
        <Slider
          {...settings}
          ref={slickRef}
          beforeChange={(e, newIndex) => {
            setAnimPlaying(true);
            setCurrentIndex(newIndex);
          }}
        >
          {contents?.map((content) => {
            return <img src={content?.img ?? blankImgSrc} width="100%" />;
          })}
        </Slider>
      </SliderWrapperUI>
      {isCommingSoon && <CommingSoonImgUI src={commingSoonSrc} />}
      <CanvasWrapperUI onTouchMove={() => setAnimPlaying(false)}>
        <CanvasUI {...canvasProps}>
          <Scene gltf={gltfs[currentIndex]} isPlaying={animPlaying} />
        </CanvasUI>
      </CanvasWrapperUI>
      <LeftUI onClick={previous}>
        <Icon icon="mingcute:left-fill" />
      </LeftUI>
      <RightUI onClick={next}>
        <Icon icon="mingcute:right-fill" />
      </RightUI>
    </ToyIntroUI>
  );
};
