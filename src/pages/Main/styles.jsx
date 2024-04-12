import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const TabToPlayWrapperUI = styled.div`
  position: absolute;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  align-items: center;
  font-size: 35px;
`;

export const VideoWrapperUI = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SkipButtomWrapperUI = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  opacity: 0;
`;

export const EngagingVideoUI = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
`;
