import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  text-align: center;
  background-image: url("/Images/background.svg");
  background-repeat: none;
  background-size: cover;
`;

export const LogoImgUI = styled.img`
  width: 43%;
  margin-top: 10px;
`;

export const TitleWrapperUI = styled.div`
  margin-top: 40px;
  display: flex;
  padding-block: 14.35px;
  padding-inline: 16px;
  text-align: center;
  justify-content: center;
  gap: 10px;
  background-color: white;
  border-radius: 43.04px;
  border-bottom-left-radius: 0px;
`;

export const TitleTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 20px;
  line-height: 120%;
`;

export const ListUI = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
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
  font-size: 18.13px;
  letter-spacing: -5%;
  border-radius: 64px;
  z-index: 3;
  gap: 10px;
`;
