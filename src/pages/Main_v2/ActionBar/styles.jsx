import styled from "styled-components";

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  max-width: 430px;
  margin-inline: auto;
  overflow: hidden;
  z-index: 9;
  height: 150px;
  pointer-events: none;
`;

export const ButtonUI = styled.button`
  display: flex;
  height: 100%;
  z-index: -1;
  background: none;
  border: none;
  position: relative;
  pointer-events: all;
`;

export const MoreButtonUI = styled(ButtonUI)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background: none;
  border: none;
  left: -15px;
  bottom: -15px;
  color: black;
`;

export const MoreButtonTxtUI = styled.div`
  z-index: 1;
  position: absolute;
  margin-top: -20px;
  font-family: Poppins-Bold;
  letter-spacing: -1px;
  font-size: 20px;
`;
