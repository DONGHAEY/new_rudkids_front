import {
  InputUI,
  NameInputNmTxtUI,
  BirthInputUI,
  YearInputUI,
  InputListUI,
} from "./styles";
import ErrorMsg from "../ErrorMsg";

const BirthInput = ({ year, month, date, errorMessage }) => {
  //
  const regex = /^[0-9]/;

  //
  const yearOnchange = (e) => {
    const targetValue = e.target.value;
    if (targetValue === "" || regex.test(targetValue)) {
      if (targetValue.length > 4) return;
      year?.field?.onChange(e);
    }
  };

  const monthOnchange = (e) => {
    let targetValue = e.target.value;
    if (targetValue === "" || regex.test(targetValue)) {
      if (targetValue.length <= 3) {
        targetValue = targetValue.substring(
          targetValue.length - 2,
          targetValue.length
        );
        e.target.value = targetValue.padStart(2, "0");
      } else {
        return;
      }
      month?.field?.onChange(e);
    }
  };

  const dateOnchange = (e) => {
    let targetValue = e.target.value;
    if (targetValue === "" || regex.test(targetValue)) {
      if (targetValue.length <= 3) {
        targetValue = targetValue.substring(
          targetValue.length - 2,
          targetValue.length
        );
        e.target.value = targetValue.padStart(2, "0");
      } else {
        return;
      }
      date?.field?.onChange(e);
    }
  };

  return (
    <>
      <BirthInputUI>
        <NameInputNmTxtUI>생일</NameInputNmTxtUI>
        <InputListUI>
          <YearInputUI
            type="number"
            placeholder="yyyy"
            {...year?.field}
            onChange={yearOnchange}
          />

          <InputUI
            placeholder="mm"
            {...month?.field}
            onChange={monthOnchange}
            type="number"
          />
          <InputUI
            placeholder="dd"
            {...date?.field}
            onChange={dateOnchange}
            type="number"
          />
        </InputListUI>
      </BirthInputUI>
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </>
  );
};

export default BirthInput;
