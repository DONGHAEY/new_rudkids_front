import styled from "styled-components";
import background from "../assets/background.webp";

export const Page2UI = styled.div`
  width: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${background});
  background-repeat: none;
  background-size: cover;
`;

export const SectionUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClothSectionUI = styled.div`
  width: 80%;
  aspect-ratio: 1/1;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ClothImgUI = styled.img`
  position: absolute;
  height: 80%;
  bottom: 0;
`;

export const FaceImgUI = styled.img`
  z-index: 1;
  width: 39%;
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
  margin-left: -10%;
`;

export const RightArrowImgUI = styled.img`
  width: 30%;
  margin-right: -10%;
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
