import styled from "styled-components";

export const RowWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: auto;
  margin: 0 auto;
  width: 100%;
  max-width: 325.33px;
  gap: 4%;
  animation: bounceFadeIn 1s;
`;

export const InfoBoxUI = styled.div`
  width: 100%;
  max-width: 98.25px;
  aspect-ratio: 1/1;
  border: none;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  justify-content: center;
  border-radius: 15px;
  font-size: clamp(0rem, 5vw, 1rem);
  font-family: Poppins-SemiBold;
  position: relative;
`;
