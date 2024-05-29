import styled from "styled-components";

export const BirthInputUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const NameInputNmTxtUI = styled.p`
  width: 70px;
  font-family: Pretendard-Bold;
  font-size: 16px;
`;

export const InputListUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  gap: 5%;
`;

export const InputUI = styled.input`
  width: 100%;
  background-color: #f1f1f1;
  border: none;
  height: 10px;
  border-radius: 17px;
  padding-block: 20px;
  padding-inline: 17px;
  font-family: Pretendard-Bold;
  font-size: 15px;
`;

export const YearInputUI = styled(InputUI)`
  width: 150%;
`;
