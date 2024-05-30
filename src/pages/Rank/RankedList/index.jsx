import {
  RankListUI,
  RankNumTxtUI,
  RankNumUI,
  RankUI,
  UserImgUI,
  UserInfoUI,
  UserNmTxtUI,
  UserViewCntUI,
} from "./styles";
import { Icon } from "@iconify/react";

const RankedList = ({ rankedList }) => {
  //
  const colors = ["#FFF500", "#FF0000", "#6ED4FF"];

  return (
    <RankListUI>
      {rankedList?.map((rankedUser, idx) => {
        return (
          <RankUI>
            <UserInfoUI>
              <RankNumUI>
                <Icon
                  width="30px"
                  fill={idx < 3 ? "#FFF500" : "none"}
                  color={idx < 3 ? "#FFF500" : "transparent"}
                  icon="material-symbols-light:award-star-rounded"
                />
                <RankNumTxtUI>{idx + 1}</RankNumTxtUI>
              </RankNumUI>
              <UserImgUI
                borderColor={colors[idx] ?? "none"}
                src={rankedUser?.imageUrl}
              />
              <UserNmTxtUI>{rankedUser?.nickname}</UserNmTxtUI>
            </UserInfoUI>
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
