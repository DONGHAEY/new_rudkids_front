import styled from "styled-components";

export const PersonaUI = styled.div`
  width: 100%;
  margin-top: 2%;
  position: relative;
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FaceWrapperUI = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  aspect-ratio: 1/1;
  max-width: 300px;
`;

export const RudkidsSignUI = styled.div`
  padding: 5%;
  background: red;
  color: white;
  font-family: dinosaur;
  position: absolute;
  border-radius: 100%;
  left: 0%;
  top: 13%;
  text-align: center;
  font-size: clamp(0rem, 4vw, 1rem);
  text-shadow: black clamp(0rem, 2vw, 0.1rem) clamp(0rem, 2vw, 0.1rem);
`;

export const PersonaFaceUI = styled.img`
  width: 100%;
`;

export const PersonaNameUI = styled.p`
  position: absolute;
  font-family: dinosaur;
  font-size: clamp(0rem, 5vw, 1rem);
  -webkit-text-stroke: clamp(0rem, 2vw, 0.1rem) black;
  text-shadow: black 2px 3px;
  color: white;
  top: 14%;
`;

export const IntroduceSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -0.5%;
`;

export const FromTxtUI = styled.p`
  background-color: black;
  color: white;
  border-radius: clamp(0rem, 2.8vw, 0.7rem);
  padding: clamp(0rem, 2.8vw, 0.7rem);
  font-family: dinosaur;
  font-size: clamp(0rem, 2.8vw, 0.7rem);
`;

export const SayBoxUI = styled.div`
  max-width: 70%;
  text-align: center;
  background-color: white;
  border-radius: clamp(0rem, 5vw, 1rem);
  padding: 3%;
  padding-inline: 4%;
  border: solid 2px black;
  font-family: dinosaur;
  font-size: clamp(0rem, 2.8vw, 0.7rem);
  white-space: pre-wrap;
`;

export const ArrowsSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
`;
