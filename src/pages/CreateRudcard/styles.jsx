import styled from "styled-components";

export const PageUI = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-inline: 10px;
  padding-bottom: 80%;
  min-height: 100%;
  background-color: white;
`;

export const InputListUI = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`;

export const SaveBtnSectionUI = styled.div`
  width: 90%;
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
