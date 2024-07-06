import { Icon } from "@iconify/react/dist/iconify.js";
import { MarqueeUI, TextScrollUI, TxtWrapperUI } from "./styles";

const TextScroll = () => {
  return (
    <TextScrollUI>
      <MarqueeUI direction="left">
        {new Array(30).fill(null).map((_, idx) => {
          return (
            <TxtWrapperUI>
              <p>Rud kids Get these cool stuff&nbsp;</p>
              <Icon icon="icon-park-solid:down-two" />
            </TxtWrapperUI>
          );
        })}
      </MarqueeUI>
    </TextScrollUI>
  );
};

export default TextScroll;
