import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
`;

export const FlexWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
`;

export const ContentSectionUI = styled.div`
  padding-block: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
`;

export const ProductNameTextUI = styled.h1`
  font-family: Poppins-Bold;
  font-size: 28px;
  line-height: 38px;
`;

export const ProductPriceTextUI = styled.h3`
  font-family: Poppins-Medium;
  font-size: 20px;
`;

export const ModelDescriptionUI = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 10px;
  background-color: #ededed;
  border-radius: 10px;
`;

export const ModelDescriptionTextUI = styled.p`
  font-family: Pretendard-Medium;
  font-size: 14.5px;
`;

export const ComponentListUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 80%;
  overflow-x: scroll;
`;
