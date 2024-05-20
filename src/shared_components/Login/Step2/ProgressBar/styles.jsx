import styled from "styled-components";

export const ProgressBarWrapperUI = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressBarUI = styled.div`
  background-color: white;
  height: 20px;
  width: 80%;
  max-width: 200px;
  border: #d6d6d6 solid 1px;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const GoalBoxArrow = styled.div`
  position: absolute;
  top: -8px;
  border-bottom: 8px solid red;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
`;

export const ProgressBarFillUI = styled.div`
  background-color: #24ff00;
  height: 100%;
  width: 0px;
  border-radius: 30px;
`;

export const CountBallUI = styled.div`
  background: #24ff00;
  position: absolute;
  height: 30px;
  width: 30px;
  left: -20px;
  border-radius: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: Poppins-SemiBold;
  font-size: 10px;
`;

export const GoalBoxUI = styled.div`
  font-family: Poppins-SemiBold;
  position: absolute;
  bottom: -35px;
  right: 0;
  background-color: red;
  color: white;
  font-size: 10px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 9px;
  margin: 0;
  border-radius: 10px;
`;

export const GoalButtonUI = styled.button`
  background-color: #24ff00;
  color: white;
  padding: 10px;
  width: 200px;
  height: 100%;
  border-radius: 22px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 19px;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: Poppins-SemiBold;
`;
