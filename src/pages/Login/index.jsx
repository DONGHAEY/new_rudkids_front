import {
  JoinUsIconUI,
  LoginBtnImgUI,
  LoginBtnListUI,
  LoginBtnTxtUI,
  LoginBtnUI,
  LoginCommentArrowUI,
  LoginCommentTxtUI,
  LoginCommentUI,
  LoginTxtUI,
  LoginUI,
  LoginWrapperUI,
} from "./styles";
import NaverSvg from "./assets/naver_.svg";
import KakaoSvg from "./assets/kakaotalk_.svg";
import { PageUI } from "./styles";
import StepIndicator from "../../shared_components/StepIndicator";
import joinUsSrc from "./assets/join_us.webp";
import Background from "../../shared_components/Background";
import StorageKey from "../../storageKey";
import { FixedPipVideo } from "../../shared_components/FixedPipVideo";
import videoSrc from "./assets/login.mp4";
import { trackClickButton } from "../../shared_analytics";

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
  // const navigate = useNavigate();

  const clickHandler = (provider) => {
    trackClickButton("login", {
      provider: provider,
    });
    const loginUrl = `${process.env.REACT_APP_SERVER_URL}/api/auth/${provider}`;
    window.location.href = loginUrl;
  };

  // useEffect(() => {
  //   const rudgatePassedStat = getPassedResult();
  //   if (!rudgatePassedStat) {
  //     //루드게이트 통과 전, 로그인 할 수 없음., 이미 회원가입한 사람인 경우에도 휴대폰을 바꿨을 경우 다시 통과해야함.
  //     navigate("/rud-gate", {
  //       replace: true,
  //     });
  //   }
  // }, []);

  const providers = [
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

  return (
    <PageUI>
      <FixedPipVideo videoSrc={videoSrc} />
      <LoginWrapperUI>
        <LoginUI>
          <LoginTxtUI>LOGIN</LoginTxtUI>
          <LoginCommentUI>
            <LoginCommentTxtUI>3초만에 간편로그인</LoginCommentTxtUI>
            <LoginCommentArrowUI />
          </LoginCommentUI>
          <LoginBtnListUI>
            {providers?.map((provider, idx) => (
              <LoginBtnUI
                key={idx}
                background={provider.background}
                onClick={() => clickHandler(provider.name)}
              >
                <LoginBtnImgUI src={provider.logoImgSrc} />
                <LoginBtnTxtUI color={provider.textColor}>
                  {provider.how} 계속하기
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
