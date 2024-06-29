import styled from "styled-components";

export const EmptyShippingUI = styled.div`
  width: 100%;
  padding-block: 16%;
  border: solid 2px #c3e2ff;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddButtonUI = styled.button`
  background-color: #257ed6;
  color: white;
  border: none;
  border-radius: clamp(0rem, 4vw, 1rem);
  padding: 4%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ExplainTextUI = styled.p`
  font-size: clamp(0rem, 4vw, 1rem);
  font-family: Pretendard-SemiBold;
`;

export const AddBtnTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4.5vw, 1rem);
`;
