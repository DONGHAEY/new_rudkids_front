import styled from "styled-components";

export const SubmitSectionUI = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  position: fixed;
  pointer-events: none;
  max-width: 430px;
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
  background-color: #ec0000;
  color: white;
  height: 60px;
  border: none;
  border-radius: 24px;
  pointer-events: all;
  font-family: Poppins-Bold;
  font-size: 20px;
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
