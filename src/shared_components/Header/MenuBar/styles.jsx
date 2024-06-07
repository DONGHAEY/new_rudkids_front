import styled from "styled-components";

export const DimmUI = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const MenuBarUI = styled.div`
  background-color: #e1e1e1;
  width: 100%;
  max-width: 260px;
  height: 100%;
  display: flex;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  flex-direction: column;
  justify-content: center;
  padding-inline: 22px;
  position: absolute;
  gap: 40px;
`;

export const MenuBtnListUI = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 12px;
`;

export const MenuBtnUI = styled.button`
  width: 100%;
  aspect-ratio: 1/1;
  font-size: 16px;
  background: ${({ background }) => background ?? "none"};
  border: none;
  border-radius: 22px;
  color: black;
  cursor: pointer;
  border: solid 1px #b0b0b0;
`;

export const MenuBtnTextUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 16px;
  line-height: 18px;
  white-space: pre-wrap;
`;
