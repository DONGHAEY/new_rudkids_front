import PopupRoute from "../../shared_components/PopupRoute";
import { ColumnContentTxtUI, ColumnNmTxtUI, LinkUI, PageUI } from "./styles";
import { usePopup } from "../../hooks/usePopup";
import BioEdit from "./BioEdit";
import LinksEdit from "./LinksEdit";
import useUserQuery from "../../queries/user/useUserQuery";
import NicknameEdit from "./NicknameEdit";
import { useNavigate } from "react-router-dom";
import Popup from "../../shared_components/Popup";
import { Icon } from "@iconify/react/dist/iconify.js";

const ProfileEditPage = () => {
  const [navigatePopup] = usePopup();
  const navigate = useNavigate();

  const { data: userData } = useUserQuery();

  return (
    <Popup title="프로필 수정" backLink="/profile">
      <PageUI>
        <Link
          name="Nickname"
          description="닉네임"
          onClick={() => {
            navigatePopup("Nickname Edit");
          }}
        />
        <Link
          name="Bio"
          description="소개글"
          onClick={() => {
            navigatePopup("Bio Edit");
          }}
        />
        <Link
          name="Links"
          description="링크들"
          onClick={() => {
            navigatePopup("Links Edit");
          }}
        />
        <Link
          name="Instagram"
          description="인스타"
          onClick={() => {
            navigate(`/insta-info?callback=${window.location.href}`);
          }}
        />
        <PopupRoute name="Links Edit">
          <LinksEdit links={userData?.links} />
        </PopupRoute>
        <PopupRoute name="Bio Edit">
          <BioEdit userBio={userData?.introduce} />
        </PopupRoute>
        <PopupRoute name="Nickname Edit">
          <NicknameEdit nickname={userData?.nickname} />
        </PopupRoute>
      </PageUI>
    </Popup>
  );
};

const Link = ({ name, description, onClick }) => {
  return (
    <LinkUI onClick={onClick}>
      <ColumnNmTxtUI>{name}</ColumnNmTxtUI>
      <ColumnContentTxtUI>{description}</ColumnContentTxtUI>
      <Icon icon="mingcute:right-line" height="20px" />
    </LinkUI>
  );
};

export default ProfileEditPage;
