import styled from "styled-components";

export const PageUI = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(21, 35, 49, 1),
    rgba(0, 0, 0, 1)
  );
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: scroll;
  gap: 20px;
`;

export const TopImgUI = styled.img`
  width: 60px;
`;

export const TopSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleSectionUI = styled.div`
  display: flex;
  gap: 10px;
  height: 40%;
  flex-direction: column;
  align-items: center;
`;

export const InviterProfileImgUI = styled.img`
  width: 40%;
`;

export const InviterDescriptionUI = styled.p`
  font-family: Poppins-Medium;
  font-size: 13px;
`;

export const TitleUI = styled.h1`
  font-family: Poppins-Bold;
  font-size: 30px;
`;

export const EnterButtonUI = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 190px;
  padding-block: 20px;
  background-color: #06ff00;
  gap: 15px;
  color: black;
  font-size: 20px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-family: Poppins-SemiBold;
  z-index: 30;
`;

export const PageDescriptionUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Poppins-Bold;
  font-size: 20px;
  gap: 10px;
`;

export const BottomSectionUI = styled.div`
  width: 100%;
  height: 15%;
  max-width: 75%;
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const MoreUserTextUI = styled.p`
  width: 100%;
  textalign: right;
`;

export const UserBoxSliderUI = styled.div`
  width: 100%;
  background-color: rgba(238, 238, 238, 0.3);
  height: 80px;
  padding-block: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
`;

export const UserBoxUI = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 /1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

UserBoxUI.UserImgWrapperUI = styled.div`
  position: relative;
  height: 65%;
  aspect-ratio: 1/1;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

UserBoxUI.UserImgUI = styled.img`
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

UserBoxUI.UserNicknameUI = styled.p`
  font-size: 8px;
  font-family: Poppins-Medium;
`;
