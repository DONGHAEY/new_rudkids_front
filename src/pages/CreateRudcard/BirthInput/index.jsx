import {
  InputUI,
  NameInputNmTxtUI,
  BirthInputUI,
  YearInputUI,
  InputListUI,
} from "./styles";

const BirthInput = ({ yearRegister, monthRegister, dateRegister }) => {
  return (
    <BirthInputUI>
      <NameInputNmTxtUI>생일</NameInputNmTxtUI>
      <InputListUI>
        <YearInputUI placeholder="yyyy" {...yearRegister} type="number" />
        <InputUI placeholder="mm" {...monthRegister} type="number" />
        <InputUI placeholder="dd" {...dateRegister} type="number" />
      </InputListUI>
    </BirthInputUI>
  );
};

export default BirthInput;
