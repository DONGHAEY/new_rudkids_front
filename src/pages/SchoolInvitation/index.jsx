import { useNavigate, useParams } from "react-router-dom";
import { useSchoolQuery } from "../../queries/school";
import { useEffect } from "react";
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
} from "./styles";

const SchoolInvitationPage = () => {
  const params = useParams();
  const schoolName = params["school_name"];
  const { data: schoolData } = useSchoolQuery(schoolName);
  const { data: schoolUsersData } = useSchoolUsersQuery(schoolName);

  const navigate = useNavigate();

  const onEnterBtnClickHandler = () => {
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
          {schoolUsersData?.map((schoolUser) => {
            return (
              <UserBoxUI key={schoolUser?.id}>
                <UserBoxUI.UserImgWrapperUI>
                  <UserBoxUI.UserImgUI src={schoolUser?.imageUrl} />
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
        <p
          style={{
            width: "100%",
            textAlign: "right",
          }}
        >
          +0 more
        </p>
      </BottomSectionUI>
    </PageUI>
  );
};

export default SchoolInvitationPage;
