import { useNavigate, useParams } from "react-router-dom";
import Header from "../../shared_components/Header";
import {
  BottomBarUI,
  BoxSectionUI,
  DescriptTxtUI,
  FollowBtnUI,
  InviteBtnUI,
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
import cardFrontUrl from "./assets/licenseCard_F.png";
import cardBackUrl from "./assets/licenseCard_B.svg";
import useUserQuery from "../../queries/user/useUserQuery";
import { BiHeart } from "react-icons/bi";
import useFollowMutation from "../../mutations/user/follow/useFollowMutation";
import useUnFollowMutation from "../../mutations/user/follow/useUnFollowMutation";
import { useEffect } from "react";
import useUpdateTodayViewMutation from "../../mutations/user/follow/useUpdateTodayView";
import eyeSrc from "./assets/eye.svg";

export const ProfilePage = ({ routeInfo }) => {
  const params = useParams();
  const nickname = params[routeInfo.paramKeys[0]];
  const { data: userData } = useUserQuery(nickname);

  const followMutation = useFollowMutation();
  const unFollowMutation = useUnFollowMutation();
  const updateTodayViewMutation = useUpdateTodayViewMutation();
  //
  const isMyProfile = nickname ? false : true;

  const navigate = useNavigate();
  const settingBtnClickHandler = () => {
    navigate("/profile/edit");
  };
  const followBtnClickHandler = () => {
    if (userData?.isFollower) {
      unFollowMutation.mutateAsync(nickname);
    } else {
      followMutation.mutateAsync(nickname);
    }
  };

  useEffect(() => {
    if (nickname) {
      updateTodayViewMutation.mutateAsync(nickname);
    }
  }, [nickname]);

  console.log(userData);

  return (
    <PageUI>
      <Header />
      <br />
      <FlipCard frontImgSrc={userData?.cardImgUrl} backImgSrc={cardBackUrl} />
      <br />
      <BoxSectionUI>
        <UserImgUI src={userData?.imageUrl} />
        <TopSectionUI>
          <TodayViewUI>
            <img src={eyeSrc} height="17px" />
            {userData?.view?.todayCnt}
          </TodayViewUI>
          {isMyProfile && (
            <SettingBtnUI
              onClick={settingBtnClickHandler}
              children={<IoSettings />}
            />
          )}
        </TopSectionUI>
        <UserNickNameTxtUI>{nickname ?? userData?.nickname}</UserNickNameTxtUI>
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
          {isMyProfile && <InviteBtnUI>친구 초대하기</InviteBtnUI>}
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
          <ShareBtnUI>
            <FiShare fontSize="25px" />
          </ShareBtnUI>
        </BottomBarUI>
      </BoxSectionUI>
    </PageUI>
  );
};

export default ProfilePage;
