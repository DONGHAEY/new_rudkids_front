import styled from "styled-components";

export const SharedFriend = ({ isShared, idx }) => {
  return (
    <SharedFriendUI>
      <CircleImgWrapper>
        {!isShared ? (
          <CircleImgUI
            alt={"empty_friend.png"}
            src={"/assets/Images/shareComponent/empty_friend.png"}
          />
        ) : (
          <CircleImgUI
            alt={`${idx + 1}.png`}
            src={`/assets/Images/shareComponent/friends/${idx + 1}.png`}
          />
        )}
      </CircleImgWrapper>
      <ShareStatusTextUI isShared={isShared}>invited</ShareStatusTextUI>
    </SharedFriendUI>
  );
};

const SharedFriendUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  height: 100%;
`;

const ShareStatusTextUI = styled.p`
  font-size: 11.93px;
  gap: 2px;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  color: ${({ isShared }) => (isShared ? "black" : "#A6A6A6")};
`;

const CircleImgWrapper = styled.div`
  height: 85%;
`;

const CircleImgUI = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 100%;
`;
