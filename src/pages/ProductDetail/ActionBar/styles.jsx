import styled from "styled-components";

export const ActionBarWrapperUI = styled.div`
  position: sticky;
  padding-block: 3%;
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
  border-radius: clamp(0rem, 12vw, 1.8rem);
  font-family: Poppins-Bold;
  pointer-events: all;
  font-size: clamp(0rem, 4.3vw, 1rem);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-block: 5%;
  gap: 5%;
  cursor: pointer;
`;
