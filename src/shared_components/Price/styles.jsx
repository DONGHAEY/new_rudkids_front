import styled from "styled-components";

export const PriceUI = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7.8%;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ColUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const TxtWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop ?? "3%"};
`;

export const ColumnTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4.6vw, 1rem);
  line-height: 100%;
`;
export const OneDPTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4.3vw, 0.8rem);
  color: #0057ff;
`;

export const ColumnValueTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  line-height: 120%;
  font-size: clamp(0rem, 6.2vw, 1rem);
  display: flex;
  color: black;
`;

export const TotalTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0.8rem, 5vw, 1rem);
  line-height: 120%;
`;

export const TotalPriceTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 8vw, 1.5rem);
  line-height: 120%;
`;
