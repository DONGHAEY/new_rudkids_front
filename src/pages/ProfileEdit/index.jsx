import Popup, { Content } from "../../shared_components/Popup";
import {
  CardEmptyBtnUI,
  CardImgUI,
  CardWrapperUI,
  ColumnContentTxtUI,
  ColumnNmTxtUI,
  ColumnUI,
  ListUI,
  PageUI,
} from "./styles";
import cardSrc from "./assets/card.png";
import { BiRightArrow } from "react-icons/bi";
import { usePopup } from "../../hooks/usePopup";
import BioEdit from "./BioEdit";
import LinksEdit from "./LinksEdit";
import useUserQuery from "../../queries/user/useUserQuery";
import NicknameEdit from "./NicknameEdit";
import RudcardAdd from "./RudcardAdd";
import { Modal } from "@mui/material";

const ProfileEditPage = () => {
  const [navigatePopup] = usePopup();

  const { data: userData } = useUserQuery();

  return (
    <Content popupTitle="프로필 수정" showHeader={true}>
      <PageUI>
        <CardWrapperUI>
          <CardImgUI src={cardSrc} />
          <CardEmptyBtnUI
            onClick={() => {
              navigatePopup("Rudcard Add");
            }}
          >
            회원증정보 입력하기
          </CardEmptyBtnUI>
        </CardWrapperUI>
        <ListUI>
          <ColumnUI
            onClick={() => {
              navigatePopup("Nickname Edit");
            }}
          >
            <ColumnNmTxtUI>Nickname</ColumnNmTxtUI>
            <ColumnContentTxtUI>닉네임수정</ColumnContentTxtUI>
            <BiRightArrow />
          </ColumnUI>
          <ColumnUI
            onClick={() => {
              navigatePopup("Bio");
            }}
          >
            <ColumnNmTxtUI>BIO</ColumnNmTxtUI>
            <ColumnContentTxtUI>소개글 추가/수정</ColumnContentTxtUI>
            <BiRightArrow />
          </ColumnUI>
          <ColumnUI
            onClick={() => {
              navigatePopup("Add Link");
            }}
          >
            <ColumnNmTxtUI>Links</ColumnNmTxtUI>
            <ColumnContentTxtUI>링크 추가</ColumnContentTxtUI>
            <BiRightArrow />
          </ColumnUI>
        </ListUI>
      </PageUI>
      <Popup popupTitle="Add Link" popupName="Add Link">
        <LinksEdit links={userData?.links} />
      </Popup>
      <Popup popupTitle="Bio" popupName="Bio">
        <BioEdit userBio={userData?.introduce} />
      </Popup>
      <Popup popupTitle="Nickname Edit" popupName="Nickname Edit">
        <NicknameEdit nickname={userData?.nickname} />
      </Popup>
      <Popup popupTitle="루키즈 회원증" popupName="Rudcard Add">
        <RudcardAdd />
      </Popup>
    </Content>
  );
};

export default ProfileEditPage;
