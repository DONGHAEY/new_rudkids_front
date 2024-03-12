import styled from "styled-components";
import { isMobile, isSafari } from "react-device-detect";

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

  const CheckedUI = (
    <img
      style={{ width: "12px", height: "12px", objectFit: "cover" }}
      src="/assets/Images/shareComponent/checked.png"
    />
  );

  return (
    <SharedProgressWrapperUI>
      {!isShared && (
        <img
          style={{ width: "95%", height: "95%", objectFit: "cover" }}
          onClick={share}
          alt={"add_friend.png"}
          src={"/assets/Images/shareComponent/add_friend.png"}
        />
      )}
      {isShared && (
        <img
          style={{
            width: "95%",
            height: "95%",
            objectFit: "cover",
            borderRadius: "100%",
          }}
          alt={`${idx + 1}.png`}
          src={`/assets/Images/shareComponent/friends/${idx + 1}.png`}
        ></img>
      )}
      <ShareStatusTextUI isShared={isShared}>
        {isShared ? (
          <>
            {CheckedUI}
            <p>invited</p>
          </>
        ) : (
          "Not invited"
        )}
      </ShareStatusTextUI>
    </SharedProgressWrapperUI>
  );
};

const SharedProgressWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 30%);
  gap: 5px;
  padding-block: 20px;
  padding-inline: 10px;
  border-radius: 10px;
  width: 50px;
  height: 50px;
`;

const ShareStatusTextUI = styled.p`
  font-size: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: ${({ isShared }) => (isShared ? "black" : "#DF0000")};
`;
