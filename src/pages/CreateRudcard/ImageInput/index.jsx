import { useRef } from "react";
import { NameInputNmTxtUI, NameInputUI, SelectBtnUI } from "./styles";
import uploadIconSrc from "./assets/upload.svg";

const ImageInput = ({ setValue }) => {
  const ref = useRef();

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
      <input
        style={{
          display: "none",
        }}
        ref={ref}
        type="file"
        accept="image/*"
        required
        onChange={() => {
          const file = ref.current.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result;
            setValue(result);
          };
          reader.readAsDataURL(file);
        }}
      />
    </NameInputUI>
  );
};

export default ImageInput;
