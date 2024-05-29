import { useRef } from "react";
import { InputUI, NameInputNmTxtUI, NameInputUI } from "./styles";

const ImageInput = ({ setValue }) => {
  const ref = useRef();

  return (
    <NameInputUI>
      <NameInputNmTxtUI>사진</NameInputNmTxtUI>
      <InputUI
        ref={ref}
        type="file"
        accept="image/*"
        required
        onChange={(e) => {
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
