import styled from "styled-components";

export const PaymentStatusUI = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatusTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 18px;
  color: ${({ color }) => color ?? "#038fef"};
`;
