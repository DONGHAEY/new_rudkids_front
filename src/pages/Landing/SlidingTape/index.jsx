import Marquee from "react-fast-marquee";
import { TapeListUI } from "./styles";
import bannerTapeSrc from "./assets/banner_tape.svg";

const SlidingTape = () => {
  return (
    <Marquee>
      <TapeListUI>
        <img height="100%" src={bannerTapeSrc} />
        <img height="100%" src={bannerTapeSrc} />
        <img height="100%" src={bannerTapeSrc} />
      </TapeListUI>
    </Marquee>
  );
};

export default SlidingTape;
