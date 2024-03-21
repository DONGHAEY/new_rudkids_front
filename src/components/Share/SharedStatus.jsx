import styled from "styled-components";

export const SharedStatus = ({ isShared, idx }) => {
  const NotSharedImg = (
    <CircleImgUI
      alt={"empty_friend.png"}
      src={"/assets/Images/share/SharedFriend/empty_friend.png"}
    />
  );
  const SharedImg = (
    <CircleImgUI
      alt={`${idx + 1}.png`}
      src={`/assets/Images/share/SharedFriend/friends/${idx + 1}.png`}
    />
  );

  return (
    <SharedStatusUI>
      <CircleImgWrapper children={!isShared ? NotSharedImg : SharedImg} />
      <ShareStatusTextUI isShared={isShared}>invited</ShareStatusTextUI>
    </SharedStatusUI>
  );
};

const SharedStatusUI = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  gap: 3px;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
`;

const ShareStatusTextUI = styled.p`
  font-size: 11.93px;
  gap: 2px;
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
