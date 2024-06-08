import styled from "styled-components";

export const PaymentStatusUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const StatusTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 18px;
  color: ${({ color }) => color ?? "#038fef"};
`;
