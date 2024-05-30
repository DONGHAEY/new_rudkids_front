import {
  BottomSectionUI,
  FirstStage,
  PageUI,
  RankBallUI,
  RankStageImgUI,
  RankStageWrapperUI,
  RankerImgUI,
  RankerImgWrapperUI,
  RankerNameUI,
  SecondStage,
  ThirdStage,
} from "./styles";
import useRankedListQuery from "../../queries/user/userRankedListQuery";
import Header from "../../shared_components/Header";
import RankedList from "./RankedList";
import rankStageSrc from "./assets/rank_stage.png";

const RankPage = () => {
  const { data: rankedList, isLoading } = useRankedListQuery();

  const colors = ["#FFF500", "#FF0000", "#6ED4FF"];

  if (isLoading) return null;

  return (
    <PageUI>
      <Header isFixed={true} />
      <RankStageWrapperUI>
        <RankStageImgUI src={rankStageSrc} />
        <SecondStage>
          <RankerImgWrapperUI>
            <RankerImgUI
              src={rankedList?.[1]?.imageUrl}
              borderColor={colors[1]}
            />
            <RankBallUI backgroundColor={colors[1]}>2</RankBallUI>
          </RankerImgWrapperUI>
          <RankerNameUI>{rankedList?.[1]?.nickname ?? "?"}</RankerNameUI>
        </SecondStage>
        <FirstStage>
          <RankerImgWrapperUI>
            <RankerImgUI
              src={rankedList?.[0]?.imageUrl}
              borderColor={colors[0]}
            />
            <RankBallUI backgroundColor={colors[0]}>1</RankBallUI>
          </RankerImgWrapperUI>
          <RankerNameUI>{rankedList?.[0]?.nickname ?? "?"}</RankerNameUI>
        </FirstStage>
        <ThirdStage>
          <RankerImgWrapperUI>
            <RankerImgUI
              src={rankedList?.[2]?.imageUrl}
              borderColor={colors[2]}
            />
            <RankBallUI backgroundColor={colors[2]}>3</RankBallUI>
          </RankerImgWrapperUI>
          <RankerNameUI>{rankedList?.[2]?.nickname ?? "?"}</RankerNameUI>
        </ThirdStage>
      </RankStageWrapperUI>
      <BottomSectionUI>
        <RankedList rankedList={[...rankedList]} />
      </BottomSectionUI>
    </PageUI>
  );
};

export default RankPage;
