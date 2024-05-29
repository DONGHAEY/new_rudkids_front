import styled from "styled-components";

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AlertUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 23px;
  padding-top: 53px;
  padding-bottom: 32px;
  padding-inline: 21px;
  gap: 38px;
`;

export const TitleUI = styled.div`
  font-family: Pretendard-Bold;
  font-size: 17px;
  text-align: center;
  line-height: 158%;
  letter-spacing: 0%;
`;

export const BtnListUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;
`;

export const BackBtnUI = styled.button`
  width: 100%;
  padding-block: 22px;
  border-radius: 20px;
  border: none;
  background: #d8d8d8;
  color: black;
  font-family: Pretendard-Bold;
  font-size: 18px;
`;

export const SaveBtnUI = styled.button`
  width: 100%;
  padding-block: 22px;
  border-radius: 20px;
  border: none;
  background: #000000;
  color: white;
  font-family: Pretendard-Bold;
  font-size: 18px;
`;
