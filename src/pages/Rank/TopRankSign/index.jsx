import { KidImgUI, T1UI, T2UI, TopRankSignUI, TxtWrapperUI } from "./styles";
import kids from "./assets/kids.png";

const TopRankSign = () => {
  return (
    <TopRankSignUI>
      <KidImgUI src={kids} />
      <TxtWrapperUI>
        <T1UI>상위 100명의 루키즈 🥳</T1UI>
        <T2UI>루키즈 오프라인 파티에 초대하다</T2UI>
      </TxtWrapperUI>
    </TopRankSignUI>
  );
};

export default TopRankSign;
