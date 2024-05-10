import Header from "../../shared/Header";

import {
  ButtonSection,
  ButtonTxtUI,
  ButtonUI,
  FlexUI,
  InviteButtonUI,
  LinkBoxUI,
  LinkNmTextUI,
  LinkWrapperUI,
  PageUI,
  TextAreaUI,
  ViewCntTextUI,
  ViewIconBoxUI,
  ViewNameTextUI,
  ViewTextBoxUI,
  ViewWrapperUI,
} from "./styles";
import { TbEyeFilled } from "react-icons/tb";
import licenceCardSrc from "./assets/license_card.png";
import { CgInstagram, CgLink, CgTwitter, CgYoutube } from "react-icons/cg";
import { FaRankingStar } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

const ProfilePage = ({}) => {
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
            <ViewCntTextUI>326</ViewCntTextUI>
          </ViewTextBoxUI>
          <ViewTextBoxUI>
            <ViewNameTextUI>All</ViewNameTextUI>
            <ViewCntTextUI>32,315</ViewCntTextUI>
          </ViewTextBoxUI>
        </ViewWrapperUI>
      </FlexUI>
      <FlexUI>
        <img src={licenceCardSrc} />
      </FlexUI>
      <FlexUI gap="15px">
        <TextAreaUI placeholder="당신이 왜 루키즈인지 적어보세요 카피" />
        <LinkWrapperUI>
          <LinkBoxUI>
            <CgInstagram />
            <LinkNmTextUI>rudkidss</LinkNmTextUI>
          </LinkBoxUI>
          <LinkBoxUI>
            <CgYoutube />
            <LinkNmTextUI>Rudkids 루키즈</LinkNmTextUI>
          </LinkBoxUI>
          <LinkBoxUI>
            <CgTwitter />
            <LinkNmTextUI>keroro18_</LinkNmTextUI>
          </LinkBoxUI>
          <LinkBoxUI>
            <CgLink />
            <LinkNmTextUI>www.brunch.com</LinkNmTextUI>
          </LinkBoxUI>
        </LinkWrapperUI>
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
      <InviteButtonUI>친구초대하기</InviteButtonUI>
    </PageUI>
  );
};

export default ProfilePage;
