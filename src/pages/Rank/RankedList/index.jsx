import RudImage from "../../../shared_components/RudImage";
import TopRankSign from "../TopRankSign";
import {
  RankListUI,
  RankNumTxtUI,
  RankNumUI,
  RankUI,
  UserImgUI,
  UserImgWrapperUI,
  UserNmTxtUI,
  UserViewCntUI,
} from "./styles";
import { Icon } from "@iconify/react";

const RankedList = ({ rankedList }) => {
  const colors = ["#FFF500", "#FF0000", "#6ED4FF"];

  return (
    <RankListUI>
      <TopRankSign />
      {rankedList?.map((rankedUser, idx) => {
        return (
          <RankUI key={idx} to={`/profile/${rankedUser?.id}`}>
            <RankNumUI>
              <Icon
                width="30px"
                fill={idx < 3 ? "#FFF500" : "none"}
                color={idx < 3 ? "#FFF500" : "transparent"}
                icon="material-symbols-light:award-star-rounded"
              />
              <RankNumTxtUI>{idx + 1}</RankNumTxtUI>
            </RankNumUI>
            <UserImgWrapperUI>
              <RudImage
                ImgUI={UserImgUI}
                src={rankedUser.imageUrl}
                borderColor={colors[idx] ?? "none"}
              />
            </UserImgWrapperUI>
            <UserNmTxtUI>{rankedUser?.nickname}</UserNmTxtUI>
            <UserViewCntUI>
              <Icon icon="ph:eye-fill" color="black" fontSize={"160%"} />
              {Number(
                rankedUser?.view?.totalCnt + rankedUser?.view?.todayCnt
              )?.toLocaleString("ko-KR")}
            </UserViewCntUI>
          </RankUI>
        );
      })}
    </RankListUI>
  );
};

export default RankedList;
