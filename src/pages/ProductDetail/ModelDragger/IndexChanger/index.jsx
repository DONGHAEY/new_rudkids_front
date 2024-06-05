import { IndexChangeBtnUI, IndexChangerUI } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const IndexChanger = ({ setIndex, index, maxIndex }) => {
  const next = () => {
    setIndex((index + 1) % (maxIndex + 1));
  };

  const prev = () => {
    if ((index - 1) % maxIndex < 0) {
      setIndex(maxIndex);
      return;
    }
    setIndex((index - 1) % (maxIndex + 1));
  };

  return (
    <IndexChangerUI>
      <IndexChangeBtnUI onClick={prev}>
        <Icon icon="mingcute:left-fill" />
      </IndexChangeBtnUI>
      <IndexChangeBtnUI onClick={next}>
        <Icon icon="mingcute:right-fill" />
      </IndexChangeBtnUI>
    </IndexChangerUI>
  );
};

export default IndexChanger;
