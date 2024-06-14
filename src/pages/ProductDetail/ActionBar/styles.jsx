import styled from "styled-components";

export const SpacerUI = styled.div`
  margin-top: 70px;
`;

export const ActionBarWrapperUI = styled.div`
  position: fixed;
  height: 100px;
  max-width: 430px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(255, 255, 255 0.3);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  pointer-events: none;
`;

export const ActionBarUI = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ActionButtonUI = styled.button`
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "red"};
  border: none;
  border-radius: 30px;
  font-family: Poppins-Bold;
  pointer-events: all;
  color: white;
  font-size: 23px;
  padding-inline: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: 10px;
  cursor: pointer;
`;
