import styled from "styled-components";

export const PriceUI = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7.8%;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const SpaceBetweenUI = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? "row"};
  justify-content: space-between;
  align-items: center;
  gap: ${({ gap }) => gap ?? "0px"};
  width: 100%;
`;

export const ColumnTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0.8rem, 4.5vw, 0.95rem);
  line-height: 120%;
`;
export const OneDPTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0.5rem, 4.5vw, 0.8rem);
  color: #0057ff;
`;

export const ColumnValueTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  line-height: 120%;
  font-size: clamp(0.6rem, 6vw, 1.3rem);
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
  font-size: clamp(0.6rem, 8vw, 1.5rem);
  line-height: 120%;
`;
