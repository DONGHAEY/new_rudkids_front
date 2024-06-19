import { MdArrowForwardIos } from "react-icons/md";
import {
  ContentWrapperUI,
  ImgUI,
  ImgWrapperUI,
  LoginTextUI,
  NameTextUI,
  ProfileUI,
  RankingTextUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import useUserQuery from "../../../../queries/user/useUserQuery";
import { useMemo } from "react";
import defaultImgSrc from "./assets/default.svg";
import RudImage from "../../../RudImage";

const Profile = () => {
  const { data: userData, isLoading } = useUserQuery();
  const navigate = useNavigate();

  const onClick = () => {
    if (userData) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const sign = useMemo(() => {
    if (userData?.rank === 1) return "st";
    if (userData?.rank === 2) return "nd";
    if (userData?.rank === 3) return "rd";
    return "st";
  }, [userData?.rank]);

  if (!userData) {
    return (
      <ProfileUI onClick={onClick}>
        <ImgWrapperUI>
          <ImgUI src={defaultImgSrc} />
        </ImgWrapperUI>
        <ContentWrapperUI>
          <LoginTextUI>{isLoading ? "Loading" : "로그인하기"}</LoginTextUI>
          <RankingTextUI>Fuck you</RankingTextUI>
        </ContentWrapperUI>
        <MdArrowForwardIos />
      </ProfileUI>
    );
  }

  return (
    <ProfileUI onClick={onClick}>
      <ImgWrapperUI>
        <RudImage src={userData?.imageUrl ?? defaultImgSrc} ImgUI={ImgUI} />
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
