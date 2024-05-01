import styled from "styled-components";

export const LogoWrapperUI = styled.div`
  object-fit: cover;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapperUI = styled.div`
  position: ${({ position }) => position};
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
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

export const IconWrapperUI = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartCntTextUI = styled.p`
  position: absolute;
  font-size: 14px;
  width: 15px;
  height: 15px;
  font-family: Poppins-Bold;
  line-height: 0px;
  right: -8px;
  top: -8px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: -1;
  padding: 3px;
`;

export const SpacerUI = styled.div`
  margin-top: 80px;
`;
