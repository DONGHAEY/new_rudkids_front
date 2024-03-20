import styled from "styled-components";

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
        <TitleUI dangerouslySetInnerHTML={{ __html: title }}></TitleUI>
        <ContentUI dangerouslySetInnerHTML={{ __html: content }}></ContentUI>
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
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  @font-face {
    font-family: "Poppins-Medium";
    src: url("/fonts/Poppins/Poppins-Medium.ttf");
  }
  @font-face {
    font-family: "Poppins-Bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
  }
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
  font-family: "Poppins-SemiBold";
  font-size: 19px;
  margin-top: 15px;
  line-height: 110%;
`;

const ContentUI = styled.p`
  font-family: "Poppins-Medium";
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
  font-family: "Poppins-Bold";
  font-weight: bold;
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
