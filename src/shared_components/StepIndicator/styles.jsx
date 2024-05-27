import styled from "styled-components";

export const StepIndicatorUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-inline: 30px;
  padding-block: 12px;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 45px;
  margin-bottom: 20px;
`;

export const IndicatorBallUI = styled.div`
  background-color: ${({ $selected }) => ($selected ? "black" : "#BABABA")};
  border-radius: 100%;
  width: ${({ $selected }) => ($selected ? "15px" : "10px")};
  height: ${({ $selected }) => ($selected ? "15px" : "10px")};
`;
