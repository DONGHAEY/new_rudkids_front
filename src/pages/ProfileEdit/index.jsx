import PopupRoute from "../../shared_components/PopupRoute";
import {
  ColumnContentTxtUI,
  ColumnNmTxtUI,
  DeleteMeBtnUI,
  LinkUI,
  PageUI,
} from "./styles";
import { usePopup } from "../../hooks/usePopup";
import BioEdit from "./BioEdit";
import LinksEdit from "./LinksEdit";
import useUserQuery from "../../queries/user/useUserQuery";
import useDeleteMeMutation from "../../mutations/user/useDeleteMeMutation";
import NicknameEdit from "./NicknameEdit";
import { useNavigate } from "react-router-dom";
import Popup from "../../shared_components/Popup";
import { Icon } from "@iconify/react/dist/iconify.js";
import { trackClickButton } from "../../shared_analytics";

const ProfileEditPage = () => {
  const [navigatePopup] = usePopup();
  const navigate = useNavigate();

  const { data: userData } = useUserQuery();

  const deleteUserMutation = useDeleteMeMutation();

  const deleteBtnClickHandler = async () => {
    trackClickButton("delete user");
    const stat = window.confirm(
      "정말로 탈퇴하실것입니까? 탈퇴시 이용내역이 삭제됩니다(주문관련 예외)"
    );
    if (stat) {
      const answer = window.prompt(`탈퇴하시려면, 네 라고 입력해주세요`);
      if (answer === "네") {
        await deleteUserMutation.mutateAsync();
        navigate("/");
      }
    }
  };

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
        <DeleteMeBtnUI onClick={deleteBtnClickHandler}>회원탈퇴</DeleteMeBtnUI>
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
