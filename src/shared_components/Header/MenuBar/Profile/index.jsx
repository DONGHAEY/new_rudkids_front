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
import { useMemo } from "react";

const Profile = () => {
  const { data: userData } = useUserQuery();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile");
  };

  const sign = useMemo(() => {
    if (userData?.rank === 1) return "st";
    if (userData?.rank === 2) return "nd";
    if (userData?.rank === 3) return "rd";
    return "st";
  }, [userData?.rank]);

  return (
    <ProfileUI onClick={onClick}>
      <ImgWrapperUI>
        <ImgUI src={userData?.imageUrl} />
      </ImgWrapperUI>
      <ContentWrapperUI>
        <NameTextUI>{userData?.nickname}</NameTextUI>
        <RankingTextUI>
          {userData?.rank}
          {sign} Ranking
        </RankingTextUI>
      </ContentWrapperUI>
      <MdArrowForwardIos />
    </ProfileUI>
  );
};

export default Profile;
