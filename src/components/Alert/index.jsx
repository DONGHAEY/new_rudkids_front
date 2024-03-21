import styled from "styled-components";
import PoppinsBoldFont from "../../fonts/Poppins/Poppins-Bold.ttf";
import PoppinsSemiBoldFont from "../../fonts/Poppins/Poppins-SemiBold.ttf";
import PoppinsMediumFont from "../../fonts/Poppins/Poppins-Medium.ttf";
import { PoppinsFonts } from "../../fonts/Poppins";

export const Alert = ({
  imageUrl = null,
  title = null,
  content = null,
  buttonContent = null,
  onChecked = null,
  open = false,
}) => {
  return (
    <AlertBoxWrapperUI hidden={!open}>
      <AlertBoxUI>
        {imageUrl && (
          <ImgWrapperUI>
            <ImgUI src={imageUrl} alt={"alert icon"} />
          </ImgWrapperUI>
        )}
        <TitleUI dangerouslySetInnerHTML={{ __html: title }} />
        <ContentUI dangerouslySetInnerHTML={{ __html: content }} />
        <BrUI />
        <ButtonWrapperUI>
          <ButtonUI onClick={onChecked}>{buttonContent}</ButtonUI>
        </ButtonWrapperUI>
      </AlertBoxUI>
    </AlertBoxWrapperUI>
  );
};

const AlertBoxWrapperUI = styled.div`
  background-color: rgba(0, 0, 0, 50%);
  position: absolute;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AlertBoxUI = styled.div`
  background-color: rgba(255, 255, 255, 100%);
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-inline: 20px;
`;

const ImgWrapperUI = styled.div`
  height: 70px;
  margin-top: 15px;
`;

const ImgUI = styled.img`
  height: 100%;
  object-fit: cover;
`;

const TitleUI = styled.p`
  font-family: ${PoppinsFonts.poppinsSemiBold.fontFamily};
  font-size: 19px;
  margin-top: 15px;
  line-height: 110%;
`;

const ContentUI = styled.p`
  font-family: ${PoppinsFonts.poppinsMedium.fontFamily};
  font-size: 14px;
  margin-top: 10px;
  line-height: 110%;
`;

const ButtonWrapperUI = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonUI = styled.button`
  border: none;
  background: none;
  color: #368bff;
  font-family: ${PoppinsFonts.poppinsBold.fontFamily};
  font-size: 16px;
  cursor: pointer;
`;

const BrUI = styled.hr`
  height: 1px;
  width: 90%;
  border: none;
  background-color: rgba(172, 172, 172, 50%);
  margin-top: 15px;
`;
