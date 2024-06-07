import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  text-align: center;
`;

export const LogoImgUI = styled.img`
  width: 43%;
  margin-top: 10px;
`;

export const TitleWrapperUI = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  gap: 10px;
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
  background: ${({ background }) => background ?? "#efefef"};
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
`;

export const GoOrderBtnUI = styled.div`
  position: fixed;
  width: 90%;
  max-width: 300px;
  padding-block: 15.21px;
  background-color: #2a2a2a;
  color: white;
  bottom: 10px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  letter-spacing: -5%;
  border-radius: 13.31px;
  gap: 10px;
`;
