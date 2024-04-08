import {
  BoxBackgroundUI,
  BoxBarUI,
  BoxButtonUI,
  BoxButtonWrapperUI,
  BoxContentImgUI,
  BoxContentUI,
  BoxTitleUI,
  BoxUI,
} from "./styles";
import grassImgSrc from "./assets/grass.png";

const ItemBox = ({ color, isRotated, name, imageSrc }) => {
  return (
    <BoxUI $isRotated={isRotated}>
      <BoxBarUI $backgroundColor={color ?? "#FFE818"}>
        <BoxTitleUI>{name}</BoxTitleUI>
        <BoxButtonWrapperUI>
          <BoxButtonUI $backgroundColor="#E01A22" />
          <BoxButtonUI $backgroundColor="#00A507" />
          <BoxButtonUI $backgroundColor="#2479FF" />
        </BoxButtonWrapperUI>
      </BoxBarUI>
      <BoxContentUI>
        <BoxContentImgUI src={imageSrc} />
        <BoxBackgroundUI src={grassImgSrc} />
      </BoxContentUI>
    </BoxUI>
  );
};

export default ItemBox;
