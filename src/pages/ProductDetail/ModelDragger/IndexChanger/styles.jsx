import styled from "styled-components";

export const IndexChangerUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* touch-action: none; */
  /* pointer-events: none; */
`;

export const IndexChangeBtnUI = styled.button`
  margin-inline: 10px;
  padding: 5px;
  border-radius: 100%;
  background-color: white;
  line-height: 0%;
  border: none;
`;
