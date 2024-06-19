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
  top: 15px;
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
  padding-block: 100px;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const UserImgUI = styled.img`
  border-radius: 100%;
  object-fit: cover;
  width: 90%;
  aspect-ratio: 1/1;
  position: absolute;
  margin-top: 25%;
  z-index: 3;
`;

export const UserNickNameTxtUI = styled.p`
  margin-top: -10px;
  font-size: 20px;
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
  line-height: 140%;
  height: auto;
  margin-top: 11px;
  text-align: center;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  animation: bounceFadeIn 2s;
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

export const SettingBtnUI = styled(Link)`
  padding: 9px;
  text-decoration: none;
  line-height: 0%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100%;
  font-size: 20px;
  color: #555555;
`;

export const LinksSectionUI = styled.div`
  margin-top: 30px;
  display: flex;
  width: 80%;
  background-color: white;
  border-radius: 12px;
  animation: bounceFadeIn 1s;
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

export const CenterModalUI = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 430px;
  margin: 0 auto;
`;

export const CollectionUI = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 15px;
  background: white;
  padding-block: 26px;
  border-radius: 12px;
  margin-top: 26px;
  animation: bounceFadeIn 1s;
`;
export const CollectionHeadUI = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  position: relative;
`;

export const CollectionTitleUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 20px;
  line-height: 100%;
`;
export const CollectionCntTxtUI = styled.p`
  background-color: #e9e9e9;
  color: black;
  padding: 5px;
  border-radius: 7px;
  font-family: Poppins-SemiBold;
  font-size: 16px;
  line-height: 100%;
  padding-block: 3px;
`;

export const CollectionArrowUI = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
`;

export const ProfileImgWrapperUI = styled.div`
  position: absolute;
  top: -10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 3s;
`;

export const CrownImgUI = styled.img`
  width: 100%;
  max-width: 113px;
  z-index: 3;
  opacity: ${({ opacity }) => opacity ?? 0};
`;

export const RankTxtUI = styled.p`
  position: absolute;
  z-index: 4;
  font-size: 13px;
  background-color: #fff500;
  border-radius: 37px;
  padding-inline: 15px;
  padding-block: 10px;
  line-height: 0%;
  font-family: Poppins-Bold;
  font-size: 16px;
  right: -38%;
  bottom: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
