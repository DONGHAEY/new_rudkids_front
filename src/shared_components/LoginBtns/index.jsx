import {
  BtnListUI,
  NaverBtnUI,
  KakaoBtnUI,
  LoginBtnsUI,
  MessageUI,
  SignupBtnUI,
} from "./styles";
import kakaoSrc from "./assets/kakaotalk__.svg";
import naverSrc from "./assets/naver_.svg";
import FastStartSign from "./FastStartSign";
import { trackClickButton } from "../../shared_analytics";
import { setLoginCallbackUrl } from "../../pages/Login";

const LoginBtns = ({ callback = "/home", isShowSignup = true }) => {
  //
  const clickHandler = (providerName) => {
    trackClickButton("login", {
      provider: providerName,
    });
    setLoginCallbackUrl(callback);
    window.location.assign(
      `${process.env["REACT_APP_SERVER_URL"]}/api/auth/${providerName}`
    );
  };

  return (
    <LoginBtnsUI>
      <MessageUI>SNS 계정으로 로그인하기</MessageUI>
      <BtnListUI>
        <KakaoBtnUI
          border="rgba(207, 198, 13, 1)"
          onClick={() => clickHandler("kakao")}
        >
          <img src={kakaoSrc} width="20%" />
          <p>빠른 시작</p>
          <FastStartSign />
        </KakaoBtnUI>
        <NaverBtnUI onClick={() => clickHandler("naver")}>
          <img src={naverSrc} width="50%" />
        </NaverBtnUI>
      </BtnListUI>
      {isShowSignup && <SignupBtnUI>회원가입하기</SignupBtnUI>}
    </LoginBtnsUI>
  );
};

export default LoginBtns;
