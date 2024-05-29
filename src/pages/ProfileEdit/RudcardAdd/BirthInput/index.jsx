import {
  InputUI,
  NameInputNmTxtUI,
  BirthInputUI,
  YearInputUI,
  InputListUI,
} from "./styles";

const BirthInput = ({ register }) => {
  return (
    <BirthInputUI>
      <NameInputNmTxtUI>생일</NameInputNmTxtUI>
      <InputListUI>
        <YearInputUI
          placeholder="yyyy"
          {...register("birth.year", {
            require: "년도 입력은 필수",
            maxLength: 4,
            minLength: 4,
          })}
          type="number"
        />
        <InputUI
          placeholder="mm"
          {...register("birth.month", {
            require: "월 입력은 필수",
            maxLength: 2,
            minLength: 2,
          })}
        />
        <InputUI
          placeholder="dd"
          {...register("birth.date", {
            require: "일 입력은 필수",
            minLength: 2,
            maxLength: 2,
          })}
        />
      </InputListUI>
    </BirthInputUI>
  );
};

export default BirthInput;
