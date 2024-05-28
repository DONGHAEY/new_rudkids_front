import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // padding: 30px;
  background-color: white;
`;

export const FlexWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding-top: 42px;
  padding-bottom: 104px;
`;

export const SectionDscrptTxtUI = styled.h2`
  font-family: Poppins-SemiBold;
  font-size: 20px;
  margin-bottom: 20px;
  letter-spacing: 0px;
  width: 100%;
  text-align: left;
`;

export const ContentSectionUI = styled.div`
  padding-block: 29px;
  display: flex;
  width: 100%;
  gap: 12px;
  flex-direction: column;
`;

export const HelpMessageTextUI = styled.p`
  font-family: Poppins-SemiBold;
  color: #707070;
  letter-spacing: -1px;
`;

export const PackageExplainUI = styled.div`
  background-color: #e4e4e4;
  color: #6e6e6e;
  padding-block: 2px;
  padding-inline: 6px;
  font-size: 16px;
  font-family: Poppins-SemiBold;
  display: inline-block;
  letter-spacing: -1px;
  min-width: 90px;
  word-spacing: -3px;
  border-radius: 6px;
`;

export const InfoRowUI = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;
`;

export const ProductNameTextUI = styled.h1`
  font-family: Poppins-Bold;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -1px;
  word-spacing: -3px;
`;

export const ProductPriceTextUI = styled.h3`
  font-family: Poppins-Bold;
  font-size: 20px;
  line-height: 20px;
  line-height: auto;
  letter-spacing: -1px;
`;

export const ModelDescriptionUI = styled.div`
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
  width: 100%;
  flex-direction: row;
  align-items: end;
  overflow-x: scroll;
  margin-top: 24px;
`;

export const DetailImgListUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
