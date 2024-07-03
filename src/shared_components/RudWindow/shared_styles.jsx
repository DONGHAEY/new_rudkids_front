import styled from "styled-components";

export const WindowButtonUI = styled.button`
  width: ${({ width }) => width ?? "100%"};
  background: ${({ background }) => background ?? "rgba(76, 183, 75, 1)"};
  border: 4px solid ${({ border }) => border ?? "rgba(62, 149, 61, 1)"};
  color: ${({ color }) => color ?? "white"};
  box-shadow: 1px 1px 0px 3px black;
  font-family: Pretendard-Bold;
  font-size: clamp(0.7rem, 3vw, 0.9rem);
  text-decoration: none;
`;
