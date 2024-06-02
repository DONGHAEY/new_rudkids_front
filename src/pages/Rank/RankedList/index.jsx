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
      {rankedList?.map((rankedUser, idx) => {
        if (!rankedUser?.imageUrl) return;
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
              <UserImgUI
                borderColor={colors[idx] ?? "none"}
                src={rankedUser?.imageUrl}
              />
            </UserImgWrapperUI>
            <UserNmTxtUI>{rankedUser?.nickname}</UserNmTxtUI>
            <UserViewCntUI>
              <Icon icon="ph:eye-fill" color="black" />
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
