import styled from "styled-components";

export const LoaderUI = styled.div`
  width: 100%;
  height: 100%;
  position: ${({ position }) => position ?? "block"};
  max-width: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  gap: 30px;
  font-family: Pretendard-Bold;
  touch-action: none;
  pointer-events: none;
  z-index: 999;
  color: gray;
`;
