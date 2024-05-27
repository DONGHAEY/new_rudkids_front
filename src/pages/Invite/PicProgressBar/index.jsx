import { PicProgressBarUI } from "./styles";
import addSrc from "./assets/add.svg";
import addedSrc from "./assets/added.svg";

const PicProgressBar = ({ cnt, total }) => {
  return (
    <PicProgressBarUI>
      {new Array(total).fill(null).map((_, idx) => {
        if (cnt <= idx) return <img src={addedSrc} />;
        return <img src={addSrc} />;
      })}
    </PicProgressBarUI>
  );
};

export default PicProgressBar;
