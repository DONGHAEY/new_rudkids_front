import { useParams } from "react-router-dom";
import {
  BottomSectionUI,
  EnterButtonUI,
  InviterDescriptionUI,
  InviterProfileImgUI,
  MiddleSectionUI,
  MoreUserTextUI,
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
import { useEffect } from "react";

const InvitationPage = ({ routeInfo }) => {
  const params = useParams();
  const inviterUserId = params[routeInfo.paramKeys[0]];

  const { data: inviterData } = useOtherUserQuery(inviterUserId);
  const { data: invitedUsersData } = useInvitedUsersQuery(inviterUserId);

  const moreUserCount =
    invitedUsersData?.meta.total - invitedUsersData?.meta.take;

  return (
    <PageUI>
      <TopImgUI src={prizeIconSrc} />
      <TopSectionUI>
        <TitleUI>You are invited</TitleUI>
        <PageDescriptionUI>
          by
          <div
            style={{
              paddingBlock: "4px",
              paddingInline: "10px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              fontFamily: "Poppins-Bold",
              fontSize: "20px",
            }}
          >
            @{inviterData?.nickname}
          </div>
        </PageDescriptionUI>
      </TopSectionUI>
      <MiddleSectionUI>
        <InviterProfileImgUI src={inviterData?.imageUrl} />
        <InviterDescriptionUI>{inviterData?.nickname}</InviterDescriptionUI>
        <EnterButtonUI onClick={null}>
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
                    alt={invitedUser?.nickname + "이미지"}
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
        {moreUserCount > 0 && (
          <MoreUserTextUI>+{moreUserCount} more</MoreUserTextUI>
        )}
      </BottomSectionUI>
    </PageUI>
  );
};

export default InvitationPage;
