import styled from "styled-components";

export const EnteringSchoolUI = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 247, 51, 1) 50%,
    rgba(255, 142, 5, 1) 100%
  );
`;

export const SchoolImgWrapperUI = styled.div`
  width: 90%;
  z-index: 4;
  position: absolute;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SchoolSignUI = styled.p`
  position: absolute;
  bottom: -16%;
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 8vw, 1.6rem);
  background-color: white;
  padding-inline: 7%;
  padding-block: 3%;
  border-radius: clamp(0rem, 16vw, 3.2rem);
`;

export const SmokeLtWrapperUI = styled.div`
  position: absolute;
  width: 30%;
  top: -60%;
`;

export const SchoolImgUI = styled.img`
  width: 100%;
`;

export const GrassImgUI = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Child1ImgUI = styled.img`
  position: absolute;
  width: 30%;
  top: 5%;
`;

export const Child2ImgUI = styled.img`
  position: absolute;
  width: 20%;
  top: 10%;
  left: 10%;
`;

export const Child3ImgUI = styled.img`
  position: absolute;
  width: 30%;
  top: 5%;
  right: 14%;
`;
