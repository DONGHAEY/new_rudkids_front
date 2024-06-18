import Header from "../../shared_components/Header";
import { useNavigate, useParams } from "react-router-dom";
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
  CollectionUI,
  CollectionHeadUI,
  CollectionTitleUI,
  CollectionCntTxtUI,
  CollectionArrowUI,
  ProfileImgWrapperUI,
  CrownImgUI,
  RankTxtUI,
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
import eyeSrc from "./assets/eye.svg";
import Invite from "./Invite";
import CopyShare from "./CopyShare";
import { GoArrowUpRight } from "react-icons/go";
import useCollectionQuery from "../../queries/collection/userCollectionQuery";
import Loader from "../../shared_components/Loader";
import { useBodyBackground } from "../../hooks/useBodyBackground";
// import Background from "../../shared_components/Background";
import crwonSrc from "./assets/crown.webp";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ProfilePage = ({ routeInfo }) => {
  const params = useParams();
  const searchUserId = params[routeInfo.paramKeys[0]];
  const { data: userData, isLoading: userLoading } = useUserQuery(searchUserId);
  const { data: collectedProducts, isLoading: collectionLoading } =
    useCollectionQuery(userData?.id);

  const followToggleMutation = useFollowToggleMutation();
  const updateTodayViewMutation = useUpdateTodayViewMutation();

  const [invitePopup, setInvitePopup] = useState(false);
  const [shareCopyPopup, setShareCopyPopup] = useState(false);
  //
  const isMyProfile = searchUserId ? false : true;

  const followBtnClickHandler = () => {
    followToggleMutation.mutateAsync(searchUserId);
  };

  const navigate = useNavigate();

  const inviteBtnClickHandler = () => setInvitePopup(true);
  const shareBtnClickHandler = () => setShareCopyPopup(true);
  const onInviteCloseHandler = () => setInvitePopup(false);
  const onShareCloseHandler = () => setShareCopyPopup(false);

  const userProfilePageLink = `${window.location.host}/profile/${userData?.id}`;

  const rankSigns = ["st", "nd", "rd"];

  useEffect(() => {
    if (searchUserId) {
      updateTodayViewMutation.mutateAsync(searchUserId);
    }
  }, [searchUserId]);

  useBodyBackground("#1a94d9");

  if (userLoading || collectionLoading) {
    return <Loader />;
  }

  return (
    <PageUI>
      <Header />
      <br />
      <FlipCard cardImgSrc={userData?.cardImgUrl} isMe={isMyProfile} />
      <br />
      <BoxSectionUI>
        <ProfileImgWrapperUI>
          <CrownImgUI src={crwonSrc} opacity={userData?.rank <= 3 ? 1 : 0} />
          {userData?.rank <= 3 && (
            <RankTxtUI>
              <Icon icon="fa-solid:medal" /> {userData?.rank}
              {rankSigns[userData?.rank - 1]}
            </RankTxtUI>
          )}
          <UserImgUI src={userData?.imageUrl} />
        </ProfileImgWrapperUI>
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
        <CollectionUI
          onClick={() => {
            navigate(`/collection/${userData?.id}`);
          }}
        >
          <CollectionArrowUI>
            <GoArrowUpRight fontSize="25px" />
          </CollectionArrowUI>
          <CollectionHeadUI>
            <CollectionTitleUI>Collection</CollectionTitleUI>
            <CollectionCntTxtUI>
              {collectedProducts?.length ?? 0}
            </CollectionCntTxtUI>
          </CollectionHeadUI>
        </CollectionUI>
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
