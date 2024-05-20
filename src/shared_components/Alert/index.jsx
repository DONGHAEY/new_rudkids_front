import {
  AlertBoxUI,
  ModalUI,
  BrUI,
  ButtonUI,
  ButtonWrapperUI,
  ContentUI,
  ImgUI,
  ImgWrapperUI,
  TitleUI,
} from "./styles";

export const Alert = ({
  imageUrl = null,
  title = null,
  content = null,
  buttonContent = null,
  onChecked = null,
  open = false,
}) => {
  return (
    <ModalUI hidden={!open}>
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
    </ModalUI>
  );
};
