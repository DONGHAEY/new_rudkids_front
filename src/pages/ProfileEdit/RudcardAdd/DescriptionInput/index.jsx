import {
  DescriptionInputUI,
  InputNmTxtUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";

const DescriptionInput = ({ register }) => {
  return (
    <DescriptionInputUI>
      <InputNmTxtUI>당신이 루키즈인 이유</InputNmTxtUI>
      <TextAreaWrapperUI>
        <TextAreaUI
          {...register("description", {
            require: "루키즈 설명글을 입력하세용",
          })}
          placeholder="당신이 왜 루키즈인지 적어보세요"
        />
      </TextAreaWrapperUI>
    </DescriptionInputUI>
  );
};

export default DescriptionInput;
