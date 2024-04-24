import styled from "styled-components";

export const LogoWrapperUI = styled.div`
  object-fit: cover;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapperUI = styled.div`
  position: absolute;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  font-size: 25px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const HeaderUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 30px;
`;

export const SpacerUI = styled.div`
  margin-top: 80px;
`;
