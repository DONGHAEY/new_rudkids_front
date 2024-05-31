import {
  DescriptionInputUI,
  InputNmTxtUI,
  LengthTxtUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";
import ErrorMsg from "../ErrorMsg";
import { useEffect, useState } from "react";

const DescriptionInput = ({ field, fieldState, formState }) => {
  const maxLength = 60;

  const [description, setDescription] = useState("");

  useEffect(() => {
    field?.onChange(description);
  }, [description]);

  return (
    <DescriptionInputUI>
      <InputNmTxtUI>당신이 루키즈인 이유</InputNmTxtUI>
      <TextAreaWrapperUI>
        <TextAreaUI
          ref={field.ref}
          value={description}
          onChange={(e) => {
            if (e.target.value?.length > maxLength) {
              return;
            }
            setDescription(e.target.value);
          }}
          placeholder="당신이 왜 루키즈인지 적어보세요"
        />
        <LengthTxtUI>{maxLength - field.value?.length}</LengthTxtUI>
      </TextAreaWrapperUI>
      <ErrorMsg>{fieldState.error && fieldState?.error?.message}</ErrorMsg>
    </DescriptionInputUI>
  );
};

export default DescriptionInput;
