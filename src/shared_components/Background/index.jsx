import PublicBizAssets from "../../global/public-biz-assets";
import { BackgroundUI, BottomImgUI } from "./styles";

const Background = ({ zIndex = -1, position = "fixed" }) => {
  return (
    <BackgroundUI position={position} zIndex={zIndex}>
      {/* <BackgroundImgUI src={backgroundSrc ?? PublicBizAssets.background} /> */}
      {/* <BottomImgUI src={PublicBizAssets.bottom} /> */}
      <BottomImgUI src={PublicBizAssets.footer} />
    </BackgroundUI>
  );
};

export default Background;
