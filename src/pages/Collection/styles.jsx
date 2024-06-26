import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const TitleWrapperUI = styled.div`
  margin-top: 10%;
  display: flex;
  padding-block: 3.5%;
  padding-inline: 5%;
  text-align: center;
  justify-content: center;
  gap: 3%;
  background-color: white;
  border-radius: 43.04px;
  border-bottom-left-radius: 0px;
  animation: bounceFadeIn 1s;
`;

export const TitleTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 5.5vw, 1.4rem);
  line-height: 120%;
`;

export const ListUI = styled.div`
  margin-top: 7%;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 3%;
  width: 90%;
`;

export const CollectionBoxUI = styled.div`
  /* background: ${({ background }) => background ?? "#efefef"}; */
  background-color: white;
  border-radius: 15px;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: Poppins-Bold;
  font-size: 12px;
  line-height: 120%;
  border: solid#f1f1f1 3px;
  gap: 10px;
  animation: bounceFadeIn 1s;
`;

export const CollectionImgUI = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
`;

export const StampImgUI = styled.img`
  width: 40%;
  position: absolute;
  top: ${({ top }) => top ?? 0}%;
  left: ${({ left }) => left ?? 0}%;
  transform: rotateZ(${({ rotateZ }) => rotateZ ?? 50}deg);
`;

export const BlankCollectionBoxUI = styled(CollectionBoxUI)`
  border: #b8b8b8 solid 1px;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: Poppins-Bold;
  font-size: 36px;
  color: #cccccc;
`;

export const GoOrderBtnUI = styled.div`
  position: fixed;
  width: 90%;
  max-width: 300px;
  padding-block: 21px;
  background: linear-gradient(180deg, #14ff00 0%, #10ce00 100%);
  color: white;
  text-shadow: rgba(0, 0, 0, 0.3) 2px 2px 2px;
  border: #00b01c solid 1px;
  bottom: 20px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-SemiBold;
  /* text-shadow: black; */
  font-size: clamp(0rem, 6.7vw, 1.3rem);
  letter-spacing: -5%;
  border-radius: 64px;
  z-index: 3;
  gap: 10px;
`;
