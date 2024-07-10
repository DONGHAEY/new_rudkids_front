import styled from "styled-components";

export const CloudsWrapperUI = styled.div`
  width: 80%;
  display: flex;
  margin-top: 48%;
`;

export const CloudWrapperUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop ?? "0px"};
`;
