import styled from "styled-components";

export const MenuBarWrapperUI = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 430px;
  overflow: scroll;
  z-index: 999;
  pointer-events: none;
`;

export const MenuBarUI = styled.div`
  background-color: #e1e1e1;
  width: 100%;
  max-width: 310px;
  height: 100%;
  display: flex;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  pointer-events: all;
`;

export const FlexWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  height: 100%;
  width: 100%;
  padding-inline: 22px;
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
`;

export const MenuBtnTextUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 16px;
  line-height: 18px;
  white-space: pre-wrap;
`;
