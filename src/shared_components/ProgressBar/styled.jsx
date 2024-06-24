import styled from "styled-components";

export const ProgressBarUI = styled.div`
  margin-top: 2%;
  width: 50%;
  height: 2.5%;
  border-radius: 30px;
  border: 1px solid white;
  background-color: white;
  position: relative;
`;

export const ProgressUI = styled.div`
  width: 0%;
  height: 100%;
  border-radius: 30px;
  background: rgba(0, 192, 0, 1);
`;

export const ProgressTxtUI = styled.p`
  color: white;
  font-size: max(2vw, 15px);
  color: white;
  font-family: digital;
  margin-top: 2%;
`;

export const DescriptionTxtUI = styled.p`
  color: white;
  font-size: max(1.8vw, 15px);
  color: white;
  font-family: Pretendard-Bold;
  margin-bottom: 2%;
`;
