import styled from "styled-components";

export const FormUI = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
`;

export const LabelUI = styled.label`
  font-size: clamp(0.8rem, 3.5vw, 1rem);
  color: white;
  font-family: boba;
`;

export const RatioLabelUI = styled.label`
  font-size: 10px;
  color: white;
  font-family: boba;
`;

export const SectionUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TxtInputUI = styled.input`
  height: 30px;
  border: none;
  background-color: white;
  border-radius: 10px;
  padding-inline: 3%;
`;

export const SelectUI = styled.select`
  width: 50%;
  height: 30px;
  border: none;
  background-color: white;
  border-radius: 10px;
`;

export const SubmitBtnUI = styled.button`
  min-width: 100px;
  background-color: white;
  padding-block: 10px;
`;

export const TextAreaUI = styled.textarea`
  font-family: Pretendard-Medium;
  font-size: 15px;
  height: 80px;
  border-radius: 10px;
`;
