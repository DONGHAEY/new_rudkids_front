import styled from "styled-components";

export const ProductComponentUI = styled.div`
  margin: 6px;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  gap: 8px;
`;

export const NameTextUI = styled.p`
  font-size: 12px;
  font-family: Poppins-Bold;
`;

export const ProductComponentImgWrapperUI = styled.div`
  background-color: #ededed;
  position: relative;
  object-fit: cover;
  height: 110px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $selected }) => ($selected ? "solid black 1px" : "none")};
  border-radius: 13.5px;
`;

export const ProductComponentImgUI = styled.img`
  position: absolute;
  height: 80%;
`;
