import {
  JoinUsIconUI,
  LoginBtnImgUI,
  LoginBtnListUI,
  LoginBtnTxtUI,
  LoginBtnUI,
  LoginCommentArrowUI,
  LoginCommentTxtUI,
  LoginCommentUI,
  LoginUI,
  LoginWrapperUI,
  // TossTesterLoginUI,
} from "./styles";
import NaverSvg from "./assets/naver.svg";
import KakaoSvg from "./assets/kakao.svg";
import { PageUI } from "./styles";
import Lock from "../../shared_components/Lock";
import StepIndicator from "../../shared_components/StepIndicator";
import { setLoginCallbackUrl } from "../LoginCallback";
import { useSearchParams } from "react-router-dom";
import headSrc from "./assets/head.svg";
import joinUsSrc from "./assets/joinUs.svg";
// import useTossTesterLoginMutation from "../../mutations/auth/useTossTesterLoginMutation";
import Background from "../../shared_components/Background";

const platforms = [
  {
    how: "카카오톡으로",
    logoImgSrc: KakaoSvg,
    background: "linear-gradient(180deg, #fff279 0%, #f3da00 100%)",
    textColor: "black",
    name: "kakao",
  },
  {
    how: "네이버로",
    logoImgSrc: NaverSvg,
    background: "linear-gradient(180deg, #23F100 0%, #1DC900 100%)",
    textColor: "white",
    name: "naver",
  },
];

const LoginPage = () => {
  const [searchParams] = useSearchParams();

  const callback = searchParams.get("callback") ?? "/";

  const clickHandler = (platformName) => {
    setLoginCallbackUrl(callback);
    const loginUrl = `${process.env.REACT_APP_SERVER_URL}/api/auth/${platformName}`;
    window.location.href = loginUrl;
  };

  return (
    <PageUI>
      <Lock />
      <LoginWrapperUI>
        <img width={"100%"} src={headSrc} />
        <LoginUI>
          <LoginCommentUI>
            <LoginCommentTxtUI>3초만에 간편로그인</LoginCommentTxtUI>
            <LoginCommentArrowUI />
          </LoginCommentUI>
          <LoginBtnListUI>
            {platforms?.map((platform, idx) => (
              <LoginBtnUI
                key={idx}
                background={platform.background}
                onClick={() => clickHandler(platform.name)}
              >
                <LoginBtnImgUI src={platform.logoImgSrc} />
                <LoginBtnTxtUI color={platform.textColor}>
                  {platform.how} 계속하기
                </LoginBtnTxtUI>
              </LoginBtnUI>
            ))}
          </LoginBtnListUI>
        </LoginUI>
      </LoginWrapperUI>
      <StepIndicator totalStep={2} stepCnt={0} />
      <JoinUsIconUI src={joinUsSrc} />
      <Background />
    </PageUI>
  );
};

export default LoginPage;
