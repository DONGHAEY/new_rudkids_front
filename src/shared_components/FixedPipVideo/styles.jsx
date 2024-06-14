import styled from "styled-components";

export const FixedPipVideoUI = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 6px solid white;
  position: fixed;
  top: 34px;
  right: -10px;
  overflow: hidden;
  z-index: 9;
`;

export const VideoUI = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
