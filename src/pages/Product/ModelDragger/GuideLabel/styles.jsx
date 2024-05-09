import styled from "styled-components";

export const GuideLabelUI = styled.div`
  position: absolute;
  background-color: rgba(67, 67, 67, 0.83);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  border-radius: 11.6px;
  letter-spacing: -1px;
  font-family: Poppins-Medium;
`;

export const HandImgUI = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 163px;
  max-height: 50%;
  z-index: -1;
`;
