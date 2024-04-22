import { useNavigate, useParams } from "react-router-dom";
import { useSchoolQuery } from "../../queries/school";
import { useSchoolUsersQuery } from "../../queries/user";
import prizeIconSrc from "./assets/prize.png";
import { IoEnterOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import {
  BottomSectionUI,
  UserBoxSliderUI,
  EnterButtonUI,
  MiddleSectionUI,
  PageDescriptionUI,
  PageUI,
  SchoolDescriptionUI,
  SchoolLogoUI,
  SchoolNameUI,
  TopImgUI,
  TopSectionUI,
  UserBoxUI,
  MoreUserTextUI,
} from "./styles";

const SchoolInvitationPage = ({ routeInfo }) => {
  const params = useParams();
  const schoolName = params[routeInfo.paramKeys[0]];
  const { data: schoolData } = useSchoolQuery(schoolName);
  const { data: schoolUsersData } = useSchoolUsersQuery(schoolName);

  const moreUserCount =
    schoolUsersData?.meta.total - schoolUsersData?.meta.take;

  const navigate = useNavigate();

  const onEnterBtnClickHandler = () => {
    if (schoolData) {
      localStorage.setItem("school_name", schoolData?.name);
    }
    navigate("/list");
  };

  return (
    <PageUI>
      <TopImgUI src={prizeIconSrc} />
      <TopSectionUI>
        <SchoolNameUI>{schoolData?.name}</SchoolNameUI>
        <PageDescriptionUI>Students Are Invited</PageDescriptionUI>
      </TopSectionUI>
      <MiddleSectionUI>
        <SchoolLogoUI src={schoolData?.imageUrl} />
        <SchoolDescriptionUI>{schoolData?.description}</SchoolDescriptionUI>
        <EnterButtonUI onClick={onEnterBtnClickHandler}>
          <IoEnterOutline fontSize={"25px"} />
          Enter
        </EnterButtonUI>
      </MiddleSectionUI>
      <BottomSectionUI>
        <UserBoxSliderUI>
          {schoolUsersData?.data.map((schoolUser) => {
            return (
              <UserBoxUI key={schoolUser?.id}>
                <UserBoxUI.UserImgWrapperUI>
                  <UserBoxUI.UserImgUI
                    src={schoolUser?.imageUrl}
                    alt={schoolUser?.nickname + "이미지"}
                  />
                </UserBoxUI.UserImgWrapperUI>
                <UserBoxUI.UserNicknameUI>
                  {schoolUser?.nickname}
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

export default SchoolInvitationPage;
