import styled from "styled-components";

export const ButtonUI = styled.button`
  display: flex;
  bottom: 20px;
  align-items: center;
  justify-content: center;
  padding-block: 18px;
  background-color: ${({ $disable }) => ($disable ? "#C7C7C7" : "#EC0000")};
  line-height: 20px;
  font-family: Poppins-Bold;
  font-size: 20px;
  width: 85%;
  color: white;
  border: none;
  border-radius: 24px;
`;

export const ButtonWrapperUI = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 20px;
`;
export const SpacerUI = styled.div`
  margin-top: 80px;
`;
