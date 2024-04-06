import {
  BoxBottomUI,
  BoxButtonUI,
  BoxMiddleUI,
  BoxTitleUI,
  BoxTitleWrapperUI,
  BoxTopUI,
  LogoImgUI,
  LogoWrapperUI,
  Step1WrapperUI,
} from "./styles";
import { FaInstagram } from "react-icons/fa";
import rudkidsAlbumSrc from "./assets/rudkids_album.webp";
import rudkidsLogoSrc from "./assets/rudkids_logo.webp";

const Step1 = ({ next, prev }) => {
  return (
    <Step1WrapperUI>
      <BoxTopUI>
        <img width="100%" src={rudkidsAlbumSrc} />
      </BoxTopUI>
      <BoxMiddleUI>
        <LogoWrapperUI>
          <LogoImgUI src={rudkidsLogoSrc} />
        </LogoWrapperUI>
        <BoxTitleWrapperUI>
          <BoxTitleUI>Guys! Don't be</BoxTitleUI>
          <BoxTitleUI>so boring.</BoxTitleUI>
          <BoxTitleUI>Just Kidding.</BoxTitleUI>
        </BoxTitleWrapperUI>
        <BoxButtonUI onClick={next}>
          <FaInstagram fontSize={"20px"} /> Sign in with instagram
        </BoxButtonUI>
      </BoxMiddleUI>
      <BoxBottomUI>Rudkids</BoxBottomUI>
    </Step1WrapperUI>
  );
};

export default Step1;
