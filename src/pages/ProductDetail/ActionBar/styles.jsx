import styled from "styled-components";

export const SpacerUI = styled.div`
  margin-top: 70px;
`;

export const ActionBarWrapperUI = styled.div`
  position: fixed;
  height: 80px;
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
  gap: 2%;
`;

export const ActionButtonUI = styled.button`
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "red"};
  color: ${({ $color }) => $color ?? "white"};
  border: none;
  border-radius: 30px;
  font-family: Poppins-Bold;
  pointer-events: all;
  font-size: clamp(0.8rem, 4.3vw, 1.1rem);
  padding-inline: 8%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 75%;
  gap: 5%;
  cursor: pointer;
`;
