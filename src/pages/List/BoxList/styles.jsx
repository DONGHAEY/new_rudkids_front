import styled from "styled-components";

export const BoxListUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-bottom: hidden;
  justify-content: center;
`;

export const BoxWrapperUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
`;

export const NavigateButtonUI = styled.button`
  padding: 15px;
  padding-inline: 20px;
  background-color: #ff0000;
  color: white;
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  font-family: Poppins-Bold;
  z-index: 1;
`;
