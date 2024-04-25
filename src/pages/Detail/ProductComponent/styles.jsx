import styled from "styled-components";

export const ProductComponentWrapperUI = styled.div`
  background-color: #ededed;
  position: relative;
  object-fit: cover;
  height: 90%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $selected }) => ($selected ? "solid black 1px" : "none")};
  aspect-ratio: 1/1;
`;

export const ProductComponentImgUI = styled.img`
  position: absolute;
  height: 80%;
`;
