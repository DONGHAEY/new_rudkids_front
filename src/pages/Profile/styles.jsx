import styled from "styled-components";
import { exp } from "three/examples/jsm/nodes/Nodes.js";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: scroll;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(
    0deg,
    rgba(18, 150, 240, 1) 0%,
    rgba(189, 226, 251, 1) 100%
  );
`;

export const TopSectionUI = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const BoxSectionUI = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-block: 100px;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const UserImgUI = styled.img`
  border-radius: 100%;
  object-fit: cover;
  max-width: 133px;
  position: absolute;
  margin-inline: auto;
  top: -40px;
`;

export const UserNickNameTxtUI = styled.p`
  margin-top: 22px;
  font-size: 22px;
  font-family: Poppins-Bold;
  letter-spacing: -0.88px;
  line-height: 100%;
  color: black;
`;

export const DescriptTxtUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  line-height: 140%;
  height: auto;
  margin-top: 17px;
  text-align: center;
  font-family: Pretendard-SemiBold;
  /* overflow: scroll; */
  /* background-color: black; */
  font-size: 14px;
`;

export const TodayViewUI = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  padding-inline: 18px;
  font-family: Poppins-SemiBold;

  gap: 8.82px;
  line-height: 0%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
`;

export const SettingBtnUI = styled.div`
  padding: 9px;
  line-height: 0%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100%;
  font-size: 20px;
  color: #555555;
`;

export const LinksSectionUI = styled.div`
  margin-top: 30px;
  display: flex;
  width: 90%;
  max-width: 325.33px;
  background-color: white;
  border-radius: 12px;
`;

export const LinksUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 25px;
  padding-inline: 25px;
  gap: 10px;
  overflow: hidden;
`;

export const SectionNmTxtUI = styled.p`
  font-family: Poppins-SemiBold;
  line-height: 100%;
`;

export const BottomBarUI = styled.div`
  display: flex;
  position: fixed;
  width: 90%;
  bottom: 10px;
  margin: auto;
  max-width: 390px;
  gap: 8px;
`;

export const InviteBtnUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1d1d1d 0%, #2f2f2f 100%);
  color: white;
  padding-block: 20px;
  border-radius: 16px;
  font-size: 16px;
  font-family: Pretendard-Bold;
  border: none;
  width: 85%;
`;

export const FollowBtnUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: linear-gradient(180deg, #1d1d1d 0%, #2f2f2f 100%);
  color: white;
  padding-block: 20px;
  border-radius: 16px;
  font-family: Pretendard-Bold;
  border: none;
  width: 70%;
`;

export const ShareBtnUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  width: 70px;
  background-color: white;
  color: black;
  border-radius: 16px;
`;
