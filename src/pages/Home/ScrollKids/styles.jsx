import styled from "styled-components";

export const ScrollUI = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: end;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
  z-index: 2;
`;
