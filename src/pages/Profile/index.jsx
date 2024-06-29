import Header from "../../shared_components/Header";
import { useParams } from "react-router-dom";
import {
  BottomBarUI,
  BoxSectionUI,
  DescriptTxtUI,
  FollowBtnUI,
  InviteBtnUI,
  CenterModalUI,
  LinksSectionUI,
  PageUI,
  SettingBtnUI,
  ShareBtnUI,
  TodayViewUI,
  TopSectionUI,
  UserImgUI,
  UserNickNameTxtUI,
  CollectionSectionUI,
  ProfileImgWrapperUI,
  CrownImgUI,
  RankTxtUI,
  MiddleSectionUI,
  LinksTxtUI,
} from "./styles";
import { BsHeartFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import Links from "./Links";
import { FiShare } from "react-icons/fi";
import InfoList from "./InfoList";
import FlipCard from "./FlipCard";
import useUserQuery from "../../queries/user/useUserQuery";
import { BiHeart } from "react-icons/bi";
import useFollowToggleMutation from "../../mutations/user/follow/useFollowToggleMutation";
import { useEffect, useState } from "react";
import useUpdateTodayViewMutation from "../../mutations/user/follow/useUpdateTodayView";
import Invite from "./Invite";
import CopyShare from "./CopyShare";
import { useBodyBackground } from "../../hooks/useBodyBackground";
// import Background from "../../shared_components/Background";
import crwonSrc from "./assets/crown.webp";
import { Icon } from "@iconify/react/dist/iconify.js";
import RudImage from "../../shared_components/RudImage";
import { Collection } from "./Collection";

export const ProfilePage = ({ routeInfo }) => {
  const params = useParams();
  const searchUserId = params[routeInfo.paramKeys[0]];
  const { data: userData } = useUserQuery(searchUserId);

  const followToggleMutation = useFollowToggleMutation();
  const updateTodayViewMutation = useUpdateTodayViewMutation();

  const [invitePopup, setInvitePopup] = useState(false);
  const [shareCopyPopup, setShareCopyPopup] = useState(false);
  //
  const isMyProfile = searchUserId ? false : true;

  const followBtnClickHandler = () => {
    followToggleMutation.mutateAsync(searchUserId);
  };

  const inviteBtnClickHandler = () => setInvitePopup(true);
  const shareBtnClickHandler = () => setShareCopyPopup(true);
  const onInviteCloseHandler = () => setInvitePopup(false);
  const onShareCloseHandler = () => setShareCopyPopup(false);

  const userProfilePageLink = `${window.location.host}/profile/${userData?.id}`;
  const hasCrown = userData?.rank <= 3;

  const rankSigns = ["st", "nd", "rd"];

  useEffect(() => {
    if (searchUserId) {
      updateTodayViewMutation.mutateAsync(searchUserId);
    }
  }, [searchUserId]);

  useBodyBackground("#0027F1");

  return (
    <PageUI>
      <Header />
      <br />
      <FlipCard cardImgSrc={userData?.cardImgUrl} isMe={isMyProfile} />
      <br />
      <BoxSectionUI>
        <ProfileImgWrapperUI>
          <CrownImgUI src={crwonSrc} opacity={hasCrown ? 1 : 0} />
          {hasCrown && (
            <RankTxtUI>
              <Icon icon="fa-solid:medal" /> {userData?.rank}
              {rankSigns[userData?.rank - 1]}
            </RankTxtUI>
          )}
          <RudImage ImgUI={UserImgUI} src={userData?.imageUrl} />
        </ProfileImgWrapperUI>
        <TopSectionUI>
          <TodayViewUI>
            <Icon icon="ph:eye-fill" />
            {userData?.view?.todayCnt}
          </TodayViewUI>
          {isMyProfile && (
            <SettingBtnUI to={"/profile/edit"} children={<IoSettings />} />
          )}
        </TopSectionUI>
        <UserNickNameTxtUI>{userData?.nickname}</UserNickNameTxtUI>
        <DescriptTxtUI>{userData?.introduce}</DescriptTxtUI>
        <MiddleSectionUI>
          <InfoList
            rank={userData?.rank}
            followerCnt={userData?.followerCnt}
            totalView={userData?.view?.totalCnt}
            isFollower={userData?.isFollower}
          />
          <LinksSectionUI>
            <LinksTxtUI>Links</LinksTxtUI>
            <Links links={userData?.links} />
          </LinksSectionUI>
          <CollectionSectionUI>
            <Collection userData={userData} />
          </CollectionSectionUI>
        </MiddleSectionUI>
        <BottomBarUI>
          {isMyProfile && (
            <InviteBtnUI onClick={inviteBtnClickHandler}>
              친구 초대하기
            </InviteBtnUI>
          )}
          {!isMyProfile && (
            <FollowBtnUI onClick={followBtnClickHandler}>
              {!userData?.isFollower ? (
                <BiHeart fontSize="30px" />
              ) : (
                <BsHeartFill fontSize="30px" />
              )}
              <p>{userData?.followerCnt}</p>
            </FollowBtnUI>
          )}
          <ShareBtnUI
            children={<FiShare fontSize="25px" />}
            onClick={shareBtnClickHandler}
          />
        </BottomBarUI>
      </BoxSectionUI>
      <CenterModalUI open={invitePopup} onClose={onInviteCloseHandler}>
        <Invite close={onInviteCloseHandler} />
      </CenterModalUI>
      <CenterModalUI open={shareCopyPopup}>
        <CopyShare
          copyLink={userProfilePageLink}
          onClose={onShareCloseHandler}
        />
      </CenterModalUI>
    </PageUI>
  );
};

export default ProfilePage;
