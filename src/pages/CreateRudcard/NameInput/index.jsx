import { InputUI, NameInputNmTxtUI, NameInputUI } from "./styles";

const NameInput = ({ register }) => {
  return (
    <NameInputUI>
      <NameInputNmTxtUI>이름</NameInputNmTxtUI>
      <InputUI
        placeholder="이름을 입력하세요"
        {...register("name", {
          required: true,
          minLength: 2,
        })}
      />
    </NameInputUI>
  );
};

export default NameInput;
