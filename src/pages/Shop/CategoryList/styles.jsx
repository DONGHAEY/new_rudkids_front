import styled from "styled-components";

export const ScrollUI = styled.div`
  width: 100%;
  overflow: scroll;
  margin-block: 30px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

export const SpacerUI = styled.div`
  margin-left: 5%;
  background: black;
`;

export const TypeBtnListUI = styled.div`
  display: flex;
  margin-left: 5%;
  gap: 10px;
`;

export const TypeButtonUI = styled.button`
  display: flex;
  padding-inline: 17px;
  border: none;
  padding-block: 9px;
  background-color: ${({ $selected }) =>
    $selected ? "white" : "rgba(255, 255, 255, 0.31)"};
  color: ${({ $selected }) => ($selected ? "black" : "black")};
  border-radius: 28.48px;
  font-family: Poppins-Bold;
  font-size: 17.09px;
  line-height: 100%;
`;
