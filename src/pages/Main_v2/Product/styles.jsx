import styled from "styled-components";

export const ProductUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

export const ProductTagUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;
  min-height: 52px;
  padding-block: 5px;
  font-family: Poppins-Bold;
  letter-spacing: -0.51px;
  padding-inline: 20px;
  z-index: 1;
  box-shadow: 3px 3px 8px rgba(0, 0.3, 0.3, 0.2);
  border: ${({ $selected }) => ($selected ? "solid #FFE639 5px" : "none")};
`;

export const ProductTagString = styled.div`
  position: absolute;
  width: 7.9px;
  height: 63px;
  background-color: #aea7a7;
  transform: rotateZ(16deg);
  top: 43px;
  z-index: 0;
`;

export const ProductHangedString = styled.div`
  width: 23px;
  height: 7.29px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #aea7a7;
  position: absolute;
  top: 13px;
  margin-right: 35px;
  transform: rotateZ(20deg);
`;

export const ProductImgWrapperUI = styled.div`
  border: ${({ $selected }) => ($selected ? "solid #FFE639 5px" : "none")};
  aspect-ratio: 1/1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  border-radius: 20px;
  z-index: 1;
  position: relative;
  box-shadow: 3px 3px 8px rgba(0, 0.3, 0.3, 0.2);
`;
