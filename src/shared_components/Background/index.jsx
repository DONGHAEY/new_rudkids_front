import PublicBizAssets from "../../global/public-biz-assets";
import { BackgroundImgUI } from "./styles";

const Background = ({ backgroundSrc, zIndex = -1 }) => {
  return (
    <BackgroundImgUI
      zIndex={zIndex}
      src={backgroundSrc ?? PublicBizAssets.background}
    />
  );
};

export default Background;
