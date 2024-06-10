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
import { useNavigate } from "react-router-dom";
import headSrc from "./assets/head.svg";
import joinUsSrc from "./assets/joinUs.svg";
import Background from "../../shared_components/Background";
import StorageKey from "../../storageKey";
import { useEffect } from "react";
import { getPassedStat } from "../RudGate";

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

export const setLoginCallbackUrl = (callbackUrl) => {
  localStorage.setItem(StorageKey.login_callback_url, callbackUrl);
};
export const removeLoginCallbackUrl = () => {
  localStorage.removeItem(StorageKey.login_callback_url);
};
export const getLoginCallbackUrl = () => {
  return localStorage.getItem(StorageKey.login_callback_url) ?? "/";
};

const LoginPage = () => {
  const navigate = useNavigate();
  const clickHandler = (platformName) => {
    const loginUrl = `${process.env.REACT_APP_SERVER_URL}/api/auth/${platformName}`;
    window.location.href = loginUrl;
  };

  useEffect(() => {
    const rudgatePassedStat = getPassedStat();
    if (!rudgatePassedStat) {
      //루드게이트 통과 전, 로그인 할 수 없음., 이미 회원가입한 사람인 경우에도 휴대폰을 바꿨을 경우 다시 통과해야함.
      navigate("/rud-gate");
    }
  }, []);

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
