import styled from "styled-components";

export const SubmitSectionUI = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const SubmitUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 30px;
  padding-bottom: 24px;
  width: 100%;
`;

export const TotalPriceWrapperUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BuyNowButtonUI = styled.button`
  font-family: Poppins-Bold;
  font-size: 20px;
  line-height: 20px;
  padding-block: 18px;
  border: none;
  color: white;
  background-color: #ec0000;
  border-radius: 24px;
  cursor: pointer;
`;

export const TotalTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 14px;
  color: #989898;
`;

export const TotalPriceTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 22px;
  line-height: 22px;
  color: black;
`;

export const Spacer = styled.div`
  margin-top: 168px;
`;
