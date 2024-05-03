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
  width: 85%;
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
  ::-ms-input-placeholder: {
    color: #a1a1a1;
    font-size: 100px;
  }
  ::-webkit-input-placeholder {
    color: #a1a1a1;
  }
`;
