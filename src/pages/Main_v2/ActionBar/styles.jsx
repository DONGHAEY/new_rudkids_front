import styled from "styled-components";

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  max-width: 430px;
  margin-inline: auto;
  overflow: hidden;
  z-index: 9;
  height: 150px;
`;

export const ButtonUI = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background: none;
  border: none;
`;

export const MoreButtonUI = styled(ButtonUI)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  background: none;
  border: none;
  left: -25px;
  bottom: -25px;
`;

export const MoreButtonTxtUI = styled.div`
  z-index: 1;
  position: absolute;
  margin-top: -20px;
  font-family: Poppins-Bold;
  letter-spacing: -1px;
  font-size: 20px;
`;
