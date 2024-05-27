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
import { BsEyeFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import Links from "./Links";
import { FiShare } from "react-icons/fi";
import InfoList from "./InfoList";
import FlipCard from "./FlipCard";
import cardUrl from "./assets/card.png";
import useUserQuery from "../../queries/user/useUserQuery";
import { BiHeart } from "react-icons/bi";

const url =
  "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/profile/john__16.33-instagram.png";

export const ProfilePage = ({ routeInfo }) => {
  const params = useParams();
  const nickname = params[routeInfo.paramKeys[0]];
  const { data: userData } = useUserQuery(nickname);

  const isMyProfile = nickname ? false : true;

  const navigate = useNavigate();

  const settingBtnClickHandler = () => {
    navigate("/profile/edit");
  };

  const followBtnClickHandler = () => {
    //
  };

  return (
    <PageUI>
      <Header />
      <br />
      <FlipCard frontImgSrc={cardUrl} backImgSrc={cardUrl} />
      <br />
      <BoxSectionUI>
        <UserImgUI src={userData?.imageUrl} />
        <TopSectionUI>
          <TodayViewUI>
            <BsEyeFill />
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
          rank={"1st"}
          followerCnt={userData?.followerCnt}
          totalView={userData?.view?.totalCnt}
          isFlower={true}
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
              <BiHeart fontSize="30px" />
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
