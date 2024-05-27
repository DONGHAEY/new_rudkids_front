import styled from "styled-components";

export const LockUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding-block: 10px;
  padding-inline: 18px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.78);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1),
    3px 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const LockTxtUI = styled.div`
  font-family: Poppins-Bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
`;
