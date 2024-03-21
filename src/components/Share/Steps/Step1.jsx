import styled from "styled-components";

const rudkidsAlbumSrc = "/assets/Images/share/Steps/Step1/rudkids_album.png";
const rudkidsLogoSrc = "/assets/Images/share/Steps/Step1/rudkids_logo.png";

export const Step1 = ({ next, prev }) => {
  return (
    <Step1WrapperUI>
      <BoxTopUI>
        <img fetchpriority="high" width="100%" src={rudkidsAlbumSrc} />
      </BoxTopUI>
      <BoxMiddleUI>
        <img width="140px" fetchPriority="high" src={rudkidsLogoSrc} />
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
  @font-face {
    font-family: "Poppins-Bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
  }
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
`;

const BoxTitleUI = styled.p`
  font-family: "Poppins-Bold";
  margin: 0;
  font-size: 31px;
  line-height: 120%;
`;

const BoxButtonUI = styled.p`
  font-family: "Poppins-SemiBold";
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
  // overflow: hidden;
`;

const BoxMiddleUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  // padding: 5px;
  width: 100%;
  border-radius: 10px;
`;
const BoxBottomUI = styled.div`
  font-family: "Poppins-SemiBold";
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
