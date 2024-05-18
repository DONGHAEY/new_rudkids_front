import styled from "styled-components";

export const TextAreaUI = styled.textarea`
  border-radius: 15px;
  border: solid rgba(255, 255, 255, 0.72) 1.4px;
  height: 42px;
  padding-block: 20px;
  padding-inline: 24px;
  padding-right: 70px;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  background-color: rgba(243, 243, 243, 0.25);
  color: white;
  resize: none;
  width: 100%;
`;

export const TextAreaWrapperUI = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;
`;

export const PlaceHolderUI = styled.p`
  position: absolute;
  top: 20px;
  left: 24px;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  color: white;
`;

export const LengthTxtUI = styled.p`
  bottom: 10px;
  right: 14px;
  font-family: Pretendard-Medium;
  font-size: 10px;
  color: gray;
  position: absolute;
`;

export const SaveBtnUI = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-Bold;
  right: 10px;
  top: 10px;
  border: none;
`;
