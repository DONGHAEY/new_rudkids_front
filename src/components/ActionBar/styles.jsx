import styled from "styled-components";

export const SpacerUI = styled.div`
  margin-top: 70px;
`;

export const ActionBarUI = styled.div`
  position: absolute;
  height: 70px;
  max-width: 100%;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(255, 255, 255 0.5);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
`;

export const ActionButtonUI = styled.button`
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "red"};
  border: none;
  border-radius: 30px;
  font-family: Poppins-Bold;
  color: white;
  font-size: 20px;
  padding-inline: 20px;
  width: 100%;
  margin-inline: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 50px;
  gap: 10px;
  cursor: pointer;
`;
