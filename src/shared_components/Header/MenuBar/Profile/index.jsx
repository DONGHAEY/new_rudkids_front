import { MdArrowForwardIos } from "react-icons/md";
import {
  ContentWrapperUI,
  ImgUI,
  ImgWrapperUI,
  NameTextUI,
  ProfileUI,
  RankingTextUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useUserQuery from "../../../../queries/user/useUserQuery";

const Profile = () => {
  const { data: userData } = useUserQuery();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile");
  };

  return (
    <ProfileUI onClick={onClick}>
      <ImgWrapperUI>
        <ImgUI src={userData?.imageUrl} />
      </ImgWrapperUI>
      <ContentWrapperUI>
        <NameTextUI>{userData?.nickname}</NameTextUI>
        <RankingTextUI>?th Ranking</RankingTextUI>
      </ContentWrapperUI>
      <MdArrowForwardIos />
    </ProfileUI>
  );
};

export default Profile;
