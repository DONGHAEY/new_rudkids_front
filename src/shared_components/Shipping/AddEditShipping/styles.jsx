import styled from "styled-components";

export const AddEditShippingWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: scroll;
`;

export const AddEditShippingUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: 15px;
  padding-bottom: 30px;
  width: 90%;
`;

export const DescriptionTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 20px;
`;

export const TextInputUI = styled.input`
  background-color: #f2f2f2;
  border: none;
  border-radius: 20px;
  padding-inline: 30px;
  padding-block: 20px;
  color: black;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  ::-ms-input-placeholder {
    color: #a1a1a1;
  }
  ::-webkit-input-placeholder {
    color: #a1a1a1;
  }
`;

export const SelectUI = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  position: relative;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  border: solid 1.4px #e3e3e3;
  background-color: #ffffff;
  color: #a1a1a1;
  min-height: 64px;
  border-radius: 17px;
  padding-block: 14px;
  padding-inline: 25px;
`;
