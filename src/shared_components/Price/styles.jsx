import styled from "styled-components";

export const PriceUI = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
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
  font-size: 15px;
  line-height: 120%;
`;

export const ColumnValueTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  line-height: 120%;
  font-size: 17px;
  color: ${({ color }) => color ?? "black"};
`;

export const TotalTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 14px;
  line-height: 120%;
`;

export const TotalPriceTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 22px;
  line-height: 120%;
`;
