import styled from "styled-components";

export const NameInputUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 11px;
  width: 100%;
`;

export const NameInputNmTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 16px;
`;

export const SelectBtnUI = styled.div`
  border: solid rgba(241, 241, 241, 1) 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border-radius: 14px;
  padding-inline: 19px;
  padding-block: 14px;
  color: black;
  font-family: Pretendard-Bold;
  background: white;
  line-height: auto;
  font-size: 13px;
  letter-spacing: -5%;
`;

export const HiddenInput = styled.input`
  width: 0px;
  height: 0px;
  border: none;
  display: none;
`;
