import { IndicatorBallUI, StepIndicatorUI } from "./styles";

const StepIndicator = ({ stepCnt, totalStep }) => {
  return (
    <StepIndicatorUI>
      {new Array(totalStep).fill(null).map((_, idx) => {
        return <IndicatorBallUI key={idx} $selected={idx === stepCnt} />;
      })}
    </StepIndicatorUI>
  );
};

export default StepIndicator;
