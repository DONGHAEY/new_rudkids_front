// import { useRef } from "react";
import {
  DescriptionInputUI,
  InputNmTxtUI,
  LengthTxtUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";

const DescriptionInput = ({ register }) => {
  const maxLength = 20;

  return (
    <DescriptionInputUI>
      <InputNmTxtUI>당신이 루키즈인 이유</InputNmTxtUI>
      <TextAreaWrapperUI>
        <TextAreaUI
          {...register("description", {
            required: "루키즈 설명글을 입력하세용",
            maxLength,
            minLength: 5,
          })}
          placeholder="당신이 왜 루키즈인지 적어보세요"
        />
        <LengthTxtUI>11</LengthTxtUI>
      </TextAreaWrapperUI>
    </DescriptionInputUI>
  );
};

export default DescriptionInput;
