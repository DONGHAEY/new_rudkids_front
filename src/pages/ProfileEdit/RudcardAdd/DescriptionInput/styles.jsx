import styled from "styled-components";

export const DescriptionInputUI = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputNmTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 16px;
  color: black;
`;

export const TextAreaWrapperUI = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const TextAreaUI = styled.textarea`
  width: 100%;
  padding: 20px;
  padding-block: 20px;
  resize: none;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  background-color: #f1f1f1;
  ::placeholder {
    color: #c1c1c1;
  }
  border: none;
  border-radius: 17px;
`;

export const LengthTxtUI = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
`;
