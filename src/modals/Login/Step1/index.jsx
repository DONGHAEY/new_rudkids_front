import {
  BoxBottomUI,
  BoxButtonUI,
  BoxMiddleUI,
  BoxTitleUI,
  BoxTitleWrapperUI,
  BoxTopUI,
  LogoImgUI,
  LogoWrapperUI,
  ModalUI,
} from "./styles";
import { FaInstagram } from "react-icons/fa";
import rudkidsAlbumSrc from "./assets/rudkids_album.webp";
import { useUserQuery } from "../../../queries/user";

const Step1 = ({ next, isRender }) => {
  const { data: userData } = useUserQuery();

  const LoginBtnClickHandler = () => {
    localStorage.setItem("redirect_url", window.location);
    window.location.href = `${process.env.REACT_APP_SERVER_URL}/api/auth/instagram/login`;
  };

  if (userData && isRender) {
    next();
    return null;
  }

  return (
    <ModalUI>
      <BoxTopUI>
        <img width="100%" src={rudkidsAlbumSrc} />
      </BoxTopUI>
      <BoxMiddleUI>
        <LogoWrapperUI>
          <LogoImgUI src="/Images/rudkids_logo.webp" />
        </LogoWrapperUI>
        <BoxTitleWrapperUI>
          <BoxTitleUI>Guys! Don't be</BoxTitleUI>
          <BoxTitleUI>so boring.</BoxTitleUI>
          <BoxTitleUI>Just Kidding.</BoxTitleUI>
        </BoxTitleWrapperUI>
        <BoxButtonUI onClick={LoginBtnClickHandler}>
          <FaInstagram fontSize={"20px"} /> Sign in with instagram
        </BoxButtonUI>
      </BoxMiddleUI>
      <BoxBottomUI>Rudkids</BoxBottomUI>
    </ModalUI>
  );
};

export default Step1;
