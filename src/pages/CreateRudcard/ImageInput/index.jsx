import { useRef } from "react";
import {
  HiddenInput,
  NameInputNmTxtUI,
  NameInputUI,
  SelectBtnUI,
} from "./styles";
import uploadIconSrc from "./assets/upload.svg";

const ImageInput = ({ setValue }) => {
  const ref = useRef();

  const changeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      setValue(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <NameInputUI>
      <NameInputNmTxtUI>프로필 사진</NameInputNmTxtUI>
      <SelectBtnUI
        onClick={() => {
          ref.current.click();
        }}
      >
        <img height="70%" src={uploadIconSrc} />
        이미지 선택
      </SelectBtnUI>
      <HiddenInput
        ref={ref}
        type="file"
        accept="image/*"
        onChange={changeHandler}
      />
    </NameInputUI>
  );
};

export default ImageInput;
