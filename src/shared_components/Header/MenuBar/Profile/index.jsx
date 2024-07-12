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
  const { data: userData, isLoading } = useUserQuery(null, true);
  const navigate = useNavigate();

  const onClick = () => {
    if (userData) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const sign = useMemo(() => {
    if (userData?.rankOfView === 1) return "st";
    if (userData?.rankOfView === 2) return "nd";
    if (userData?.rankOfView === 3) return "rd";
    return "st";
  }, [userData?.rankOfView]);

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
        <RudImage
          src={userData?.instagram.imageUrl ?? defaultImgSrc}
          ImgUI={ImgUI}
        />
      </ImgWrapperUI>
      <ContentWrapperUI>
        <NameTextUI>{userData?.nickname}</NameTextUI>
        <RankingTextUI>
          {userData?.rankOfView}
          {sign} Ranking
        </RankingTextUI>
      </ContentWrapperUI>
      <MdArrowForwardIos />
    </ProfileUI>
  );
};

export default Profile;
