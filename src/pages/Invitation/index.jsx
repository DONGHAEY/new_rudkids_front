import { useNavigate, useParams } from "react-router-dom";
import {
  BottomSectionUI,
  EnterButtonUI,
  InviterDescriptionUI,
  InviterProfileImgUI,
  MiddleSectionUI,
  MoreUserTextUI,
  NickNameCardUI,
  PageDescriptionUI,
  PageUI,
  TitleUI,
  TopImgUI,
  TopSectionUI,
  UserBoxSliderUI,
  UserBoxUI,
} from "./styles";
import { useInvitedUsersQuery, useOtherUserQuery } from "../../queries/user";
import prizeIconSrc from "./assets/prize.png";
import { IoEnterOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";

const InvitationPage = ({ routeInfo }) => {
  const params = useParams();
  const navigate = useNavigate();
  const inviterUserId = params[routeInfo.paramKeys[0]];

  const { data: inviterData } = useOtherUserQuery(inviterUserId);
  const { data: invitedUsersData } = useInvitedUsersQuery(inviterUserId);

  const moreUserCount =
    invitedUsersData?.meta.total - invitedUsersData?.meta.take;

  const onEnterBtnClickHandler = () => {
    if (inviterData) {
      localStorage.setItem("inviter_user_id", inviterData.id);
      navigate(`/list`);
    }
  };

  return (
    <PageUI>
      <TopSectionUI>
        <TopImgUI src={prizeIconSrc} />
        <TitleUI>You are invited</TitleUI>
        <PageDescriptionUI>
          <p>by</p>
          <NickNameCardUI>@{inviterData?.nickname}</NickNameCardUI>
        </PageDescriptionUI>
      </TopSectionUI>
      <MiddleSectionUI>
        <InviterProfileImgUI
          src={inviterData?.imageUrl}
          onError={(e) => (e.currentTarget.src = "/Images/rudkids_logo.webp")}
        />
        <InviterDescriptionUI>{inviterData?.nickname}</InviterDescriptionUI>
        <EnterButtonUI onClick={onEnterBtnClickHandler}>
          <IoEnterOutline fontSize={"25px"} />
          Enter
        </EnterButtonUI>
      </MiddleSectionUI>
      <BottomSectionUI>
        <UserBoxSliderUI>
          {invitedUsersData?.data.map((invitedUser) => {
            return (
              <UserBoxUI key={invitedUser?.id}>
                <UserBoxUI.UserImgWrapperUI>
                  <UserBoxUI.UserImgUI
                    src={invitedUser?.imageUrl}
                    onError={(e) =>
                      (e.currentTarget.src = "/Images/rudkids_logo.webp")
                    }
                  />
                </UserBoxUI.UserImgWrapperUI>
                <UserBoxUI.UserNicknameUI>
                  {invitedUser?.nickname}
                </UserBoxUI.UserNicknameUI>
              </UserBoxUI>
            );
          })}
          <UserBoxUI key={"plus icon"}>
            <IoIosAdd fontSize={"30px"} />
          </UserBoxUI>
        </UserBoxSliderUI>
        <MoreUserTextUI>+{moreUserCount} more</MoreUserTextUI>
      </BottomSectionUI>
    </PageUI>
  );
};

export default InvitationPage;
