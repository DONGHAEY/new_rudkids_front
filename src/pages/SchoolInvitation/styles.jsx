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
`;

export const TopImgUI = styled.img`
  width: 60px;
`;

export const TopSectionUI = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const MiddleSectionUI = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const SchoolLogoUI = styled.img`
  width: 40%;
`;

export const SchoolDescriptionUI = styled.p`
  font-family: Poppins-Medium;
  font-size: 13px;
`;

export const SchoolNameUI = styled.h1`
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
`;

export const PageDescriptionUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 22px;
`;

export const BottomSectionUI = styled.div`
  width: 100%;
  max-width: 70%;
  margin-top: 25px;
  display: flex;
  width: 100%;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`;

export const UserBoxSliderUI = styled.div`
  width: 100%;
  background-color: rgba(238, 238, 238, 0.3);
  height: 80px;
  padding-block: 10px;
  border-radius: 16px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
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
