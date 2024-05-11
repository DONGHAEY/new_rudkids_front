import Header from "../../shared/Header";

import {
  ButtonSection,
  ButtonTxtUI,
  ButtonUI,
  CardBackUI,
  CardCameraUI,
  CardFrontUI,
  CardUI,
  FlexUI,
  InviteButtonSpacerUI,
  InviteButtonUI,
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
import { FaRankingStar } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import ProfileLink from "./ProfileLink";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RudkidCard from "./RudkidCard";

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
        <RudkidCard frontImgSrc={licenceCardSrc} backImgSrc={licenceCardSrc} />
      </FlexUI>
      <FlexUI gap="15px">
        <TextAreaUI
          type="text"
          placeholder="당신이 왜 루키즈인지 적어보세요!"
        />
        <LinkWrapperUI>
          <ProfileLink link="https://www.youtube.com/@president_yoon" />
          <ProfileLink link="https://www.instagram.com/sukyeol.yoon/" />
          <ProfileLink link="https://www.instagram.com/rudkidss/" />
          <ProfileLink link="https://twitter.com/President_KR" />
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
      <InviteButtonSpacerUI />
      <InviteButtonUI>친구초대하기</InviteButtonUI>
    </PageUI>
  );
};

export default ProfilePage;
