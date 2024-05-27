import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 25px;
  background-color: white;
  height: 100%;
`;

export const PageDescriptionUI = styled.p`
  font-size: 14px;
  font-family: Pretendard-SemiBold;
  color: #7e7e7e;
  letter-spacing: -0.5px;
  margin-top: -5px;
`;

export const TextAreaWrapperUI = styled.div`
  position: relative;
  margin-top: 37px;
  width: 100%;
  display: flex;
`;

export const TextAreaUI = styled.textarea`
  width: 100%;
  padding: 20px;
  padding-block: 30px;
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

export const SaveBtnSectionUI = styled.div`
  width: 100%;
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const SaveBtnUI = styled.button`
  padding-inline: 28px;
  padding-block: 12px;
  background-color: black;
  color: white;
  font-family: Pretendard-Bold;
  font-size: 17px;
  border-radius: 23px;
  border: none;
`;
