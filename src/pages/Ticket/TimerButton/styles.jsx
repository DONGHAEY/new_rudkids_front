import styled from "styled-components";

export const ButtonWrapperUI = styled.div`
  width: 70%;
  margin-block: 5%;
  gap: 5px;
`;

export const ButtonUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 8%;
  justify-content: center;
  align-items: center;
`;

export const TimelineUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 12.08px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  /* max-width: 133.33px; */
  border-radius: 63px;
`;

export const TimelineFillUI = styled.div`
  background-color: #ff0000;
  border-radius: 63px;
`;

export const ButtonTxtUI = styled.p`
  font-family: boba;
  color: black;
  width: 100%;
  text-align: center;
  font-size: 28px;
`;
