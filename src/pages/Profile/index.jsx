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
  LinksUI,
  PageUI,
  SectionNmTxtUI,
  SettingBtnUI,
  ShareBtnUI,
  TodayViewUI,
  TopSectionUI,
  UserImgUI,
  UserNickNameTxtUI,
} from "./styles";
import { BsHeartFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import Links from "./Links";
import { FiShare } from "react-icons/fi";
import InfoList from "./InfoList";
import FlipCard from "./FlipCard";
import useUserQuery from "../../queries/user/useUserQuery";
import { BiHeart } from "react-icons/bi";
import useFollowMutation from "../../mutations/user/follow/useFollowMutation";
import useUnFollowMutation from "../../mutations/user/follow/useUnFollowMutation";
import { useEffect, useState } from "react";
import useUpdateTodayViewMutation from "../../mutations/user/follow/useUpdateTodayView";
import eyeSrc from "./assets/eye.svg";
import Invite from "./Invite";
import CopyShare from "./CopyShare";

export const ProfilePage = ({ routeInfo }) => {
  const params = useParams();
  const searchUserId = params[routeInfo.paramKeys[0]];
  const { data: userData } = useUserQuery(searchUserId);

  const followMutation = useFollowMutation();
  const unFollowMutation = useUnFollowMutation();
  const updateTodayViewMutation = useUpdateTodayViewMutation();

  const [invitePopup, setInvitePopup] = useState(false);
  const [shareCopyPopup, setShareCopyPopup] = useState(false);
  //
  const isMyProfile = searchUserId ? false : true;

  const followBtnClickHandler = () => {
    if (userData?.isFollower) {
      unFollowMutation.mutateAsync(searchUserId);
    } else {
      followMutation.mutateAsync(searchUserId);
    }
  };

  const inviteBtnClickHandler = () => setInvitePopup(true);
  const shareBtnClickHandler = () => setShareCopyPopup(true);
  const onInviteCloseHandler = () => setShareCopyPopup(false);
  const onShareCloseHandler = () => setShareCopyPopup(false);

  const userProfilePageLink = `${window.location.host}/profile/${userData?.id}`;

  useEffect(() => {
    if (searchUserId) {
      updateTodayViewMutation.mutateAsync(searchUserId);
    }
  }, [searchUserId]);

  return (
    <PageUI>
      <Header />
      <br />
      <FlipCard cardImgSrc={userData?.cardImgUrl} isMe={isMyProfile} />
      <br />
      <BoxSectionUI>
        <UserImgUI src={userData?.imageUrl} />
        <TopSectionUI>
          <TodayViewUI>
            <img src={eyeSrc} height="17px" />
            {userData?.view?.todayCnt}
          </TodayViewUI>
          {isMyProfile && (
            <SettingBtnUI to={"/profile/edit"} children={<IoSettings />} />
          )}
        </TopSectionUI>
        <UserNickNameTxtUI>{userData?.nickname}</UserNickNameTxtUI>
        <DescriptTxtUI>{userData?.introduce}</DescriptTxtUI>
        <InfoList
          rank={userData?.rank}
          followerCnt={userData?.followerCnt}
          totalView={userData?.view?.totalCnt}
          isFollower={userData?.isFollower}
        />
        <LinksSectionUI>
          <LinksUI>
            <SectionNmTxtUI>Links</SectionNmTxtUI>
            <Links links={userData?.links} />
          </LinksUI>
        </LinksSectionUI>
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
