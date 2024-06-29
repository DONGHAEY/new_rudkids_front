import styled from "styled-components";

export const MenuBtnUI = styled.button`
  width: 100%;
  aspect-ratio: 1/1;
  font-size: 16px;
  background: ${({ background }) => background ?? "none"};
  border: none;
  border-radius: 20%;
  color: black;
  cursor: pointer;
  border: solid 1px #b0b0b0;
`;

export const MenuBtnTextUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: clamp(0.5rem, 5vw, 1rem);
  line-height: 120%;
  white-space: pre-wrap;
`;
