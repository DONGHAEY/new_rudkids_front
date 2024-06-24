import PublicBizAssets from "../../global/public-biz-assets";
import { BackgroundImgUI, BackgroundUI, BottomImgUI } from "./styles";

const Background = ({ backgroundSrc, zIndex = -1, isFixed = true }) => {
  return (
    <BackgroundUI isFixed={isFixed} zIndex={zIndex}>
      <BackgroundImgUI src={backgroundSrc ?? PublicBizAssets.background} />
      <BottomImgUI src={PublicBizAssets.bottom} />
      <BottomImgUI src={PublicBizAssets.footer} />
    </BackgroundUI>
  );
};

export default Background;
