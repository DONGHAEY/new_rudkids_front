import {
  InputUI,
  NameInputNmTxtUI,
  BirthInputUI,
  YearInputUI,
  InputListUI,
} from "./styles";

const BirthInput = ({ year, month, date, errorMessage }) => {
  return (
    <BirthInputUI>
      <NameInputNmTxtUI>생일</NameInputNmTxtUI>
      <InputListUI>
        <YearInputUI
          type="number"
          placeholder="yyyy"
          maxLength={4}
          {...year?.field}
        />

        <InputUI
          placeholder="mm"
          {...month?.field}
          maxLength={2}
          type="number"
        />
        <InputUI
          placeholder="dd"
          {...date?.field}
          maxLength={2}
          type="number"
        />
      </InputListUI>
      {errorMessage && <p>{errorMessage}</p>}
    </BirthInputUI>
  );
};

export default BirthInput;
