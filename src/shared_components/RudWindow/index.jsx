import { Icon } from "@iconify/react/dist/iconify.js";
import PublicBizAssets from "../../global/public-biz-assets";
import {
  CloseBtnUI,
  ContentsUI,
  HeadSymbolUI,
  HeadUI,
  RudAddressTxtUI,
  RudWndowUI,
  WindowBorderUI,
} from "./styles";

const RudWindow = ({ width = "80%", children }) => {
  return (
    <RudWndowUI width={width}>
      <HeadUI>
        <HeadSymbolUI src={PublicBizAssets.symbol} />
        <RudAddressTxtUI>www.rud.kids</RudAddressTxtUI>
        <CloseBtnUI>
          <Icon icon="material-symbols:close" />
        </CloseBtnUI>
      </HeadUI>
      <ContentsUI>{children}</ContentsUI>
    </RudWndowUI>
  );
};

export default RudWindow;
