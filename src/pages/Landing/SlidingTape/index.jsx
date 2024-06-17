import Marquee from "react-fast-marquee";
import { TapeImgUI, TapeListUI, TapeTxtUI, TapeUI } from "./styles";
import bannerTape1Src from "./assets/1.png";
import bannerTape2Src from "./assets/2.png";

const SlidingTape = () => {
  const banenrImgs = [bannerTape1Src, bannerTape2Src];

  return (
    <Marquee>
      <TapeListUI>
        {banenrImgs?.map((bannerImg, idx) => {
          return (
            <TapeUI key={idx}>
              <TapeImgUI src={bannerImg} />
              <TapeTxtUI>Make Something Adults Say No</TapeTxtUI>
            </TapeUI>
          );
        })}
      </TapeListUI>
    </Marquee>
  );
};

export default SlidingTape;
