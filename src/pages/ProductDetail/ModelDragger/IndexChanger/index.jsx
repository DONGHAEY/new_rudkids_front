import { IndexChangeBtnUI, IndexChangerUI } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const IndexChanger = ({ setIndex, index, maxIndex }) => {
  const next = () => {
    setIndex((index + 1) % (maxIndex + 1));
  };

  const prev = () => {
    if (index === 0) {
      setIndex(maxIndex);
      return;
    }
    //
    setIndex(index - 1);
  };

  return (
    <IndexChangerUI>
      <IndexChangeBtnUI onClick={prev}>
        <Icon color="black" icon="mingcute:left-fill" />
      </IndexChangeBtnUI>
      <IndexChangeBtnUI onClick={next}>
        <Icon color="black" icon="mingcute:right-fill" />
      </IndexChangeBtnUI>
    </IndexChangerUI>
  );
};

export default IndexChanger;
