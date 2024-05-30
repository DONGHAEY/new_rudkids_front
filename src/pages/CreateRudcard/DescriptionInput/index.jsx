import {
  DescriptionInputUI,
  InputNmTxtUI,
  LengthTxtUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";
import ErrorMsg from "../ErrorMsg";

const DescriptionInput = ({ field, fieldState, formState }) => {
  const maxLength = 40;

  return (
    <DescriptionInputUI>
      <InputNmTxtUI>당신이 루키즈인 이유</InputNmTxtUI>
      <TextAreaWrapperUI>
        <TextAreaUI {...field} placeholder="당신이 왜 루키즈인지 적어보세요" />
        <LengthTxtUI>{maxLength - field.value?.length}</LengthTxtUI>
      </TextAreaWrapperUI>
      <ErrorMsg>{fieldState.error && fieldState?.error?.message}</ErrorMsg>
    </DescriptionInputUI>
  );
};

export default DescriptionInput;
