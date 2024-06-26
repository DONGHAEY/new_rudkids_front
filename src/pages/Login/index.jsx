import {
  SpacerUI,
  LoginBtnImgUI,
  LoginBtnListUI,
  LoginBtnTxtUI,
  LoginBtnUI,
  LoginTxtUI,
  LoginUI,
} from "./styles";
import NaverSvg from "./assets/naver_.svg";
import KakaoSvg from "./assets/kakaotalk_.svg";
import { PageUI } from "./styles";
import Background from "../../shared_components/Background";
import StorageKey from "../../storageKey";
import { trackClickButton } from "../../shared_analytics";
import RudWindow from "../../shared_components/RudWindow";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";
import { useSearchParams } from "react-router-dom";

export const setLoginCallbackUrl = (callbackUrl) => {
  localStorage.setItem(StorageKey.login_callback_url, callbackUrl);
};
export const removeLoginCallbackUrl = () => {
  localStorage.removeItem(StorageKey.login_callback_url);
};
export const getLoginCallbackUrl = () => {
  return localStorage.getItem(StorageKey.login_callback_url) ?? "/home";
};

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/home";

  const clickHandler = (providerName) => {
    trackClickButton("login", {
      provider: providerName,
    });
    setLoginCallbackUrl(callback);
    window.open(`${process.env.REACT_APP_SERVER_URL}/api/auth/${providerName}`);
  };

  const providers = [
    {
      how: "카카오톡으로",
      logoImgSrc: KakaoSvg,
      background: "rgba(245, 235, 16, 1)",
      border: "rgba(195, 186, 12, 1)",
      textColor: "black",
      name: "kakao",
    },
    {
      how: "네이버로",
      logoImgSrc: NaverSvg,
      background: "rgba(75, 182, 75, 1)",
      border: "rgba(55, 130, 53, 1)",
      textColor: "white",
      name: "naver",
    },
  ];

  return (
    <PageUI>
      <SpacerUI />
      <RudWindow>
        <LoginUI>
          <LoginTxtUI>Login</LoginTxtUI>
          <LoginBtnListUI>
            {providers?.map((provider, idx) => (
              <WindowButtonUI
                key={idx}
                background={provider.background}
                border={provider.border}
                onClick={() => clickHandler(provider.name)}
              >
                <LoginBtnUI>
                  <LoginBtnImgUI src={provider.logoImgSrc} />
                  <LoginBtnTxtUI color={provider.textColor}>
                    {provider.how} 계속하기
                  </LoginBtnTxtUI>
                </LoginBtnUI>
              </WindowButtonUI>
            ))}
          </LoginBtnListUI>
        </LoginUI>
      </RudWindow>
      <Background position={"absolute"} />
    </PageUI>
  );
};

export default LoginPage;
