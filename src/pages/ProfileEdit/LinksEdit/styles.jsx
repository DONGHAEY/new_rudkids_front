import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 25px;
  background-color: white;
  overflow: scroll;
  height: 100%;
`;

export const UrlSectionUI = styled.div`
  width: 90%;
  /* max-width: 297px; */
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: cneter;
  margin-top: 43px;
`;

export const InputTitleTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 18px;
`;

export const InputUI = styled.input`
  width: 80%;
  border: none;
  border-bottom: solid 0.8px #c3c3c3;
`;

export const AddBtnUI = styled.div`
  position: absolute;
  display: flex;
  padding: 1px;
  bottom: 13px;
  right: 0;
  border-radius: 100%;
  background-color: #c3c3c3;
  color: white;
`;

export const UrlListUI = styled.div`
  margin-top: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 9px;
  /* max-width: 297px; */
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
