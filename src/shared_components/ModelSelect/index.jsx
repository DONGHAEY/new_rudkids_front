import RudImage from "../RudImage";
import {
  ModelSelectUI,
  NameTextUI,
  ProductComponentImgUI,
  ProductComponentImgWrapperUI,
  ModelUI,
} from "./styles";

const ModelSelect = ({ models, setSelectedIdx, selectedIdx }) => {
  return (
    <ModelSelectUI>
      {models?.map(({ name, imageUrl }, idx) => {
        return (
          <ModelUI key={idx}>
            <ProductComponentImgWrapperUI
              onClick={() => setSelectedIdx(idx)}
              $selected={idx === selectedIdx}
            >
              <RudImage ImgUI={ProductComponentImgUI} src={imageUrl} />
            </ProductComponentImgWrapperUI>
            <NameTextUI>{name}</NameTextUI>
          </ModelUI>
        );
      })}
    </ModelSelectUI>
  );
};

export default ModelSelect;
