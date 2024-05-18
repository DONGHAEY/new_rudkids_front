import Header from "../../shared/Header";
import {
  ButtonSection,
  ButtonTxtUI,
  ButtonUI,
  FlexUI,
  InviteButtonSpacerUI,
  InviteButtonUI,
  PageUI,
  ViewCntTextUI,
  ViewIconBoxUI,
  ViewNameTextUI,
  ViewTextBoxUI,
  ViewWrapperUI,
} from "./styles";
import { TbEyeFilled } from "react-icons/tb";
import licenceCardSrc from "./assets/license_card.png";
import { FaRankingStar } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import FlipCard from "./FlipCard";
import Message from "./Message";
import Popup from "../../shared/Popup";
import Invitation from "./Invitation";
import { usePopup } from "../../hooks/usePopup";
import { useProfileQuery } from "../../queries/profile";
import { useParams } from "react-router-dom";

const ProfilePage = ({ routeInfo }) => {
  //
  const params = useParams();
  const profileId = routeInfo?.paramKeys?.[0]
    ? params[routeInfo.paramKeys[0]]
    : null;

  const { data: myProfileData } = useProfileQuery(profileId ?? null);
  //
  const [navigatePopup, closePopup] = usePopup();

  return (
    <PageUI>
      <Header isFixed={true} />
      <FlexUI>
        <ViewWrapperUI>
          <ViewIconBoxUI>
            <TbEyeFilled fontSize="20px" color="white" />
          </ViewIconBoxUI>
          <ViewTextBoxUI>
            <ViewNameTextUI>Today</ViewNameTextUI>
            <ViewCntTextUI>{myProfileData?.viewOfToday}</ViewCntTextUI>
          </ViewTextBoxUI>
          <ViewTextBoxUI>
            <ViewNameTextUI>All</ViewNameTextUI>
            <ViewCntTextUI>{myProfileData?.viewOfTotal}</ViewCntTextUI>
          </ViewTextBoxUI>
        </ViewWrapperUI>
      </FlexUI>
      <FlexUI>
        <FlipCard frontImgSrc={licenceCardSrc} backImgSrc={licenceCardSrc} />
      </FlexUI>
      <FlexUI gap="15px">
        <Message value={myProfileData?.description} />
        <SocialLinks value={myProfileData?.socialLinks} />
        <ButtonSection>
          <ButtonUI>
            <FaRankingStar fontSize="24px" />
            <ButtonTxtUI>프로필 랭킹</ButtonTxtUI>
          </ButtonUI>
          <ButtonUI>
            <FiShare fontSize="24px" />
            <ButtonTxtUI>내 프로필 공유하기</ButtonTxtUI>
          </ButtonUI>
        </ButtonSection>
      </FlexUI>
      <InviteButtonSpacerUI />
      <InviteButtonUI onClick={() => navigatePopup("create-invitation")}>
        친구초대하기
      </InviteButtonUI>
      <Popup popupName="create-invitation" showHeader={false}>
        <Invitation
          onShared={() => {
            closePopup();
          }}
        />
      </Popup>
    </PageUI>
  );
};

export default ProfilePage;
