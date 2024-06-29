import styled from "styled-components";

export const ActionBarUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 18px;
  height: 60px;
`;

export const ActionButtonUI = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#F0F0F0" : "red")};
  border: none;
  border-radius: 30px;
  font-family: Poppins-Bold;
  pointer-events: all;
  color: ${({ disabled }) => (disabled ? "black" : "white")};
  font-size: 18px;
  padding-inline: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-block: 5%;
  gap: 3%;
  cursor: pointer;
`;
