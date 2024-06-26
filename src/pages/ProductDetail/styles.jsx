import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

export const FlexWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  width: 86%;
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
  padding-block: 9%;
  display: flex;
  width: 100%;
  flex-direction: column;
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
  font-size: clamp(0rem, 14vw, 1.6rem);
  line-height: 100%;
  word-spacing: -5%;
  padding-right: 8%;
`;

export const ProductPriceTextUI = styled.h3`
  font-family: Poppins-Bold;
  font-size: clamp(0.8rem, 5vw, 1rem);
  line-height: 100%;
  line-height: auto;
  /* letter-spacing: -1px; */
  margin-top: 5%;
  word-spacing: -5%;
`;

export const ModelDescriptionUI = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 40px;
  width: 90%;
  padding: 19px;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

export const ModelDescriptionTextUI = styled.p`
  font-family: Pretendard-Medium;
  font-size: clamp(0.6rem, 4vw, 1rem);
`;

export const DetailImgListUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
