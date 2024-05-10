import styled from "styled-components";

export const ShippingEventUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const CenterUI = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonUI = styled.button`
  position: absolute;
  bottom: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "black"};
  color: white;
  border: none;
  width: 50%;
  height: 55px;
  border-radius: 18px;
  text-align: center;
  font-family: Pretendard-Bold;
  font-size: 18px;
  cursor: pointer;
`;
