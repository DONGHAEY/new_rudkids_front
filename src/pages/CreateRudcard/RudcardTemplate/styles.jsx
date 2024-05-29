import styled from "styled-components";

export const CardTemplateUI = styled.div`
  width: 100%;
  position: relative;
`;

export const TextBox = styled.p`
  font-family: nameFontSrc;
  font-size: 4vw;
  color: white;
  position: absolute;
  top: 16%;
  right: 25%;
  width: 25%;
  height: 5%;
  text-align: center;
  font-family: "CardNameFont";
  @media (min-width: 430px) {
    font-size: 10px;
  }
`;

export const TextBox2 = styled.p`
  font-family: CardNameFont;
  font-size: 4vw;
  color: white;
  position: absolute;
  top: 23%;
  right: 18%;
  width: 25%;
  height: 5%;
  text-align: center;
  @media (min-width: 430px) {
    font-size: 10px;
  }
`;

export const ProfileImgUI = styled.img`
  position: absolute;
  top: 18%;
  left: 10%;
  height: 47.5%;
  z-index: 1;
`;

export const QrImgUI = styled.img`
  position: absolute;
  bottom: 16%;
  right: 12%;
  height: 15%;
`;

export const CardDescriptionUI = styled.div`
  position: absolute;
  top: 35%;
  left: 41.5%;
  width: 49%;
  height: 12%;
  color: white;
  font-family: CardDescription;
  font-size: 2.3vw;
`;

export const IssuedAtUI = styled.p`
  position: absolute;
  top: 53%;
  right: 40.5%;
  width: 19%;
  font-size: 2vw;
  color: rgba(232, 82, 83, 1);
  font-family: CardDate;
  text-align: center;
`;

export const ExipiredAtUI = styled.div`
  position: absolute;
  font-family: CardNameFont;
  top: 53%;
  right: 19.5%;
  width: 19%;
  font-size: 2vw;
  color: rgba(232, 82, 83, 1);
  font-family: CardDate;
  text-align: center;
`;

export const Order1UI = styled.div`
  font-family: CardOrder;
  font-size: 3.3vw;
  color: white;
  position: absolute;
  bottom: 20%;
  left: 34%;
`;

export const Order2UI = styled.div`
  font-family: CardOrder;
  width: 13%;
  text-align: center;
  font-size: 6.6vw;
  color: white;
  position: absolute;
  top: 15%;
  left: 78%;
`;
