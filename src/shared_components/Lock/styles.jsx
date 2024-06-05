import styled from "styled-components";

export const LockUI = styled.div`
  display: flex;
  position: ${({ position }) => position};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 18px;
  gap: 6px;
  z-index: 99;
  padding-block: 13px;
  padding-inline: 18px;
  border-radius: 100px;
  background-color: #f9e000;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1),
    3px 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const LockTxtUI = styled.div`
  font-family: Poppins-SemiBold;
  font-size: 18.3px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const SpacerUI = styled.div`
  min-height: 80px;
`;
