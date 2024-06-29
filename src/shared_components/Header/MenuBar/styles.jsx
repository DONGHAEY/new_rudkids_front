import styled from "styled-components";

export const DimmUI = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const MenuBarUI = styled.div`
  background-color: #e1e1e1;
  width: 85%;
  max-width: 230px;
  height: 100%;
  overflow: scroll;
  display: flex;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  flex-direction: column;
  padding-inline: 5%;
  position: absolute;
  gap: 5%;
`;

export const MenuBtnListUI = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 5%;
`;
