import styled from "styled-components";

export const MenuBtnUI = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  background: ${({ background }) => background ?? "none"};
  border: none;
  border-radius: 20%;
  color: black;
  cursor: pointer;
  border: solid 1px #b0b0b0;
  text-decoration: none;
`;

export const MenuBtnTextUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: clamp(0rem, 5vw, 0.8rem);
  line-height: 100%;
  margin-top: 6%;
  white-space: pre-wrap;
`;
