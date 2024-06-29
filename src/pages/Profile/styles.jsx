import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: scroll;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const TopSectionUI = styled.div`
  display: flex;
  position: absolute;
  top: 3%;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  animation: bounceFadeIn 1s;
`;

export const BoxSectionUI = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-block: 23%;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const MiddleSectionUI = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 8.3%;
  margin-bottom: 8.3%;
`;

export const UserImgUI = styled.img`
  border-radius: 100%;
  object-fit: cover;
  width: 90%;
  aspect-ratio: 1/1;
  position: absolute;
  margin-top: 23%;
  z-index: 3;
`;

export const UserNickNameTxtUI = styled.p`
  font-size: 20px;
  margin-top: -2%;
  font-family: Poppins-Bold;
  letter-spacing: -0.88px;
  line-height: 100%;
  color: black;
  animation: bounceFadeIn 2s;
`;

export const DescriptTxtUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  line-height: 130%;
  height: auto;
  margin-top: 2.2%;
  text-align: center;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  animation: bounceFadeIn 2s;
`;

export const TodayViewUI = styled.div`
  display: flex;
  align-items: center;
  font-size: clamp(0rem, 4.3vw, 1.1rem);
  padding-inline: 5%;
  padding-block: 2%;
  font-family: Poppins-SemiBold;
  gap: 7px;
  line-height: 0%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
`;

export const SettingBtnUI = styled(Link)`
  padding: 2%;
  text-decoration: none;
  line-height: 0%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100%;
  font-size: clamp(0rem, 6vw, 1.2rem);
  color: #555555;
`;

export const LinksTxtUI = styled.p`
  margin-bottom: 5%;
  font-family: Poppins-SemiBold;
  font-size: clamp(0rem, 4.8vw, 1.2rem);
`;

export const LinksSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7%;
  overflow: hidden;
  background-color: white;
  border-radius: 12px;
  animation: bounceFadeIn 1s;
  margin-top: 8.3%;
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

export const CenterModalUI = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 430px;
  margin: 0 auto;
`;

export const CollectionSectionUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 8.3%;
  animation: bounceFadeIn 1s;
`;

export const ProfileImgWrapperUI = styled.div`
  position: absolute;
  top: -10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 3s;
  width: 27%;
`;

export const CrownImgUI = styled.img`
  width: 100%;
  z-index: 3;
  opacity: ${({ opacity }) => opacity ?? 0};
`;

export const RankTxtUI = styled.p`
  position: absolute;
  z-index: 4;
  background-color: #fff500;
  border-radius: 37px;
  padding-inline: 12.5%;
  padding-block: 8.5%;
  line-height: 0%;
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 4.3vw, 1.08rem);
  right: -33%;
  bottom: -3%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
