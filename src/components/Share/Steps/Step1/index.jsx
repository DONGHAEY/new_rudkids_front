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
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import rudkidsAlbumSrc from "./assets/rudkids_album.webp";
import { getUser } from "../../../../apis/user/getUser";

const Step1 = ({ next, prev }) => {
  const loginBtnClickHandler = () => {
    localStorage.setItem("redirect_url", window.location);
    window.location.href = `${process.env.REACT_APP_SERVER_URL}/api/auth/instagram/login`;
  };

  useEffect(() => {
    (async () => {
      const userData = await getUser();
      console.log(userData);
      console.log("asdf=-1");
      if (userData?.id) {
        console.log("asdf=-2");
        next();
      }
    })();
  }, []);

  return (
    <Step1WrapperUI>
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
        <BoxButtonUI onClick={loginBtnClickHandler}>
          <FaInstagram fontSize={"20px"} /> Sign in with instagram
        </BoxButtonUI>
      </BoxMiddleUI>
      <BoxBottomUI>Rudkids</BoxBottomUI>
    </Step1WrapperUI>
  );
};

export default Step1;
