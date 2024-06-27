import styled from "styled-components";

export const ModelSelectUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: end;
  overflow-x: scroll;
  padding-bottom: 12.5px;
  /* margin-top: 24px; */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

export const ModelUI = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NameTextUI = styled.p`
  font-size: 12px;
  font-family: Poppins-Bold;
`;

export const ProductComponentImgWrapperUI = styled.div`
  position: relative;
  object-fit: cover;
  width: 110px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: ${({ $selected }) =>
    !$selected ? "solid #E9E9E9 3px" : "solid #A9A9A9 3px"};
  background-color: white;
  border-radius: 13.5px;
`;

export const ProductComponentImgUI = styled.img`
  /* position: absolute; */
  width: 90%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;
