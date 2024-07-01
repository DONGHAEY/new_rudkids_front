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
import rankStageSrc from "./assets/rank_stage.webp";
import RudImage from "../../shared_components/RudImage";
import { useBodyBackground } from "../../hooks/useBodyBackground";

const RankPage = () => {
  const { data: rankedList, isLoading } = useRankedListQuery();

  const colors = ["#FFF500", "#FF0000", "#6ED4FF"];

  useBodyBackground("#0027F1");

  if (isLoading) return null;

  return (
    <PageUI>
      <Header isFixed={true} />
      <RankStageWrapperUI>
        <RankStageImgUI src={rankStageSrc} />
        <SecondStage to={`/profile/${rankedList?.[1]?.id}`}>
          <RankerImgWrapperUI>
            <RudImage
              ImgUI={RankerImgUI}
              src={rankedList?.[1]?.imageUrl}
              borderColor={colors[1]}
            />
            <RankBallUI backgroundColor={colors[1]}>2</RankBallUI>
          </RankerImgWrapperUI>
          <RankerNameUI>{rankedList?.[1]?.nickname ?? "?"}</RankerNameUI>
        </SecondStage>
        <FirstStage to={`/profile/${rankedList?.[0]?.id}`}>
          <RankerImgWrapperUI>
            <RudImage
              ImgUI={RankerImgUI}
              src={rankedList?.[0]?.imageUrl}
              borderColor={colors[0]}
            />
            <RankBallUI backgroundColor={colors[0]}>1</RankBallUI>
          </RankerImgWrapperUI>
          <RankerNameUI>{rankedList?.[0]?.nickname ?? "?"}</RankerNameUI>
        </FirstStage>
        <ThirdStage to={`/profile/${rankedList?.[2]?.id}`}>
          <RankerImgWrapperUI>
            <RudImage
              ImgUI={RankerImgUI}
              src={rankedList?.[2]?.imageUrl}
              borderColor={colors[2]}
            />
            <RankBallUI backgroundColor={colors[2]}>3</RankBallUI>
          </RankerImgWrapperUI>
          <RankerNameUI>{rankedList?.[2]?.nickname ?? "?"}</RankerNameUI>
        </ThirdStage>
      </RankStageWrapperUI>
      {/* <BottomSectionUI> */}

      <RankedList rankedList={[...rankedList]} />
      {/* </BottomSectionUI> */}
    </PageUI>
  );
};

export default RankPage;
