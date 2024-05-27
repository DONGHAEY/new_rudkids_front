import styled from "styled-components";

export const ProductUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
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
  z-index: 2;
  box-shadow: 3px 3px 8px rgba(0, 0.3, 0.3, 0.2);
  border: ${({ $selected }) =>
    $selected ? "solid #FFE639 5px" : "solid rgba(255, 255, 255, 0) 5px"};
`;

export const ProductTagString = styled.div`
  width: 7.9px;
  height: 63px;
  background-color: #aea7a7;
  transform: rotateZ(16.27deg);
  top: 48px;
  position: absolute;
  z-index: 1;
  margin-left: 8px;
`;

export const ProductHangedString = styled.div`
  width: 23px;
  height: 7.29px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #aea7a7;
  z-index: 3;
  position: absolute;
  top: 100px;
  margin: auto;
  margin-right: 30px;
  transform: rotateZ(190deg);
`;

export const ProductImgWrapperUI = styled.div`
  aspect-ratio: 1/1;
  /* background-color: white; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  border-radius: 20px;
  margin-right: 20px;
  object-fit: cover;
  z-index: 1;
  position: relative;
`;

export const ProductImgUI = styled.img`
  /* box-shadow: 3px 3px 8px rgba(0, 0.3, 0.3, 0.2); */
  height: 100%;
  z-index: -1;
`;
