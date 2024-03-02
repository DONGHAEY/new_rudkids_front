import styled from "styled-components";
import { kakaoClipboard } from "react-kakao-share";

export const Share = () => {
  const clipData = {
    title: "Rudkids",
    description:
      "루키즈에서 재미있는 기분을 주는 미친 물건들을 만나보세요, 아주 즐거울거에요",
    image:
      "https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp",
    APIKEY: "89277aa3114d4374c718f792f03a60c2",
  };
  return (
    <ShareWrapperUI>
      <InvitedOnlyUI>
        Rudkids is
        <br />
        Invite Only
      </InvitedOnlyUI>
      <ShareButtonUI onClick={() => kakaoClipboard(clipData)}>
        🔗 Copy link
      </ShareButtonUI>
    </ShareWrapperUI>
  );
};

const ShareWrapperUI = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.2);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const ShareButtonUI = styled.button`
  background-color: #c3e6ff;
  color: black;
  font-size: 26px;
  width: 230px;
  height: 66px;
  border-radius: 10000px;
`;

const InvitedOnlyUI = styled.div`
  @font-face {
    font-family: "AppleGaramond-Light";
    src: url("/fonts/AppleGaramond/AppleGaramond-Light.ttf");
  }
  font-family: "AppleGaramond-Light";
  font-size: 41px;
`;
