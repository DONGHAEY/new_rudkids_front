import styled from "styled-components";

export const Page2UI = styled.div`
  width: 100%;
  justify-content: space-between;
  z-index: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SectionUI = styled.div`
  height: 30%;
  /* background-color: gainsboro; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClothUI = styled.div`
  width: 70%;
  /* margin-top: 20%; */
  /* background-color: gainsboro; */
  position: relative;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaceImgUI = styled.img`
  position: absolute;
  width: 50%;
  top: -30%;
`;

export const ForMakersImgUI = styled.img`
  position: absolute;
  right: 13%;
  bottom: 16%;
  width: 20%;
`;

export const ArrowWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftArrowImgUI = styled.img`
  width: 30%;
  margin-left: -15%;
`;

export const RightArrowImgUI = styled.img`
  width: 30%;
  margin-right: -15%;
`;

export const NameBoxUI = styled.div`
  width: 55%;
  min-height: 30px;
  background-color: blue;
  font-size: max(1.2vw, 20px);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0%;
  border-radius: 10px;
  font-family: boba;
  border: solid 5px rgba(204, 204, 204, 1);
  z-index: 9;
`;

export const WearingSignUI = styled.p`
  font-size: max(1.3vw, 18px);
  font-family: boba;
  color: blue;
  margin-top: 2%;
  z-index: 9;
`;
