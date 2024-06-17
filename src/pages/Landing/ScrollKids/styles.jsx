import styled from "styled-components";

export const ScrollUI = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  align-items: end;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* 파이어폭스 */
  z-index: 2;
`;
