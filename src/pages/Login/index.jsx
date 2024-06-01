import {
  LoginBtnImgUI,
  LoginBtnListUI,
  LoginBtnTxtUI,
  LoginBtnUI,
  LoginCommentArrowUI,
  LoginCommentTxtUI,
  LoginCommentUI,
  LoginUI,
  LoginWrapperUI,
  TitleTxtUI,
} from "./styles";
import NaverSvg from "./assets/naver.svg";
import KakaoSvg from "./assets/kakao.svg";
import { PageUI } from "./styles";
import Lock from "../../shared_components/Lock";
import StepIndicator from "../../shared_components/StepIndicator";
import { setLoginCallbackUrl } from "../LoginCallback";
import { useNavigate, useSearchParams } from "react-router-dom";

const platforms = [
  {
    how: "카카오톡으로",
    logoImgSrc: KakaoSvg,
    backgroundColor: "#F9E000",
    textColor: "black",
    name: "kakao",
  },
  {
    how: "네이버로",
    logoImgSrc: NaverSvg,
    backgroundColor: "#1CC000",
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
      <LoginWrapperUI>
        <Lock />
        <TitleTxtUI>Login</TitleTxtUI>
        <LoginUI>
          <LoginCommentUI>
            <LoginCommentTxtUI>3초만에 간편로그인</LoginCommentTxtUI>
            <LoginCommentArrowUI />
          </LoginCommentUI>
          <LoginBtnListUI>
            {platforms?.map((platform, idx) => (
              <LoginBtnUI
                key={idx}
                backgroundColor={platform.backgroundColor}
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
    </PageUI>
  );
};

export default LoginPage;
