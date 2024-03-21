import styled from "styled-components";
import { PoppinsFonts } from "../../../fonts/Poppins";

const rudkidsAlbumSrc = "/assets/Images/share/Steps/Step1/rudkids_album.webp";
const rudkidsLogoSrc = "/assets/Images/share/Steps/Step1/rudkids_logo.webp";

export const Step1 = ({ next, prev }) => {
  return (
    <Step1WrapperUI>
      <BoxTopUI>
        <img width="100%" src={rudkidsAlbumSrc} />
      </BoxTopUI>
      <BoxMiddleUI>
        <img width="140px" src={rudkidsLogoSrc} />
        <BoxTitleWrapperUI>
          <BoxTitleUI>Guys! Don't be</BoxTitleUI>
          <BoxTitleUI>so boring.</BoxTitleUI>
          <BoxTitleUI>Just Kidding.</BoxTitleUI>
        </BoxTitleWrapperUI>
        <BoxButtonUI onClick={next}>Rudkids world</BoxButtonUI>
      </BoxMiddleUI>
      <BoxBottomUI>Rudkids</BoxBottomUI>
    </Step1WrapperUI>
  );
};

const BoxTitleWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxTitleUI = styled.p`
  font-family: ${PoppinsFonts.poppinsBold.fontFamily};
  margin: 0;
  font-size: 31px;
  line-height: 120%;
`;

const BoxButtonUI = styled.p`
  font-family: ${PoppinsFonts.poppinsSemiBold.fontFamily};
  background-color: black;
  color: white;
  border-radius: 30px;
  padding-inline: 25px;
  padding-block: 3px;
  font-size: 24px;
  margin-top: 13px;
  cursor: pointer;
`;
const BoxTopUI = styled.div`
  width: 100%;
  height: 250px;
`;

const BoxMiddleUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-radius: 10px;
`;
const BoxBottomUI = styled.div`
  font-family: ${PoppinsFonts.poppinsSemiBold.fontFamily};
  padding-block: 30px;
  font-size: 16px;
`;

const Step1WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
