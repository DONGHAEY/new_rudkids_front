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

const Box = ({ color, isRotated, name, imageSrc, key }) => {
  return (
    <BoxUI $isRotated={isRotated} key={key}>
      <BoxBarUI $backgroundColor={color ?? "#FFE818"}>
        <BoxTitleUI>{name}</BoxTitleUI>
        <BoxButtonWrapperUI>
          <BoxButtonUI key={1} $backgroundColor="#E01A22" />
          <BoxButtonUI key={2} $backgroundColor="#00A507" />
          <BoxButtonUI key={3} $backgroundColor="#2479FF" />
        </BoxButtonWrapperUI>
      </BoxBarUI>
      <BoxContentUI>
        <BoxContentImgUI src={imageSrc} />
        <BoxBackgroundUI src={grassImgSrc} />
      </BoxContentUI>
    </BoxUI>
  );
};

export default Box;
