import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const ShareButton = ({ isShared, idx, onShared }) => {
  const weburl = "https://new-rudkids-front.vercel.app";

  const share = async () => {
    if (!isMobile) {
      alert("모바일로 접속해주세요!");
      onShared();
      return;
    }

    try {
      await window.navigator.share({
        title: "일상속의 작은 재미의 상점 - Rudkids",
        text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요!",
        url: weburl,
      });
      onShared();
    } catch (e) {}
  };

  return (
    <SharedProgressWrapperUI isShared={isShared}>
      {!isShared && (
        <img
          style={{ width: "95%" }}
          onClick={share}
          alt={"add_friend.png"}
          src={"/assets/images/shareComponent/add_friend.png"}
        />
      )}
      {isShared && (
        <img
          style={{ width: "95%", borderRadius: "100%" }}
          alt={`${idx + 1}.png`}
          src={`/assets/images/shareComponent/friends/${idx + 1}.png`}
        ></img>
      )}
      <p style={{ fontSize: "10px" }}>{isShared ? "invited" : "Not invited"}</p>
    </SharedProgressWrapperUI>
  );
};

const SharedProgressWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isShared }) =>
    !isShared
      ? "background-image: -webkit-linear-gradient(top, #fccb90 0%, #d57eeb 100%);"
      : "  background-color: rgba(255, 255, 255, 30%);"}
  gap: 5px;
  padding-block: 20px;
  padding-inline: 10px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
`;
