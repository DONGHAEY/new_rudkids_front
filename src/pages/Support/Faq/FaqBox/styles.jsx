import styled from "styled-components";

export const FaqBoxUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5%;
  border-radius: 5px;
  background-color: white;
`;

export const AskSectionUI = styled.div`
  background-color: white;
  font-family: Pretendard-Bold;
  display: flex;
  justify-content: space-between;
`;

export const AnswerSectionUI = styled.div`
  font-family: Poppins-Medium;
  font-size: clamp(0.7rem, 3.5vw, 1rem);
  white-space: pre-wrap;
  line-height: 100%;
`;
