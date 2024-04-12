import styled from "styled-components";

export const ModalUI = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
`;

export const FriendGroupImgWrapperUI = styled.div`
  height: 90px;
`;

export const FriendGroupImgUI = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const ShareButtonUI = styled.div`
  height: 85%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
`;

export const AskSectionUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #575757;
  font-size: 15px;
  margin-top: 25px;
  font-family: Poppins-SemiBold;
  cursor: pointer;
`;

export const ProgressBarSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  position: relative;
`;

export const ProgressBarGoalImgUI = styled.img`
  position: absolute;
  right: 0;
  top: -10px;
  width: 55px;
`;

export const BoxTitleWrapperUI = styled.div`
  font-family: Poppins-SemiBold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PopinPUI = styled.p`
  font-family: Poppins-Bold;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize ?? "31px"};
  line-height: 120%;
`;

export const ArrowButtonUI = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -15px;
  border-radius: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BottomBoxUI = styled.div`
  background-color: rgba(255, 255, 255, 85%);
  width: 100%;
  max-height: 70%;
  top: 270px;
  padding-block: 40px;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendListUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-inline: 20px;
  padding-block: 20px;
  max-width: 300px;
  width: 75%;
  min-width: 220px;
  max-gap: 10px;
  gap: 5px;
  height: 70px;
  margin-top: 30px;
  background-color: #efefef;
  border-radius: 20px;
`;
