import styled from "styled-components";

export const ProductsUI = styled.div`
  display: flex;
  flex-direction: row;
  overflow: visible;
  overflow: scroll;
  margin-block: 20px;
  gap: 4%;
  padding-inline: 5%;
`;

export const ProductUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LimitedUI = styled.div`
  padding: 10px;
  border-radius: 100%;
  position: absolute;
  background-color: red;
  color: white;
  font-size: 10px;
  top: -13%;
  left: -15%;
`;

export const ProductImgWrapperUI = styled.div`
  position: relative;
  width: 125px;
  margin-top: 18px;
  aspect-ratio: 1/1;
  background: ${({ bgColor }) => bgColor ?? "rgba(144, 234, 122, 1)"};
  border: solid ${({ bdColor }) => bdColor ?? "rgba(0, 145, 71, 1)"} 3px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductTxtWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  border: solid 2px black;
  background-color: white;
  color: black;
  margin-top: 2%;
  padding-inline: 6%;
  padding-block: 3%;
`;

export const ProductNmUI = styled.p`
  font-size: 14px;
  font-family: Poppins-Bold;
  line-height: 110%;
`;
export const ProductPriceUI = styled.p`
  font-size: 10px;
  font-family: Poppins-Bold;
  line-height: 110%;
`;
